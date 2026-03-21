import { useCallback, useState } from "react";
import type { ListType } from "../types/listTypes";
import { addNewList, type AddNewListType } from "../schemas/listSchema";
import { addList } from "../services/listService";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface AddListModalProps {
  token: string;
  onClose: () => void;
  onSuccess: (newList: ListType) => void;
}

export default function AddListModal({
  token,
  onClose,
  onSuccess,
}: AddListModalProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddNewListType>({
    resolver: zodResolver(addNewList),
    mode: "onChange",
    defaultValues: { name: "" },
  });

  const onSubmit: SubmitHandler<AddNewListType> = useCallback(
    async (data) => {
      setLoading(true);
      setError("");
      try {
        const response = await addList(data.name, token);
        onSuccess(response.data);
        onClose();
      } catch {
        setError("Failed to add list. Try again");
      } finally {
        setLoading(false);
      }
    },
    [token, onClose, onSuccess],
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
        <h2 className="text-white font-bold text-lg mb-4">Create New List</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <div>
            <label className="text-gray-400 text-sm mb-1 block" htmlFor="name">
              List name
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Weekly Groceries"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
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
              {loading ? "Creating..." : "Create List"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
