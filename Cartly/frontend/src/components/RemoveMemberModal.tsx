import { useCallback, useState } from "react";
import { removeMember } from "../services/listService";

interface ModalProps {
  listId: string;
  token: string;
  memberId: string;
  memberName: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function RemoveMemberModal({
  listId,
  token,
  memberId,
  memberName,
  onClose,
  onSuccess,
}: ModalProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      await removeMember(listId, memberId, token);
      onSuccess();
      onClose();
    } catch {
      setError("Failed to remove member. Try again.");
    } finally {
      setLoading(false);
    }
  }, [listId, token, memberId, onClose, onSuccess]);

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-xl p-6 w-full max-w-sm mx-4 "
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-3xl mb-3">👤</p>
        <h2 className="text-white font-bold text-lg mb-2">Remove Member?</h2>
        <p className="text-gray-400 text-sm mb-1">
          Are you sure you want to remove
        </p>
        <p className="text-white font-semibold mb-5">"{memberName}"</p>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Removing..." : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
}
