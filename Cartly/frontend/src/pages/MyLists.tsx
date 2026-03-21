import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import getAllLists, { deleteList } from "../services/listService";
import type { ListType } from "../types/listTypes";
import { Link } from "react-router";
import AddListModal from "../components/AddListModal";

export default function MyLists() {
  const auth = useContext(AuthContext);
  const token = useMemo(() => auth?.user?.token ?? null, [auth?.user?.token]);

  const [lists, setLists] = useState<ListType[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setError("Authentication is required");
      return;
    }
    const fetchLists = async () => {
      setLoading(true);
      try {
        const response = await getAllLists(token);
        setLists(response?.data ?? []);
      } catch (err) {
        setError("Failed to load lists");
      } finally {
        setLoading(false);
      }
    };
    fetchLists();
  }, [token]);

  const handleDeleteList = useCallback(
    async (listId: string) => {
      if (!listId) {
        setError("List is not found");
        return;
      }
      if (!token) {
        setError("Authentication is required");
        return;
      }
      try {
        await deleteList(listId, token);
        setLists((prev) => prev.filter((list) => list.id !== listId));
      } catch {
        setError("Failed to delete list");
      }
    },
    [token],
  );

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-400 animate-pulse">Loading lists...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-400">{error}</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">My Lists</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
        >
          + New List
        </button>
      </div>

      {isModalOpen && (
        <AddListModal
          token={token!}
          onClose={() => setIsModalOpen(false)}
          onSuccess={(newList) => setLists((prev) => [...prev, newList])}
        />
      )}

      {lists.length === 0 ? (
        <div className="text-center text-gray-500 mt-16">
          <p className="text-lg">No lists yet.</p>
          <p className="text-sm mt-1">Create your first list to get started!</p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {lists.map((list) => (
            <li key={list.id} className="relative flex items-center">
              {" "}
              <Link
                to={`/list/${list.id}`}
                className="flex flex-1 justify-between items-center bg-gray-800 hover:bg-gray-700 transition rounded-xl px-5 py-4 group"
              >
                <div>
                  <p className="text-white font-semibold text-base group-hover:text-blue-400 transition">
                    {list.name}
                  </p>
                  <p className="text-gray-400 text-sm mt-0.5">
                    {list.items.length} item{list.items.length !== 1 ? "s" : ""}{" "}
                    · {list.members.length} member
                    {list.members.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <span className="text-gray-500 group-hover:text-blue-400 transition text-xl">
                  →
                </span>
              </Link>
              <button
                onClick={() => setConfirmDeleteId(list.id)}
                className="ml-3 text-red-600 cursor-pointer text-lg border rounded-md w-20"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      {confirmDeleteId && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setConfirmDeleteId(null)}
        >
          <div
            className="bg-gray-800 rounded-xl p-6 w-full max-w-sm mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-2xl mb-3">🗑️</p>
            <h2 className="text-white font-bold text-lg mb-2">Delete List?</h2>
            <p className="text-gray-400 text-sm mb-6">
              This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDeleteList(confirmDeleteId);
                  setConfirmDeleteId(null);
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
