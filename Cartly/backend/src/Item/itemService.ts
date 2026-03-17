import { Item } from "../../generated/prisma";
import HttpError from "../utils/HttpError";
import prisma from "../utils/prisma";
import { ItemSchemaType, UpdateItemSchema } from "./itemSchema";

const itemService = {
  postItem: async (itemData: ItemSchemaType, listId: string): Promise<Item> => {
    const newItem = await prisma.item.create({
      data: { ...itemData, list: { connect: { id: listId } } },
    });
    return newItem;
  },
  deleteItem: async (itemId: string): Promise<Item> => {
    const isItemExist = await prisma.item.findUnique({
      where: { id: itemId },
    });
    if (!isItemExist) {
      throw new HttpError("Item is not found", 404);
    }
    return await prisma.item.delete({ where: { id: itemId } });
  },
  updateItem: async (
    itemId: string,
    itemData: UpdateItemSchema,
  ): Promise<Item> => {
    try {
      return await prisma.item.update({
        where: { id: itemId },
        data: itemData,
      });
    } catch {
      throw new HttpError("Item is not found", 404);
    }
  },
  getItemById: async (itemId: string): Promise<Item> => {
    const item = await prisma.item.findUnique({ where: { id: itemId } });
    if (!item) throw new HttpError("Item not found", 404);
    return item;
  },
};
export default itemService;
