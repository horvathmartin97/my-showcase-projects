import { useContext, useEffect, useMemo, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import getAllLists from "../services/listService";
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
            <li key={list.id}>
              <Link
                to={`/list/${list.id}`}
                className="flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition rounded-xl px-5 py-4 group"
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
