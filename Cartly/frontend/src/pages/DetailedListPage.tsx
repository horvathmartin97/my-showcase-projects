import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import type { ListType } from "../types/listTypes";
import {
  getMyDetailedList,
  renameList,
  toggleItem,
} from "../services/listService";
import { useParams } from "react-router";
import AddItemModal from "../components/AddItemModal";
import { deleteItem } from "../services/itemService";

export default function DetailedListPage() {
  const auth = useContext(AuthContext);
  const token = useMemo(() => auth?.user?.token ?? null, [auth?.user?.token]);
  const { listId } = useParams<{ listId: string }>();

  const [data, setData] = useState<ListType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmDeleteItemId, setConfirmDeleteItemId] = useState<string | null>(
    null,
  );
  const [editingListId, setEditingListId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  useEffect(() => {
    if (!token) {
      setError("Authentication is required");
      return;
    }
    if (!listId) {
      setError("List not found");
      return;
    }

    const fetchDetailedList = async () => {
      setLoading(true);
      try {
        const response = await getMyDetailedList(listId, token);
        setData(response?.data ?? null);
      } catch (err) {
        setError("Failed to load list");
      } finally {
        setLoading(false);
      }
    };
    fetchDetailedList();
  }, [token, listId]);

  const handleDelete = useCallback(
    async (itemId: string) => {
      if (!itemId) {
        setError("Item is not found");
        return;
      }
      if (!token) {
        setError("Authentication is required");
        return;
      }
      try {
        await deleteItem(itemId, token);
        setData((prev) =>
          prev
            ? {
                ...prev,
                items: prev.items.filter((item) => item.id !== itemId),
              }
            : prev,
        );
      } catch {
        setError("Failed to delete item");
      }
    },
    [token],
  );

  const handleToggleItem = useCallback(
    async (itemId: string, checked: boolean) => {
      if (!token) return;
      setData((prev) =>
        prev
          ? {
              ...prev,
              items: prev.items.map((item) =>
                item.id === itemId ? { ...item, checked } : item,
              ),
            }
          : prev,
      );

      try {
        await toggleItem(itemId, checked, token);
      } catch {
        setData((prev) =>
          prev
            ? {
                ...prev,
                items: prev.items.map((item) =>
                  item.id === itemId ? { ...item, checked: !checked } : item,
                ),
              }
            : prev,
        );
      }
    },
    [token],
  );

  const handleRename = async () => {
    setEditingListId(null);
    if (!editingName.trim()) return;

    const original = data?.name ?? "";
    if (editingName === original) return;

    setData((prev) => (prev ? { ...prev, name: editingName } : prev));

    try {
      await renameList(data!.id, editingName, token!);
    } catch {
      setError("Failed to rename list");

      setData((prev) => (prev ? { ...prev, name: original } : prev));
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-400 animate-pulse">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-400">{error}</p>
      </div>
    );

  if (!data) return null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        {editingListId === data.id ? (
          <input
            autoFocus
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleRename();
              if (e.key === "Escape") setEditingListId(null);
            }}
            className="bg-gray-700 text-white font-bold text-2xl rounded-lg px-3 py-1 outline-none w-40 border border-indigo-500"
          />
        ) : (
          <h1
            className="text-2xl font-bold text-white cursor-pointer hover:text-indigo-300 transition"
            onClick={() => {
              setEditingListId(data.id);
              setEditingName(data.name);
            }}
          >
            {data.name} ✏️
          </h1>
        )}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          + Add Item
        </button>
      </div>

      {isModalOpen && (
        <AddItemModal
          listId={listId!}
          token={token!}
          onClose={() => setIsModalOpen(false)}
          onSuccess={(newItem) =>
            setData((prev) =>
              prev ? { ...prev, items: [...prev.items, newItem] } : prev,
            )
          }
        />
      )}
      <div className="bg-gray-800 rounded-xl px-5 py-4 mb-4">
        <h2 className="text-gray-400 text-sm font-semibold uppercase mb-3">
          Shared with
        </h2>
        {data.members.length === 0 ? (
          <p className="text-gray-500 text-sm">Not shared with anyone yet.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {data.members.map((member) => (
              <span
                key={member.id}
                className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
              >
                {member.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-800 rounded-xl px-5 py-4">
        <h2 className="text-gray-400 text-sm font-semibold uppercase mb-3">
          Items ({data.items.length})
        </h2>
        {data.items.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No items yet. Add your first one!
          </p>
        ) : (
          <ul className="flex flex-col gap-2">
            {data.items.map((item) => (
              <li
                key={item.id}
                className={`flex items-center rounded-lg px-4 py-3 transition gap-3 ${
                  item.checked ? "bg-gray-800" : "bg-gray-700"
                }`}
              >
                {/* Toggle gomb — fix méret */}
                <button
                  onClick={() => handleToggleItem(item.id, !item.checked)}
                  className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
                    item.checked
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-500 hover:border-blue-400"
                  }`}
                >
                  {item.checked && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>

                <span
                  className={`flex-1 min-w-0 truncate transition ${
                    item.checked ? "line-through text-gray-500" : "text-white"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`shrink-0 w-12 font-bold text-right text-sm transition ${
                    item.checked ? "text-indigo-900/50" : "text-indigo-300"
                  }`}
                >
                  x{item.quantity}
                </span>

                <button
                  onClick={() => setConfirmDeleteItemId(item.id)}
                  className="shrink-0 text-red-500 transition cursor-pointer"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {confirmDeleteItemId && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setConfirmDeleteItemId(null)}
        >
          <div
            className="bg-gray-800 rounded-xl p-6 w-full max-w-sm mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-2xl mb-3">🗑️</p>
            <h2 className="text-white font-bold text-lg mb-2">Delete Item?</h2>
            <p className="text-gray-400 text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDeleteItemId(null)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(confirmDeleteItemId);
                  setConfirmDeleteItemId(null);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
