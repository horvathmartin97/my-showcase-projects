import { useCallback, useState } from "react";
import type { ListType } from "../types/listTypes";
import { useForm, type SubmitHandler } from "react-hook-form";
import { type AddNewMember, addNewMemberSchema } from "../schemas/listSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { addMember } from "../services/listService";
import { useParams } from "react-router";

interface AddMemberProps {
  token: string;

  onClose: () => void;
  onSuccess: (newList: ListType) => void;
}

export default function AddMemberModal({
  token,
  onClose,
  onSuccess,
}: AddMemberProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { listId } = useParams<{ listId: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddNewMember>({
    resolver: zodResolver(addNewMemberSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const onSubmit: SubmitHandler<AddNewMember> = useCallback(
    async (data) => {
      setLoading(true);
      setError("");
      try {
        if (!listId) {
          setError("List not found");
          return;
        }
        const response = await addMember(listId!, data.email, token);
        onSuccess(response.data);
        onClose();
      } catch {
        setError("Failed to add member");
      } finally {
        setLoading(false);
      }
    },
    [token, onClose, onSuccess, listId],
  );

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-xl p-6 w-full max-w-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-white font-bold text-lg mb-4">Add Member</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <div>
            <label className="text-gray-400 text-sm mb-1 block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-lg transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-2.5 rounded-lg transition"
            >
              {loading ? "Adding..." : "Add member"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
