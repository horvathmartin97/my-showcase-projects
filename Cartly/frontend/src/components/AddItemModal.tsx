import { useCallback, useState } from "react";
import type { Item } from "../types/listTypes";
import { itemSchema, type ItemSchemaType } from "../schemas/itemSchema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addItem } from "../services/itemService";

interface ModalProps {
  listId: string;
  token: string;
  onClose: () => void;
  onSuccess: (newItem: Item) => void;
}

export default function AddItemModal({
  listId,
  token,
  onClose,
  onSuccess,
}: ModalProps) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ItemSchemaType>({
    resolver: zodResolver(itemSchema),
    mode: "onChange",
    defaultValues: { name: "", quantity: 1 },
  });

  const onSubmit: SubmitHandler<ItemSchemaType> = useCallback(
    async (data) => {
      setLoading(true);
      setError("");
      try {
        const response = await addItem(listId, data.name, data.quantity, token);
        onSuccess(response.data);
        onClose();
      } catch {
        setError("Failed to add item. Try again!");
      } finally {
        setLoading(false);
      }
    },
    [listId, token, onClose, onSuccess],
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
        <h2 className="text-white font-bold text-lg mb-4">Add New Item</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <div>
            <label className="text-gray-400 text-sm mb-1 block" htmlFor="name">
              Item name
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Milk"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              className="text-gray-400 text-sm mb-1 block"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              min={1}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
              {...register("quantity", { valueAsNumber: true })}
            />
            {errors.quantity && (
              <p className="text-red-400 text-xs mt-1">
                {errors.quantity.message}
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
              {loading ? "Adding..." : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
