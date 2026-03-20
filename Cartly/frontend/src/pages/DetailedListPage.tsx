import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import type { ListType } from "../types/listTypes";
import { getMyDetailedList } from "../services/listService";
import { useParams } from "react-router";

export default function DetailedListPage() {
  const auth = useContext(AuthContext);
  const token = useMemo(() => auth?.user?.token ?? null, [auth?.user?.token]);
  const { listId } = useParams<{ listId: string }>();

  const [data, setData] = useState<ListType | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
        <h1 className="text-2xl font-bold text-white">{data.name}</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          + Add Item
        </button>
      </div>

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
                className="flex justify-between items-center bg-gray-700 rounded-lg px-4 py-3"
              >
                <span className="text-white">{item.name}</span>
                <span className="text-gray-400 text-sm">x{item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
