import { Item } from "../../generated/prisma";
import HttpError from "../utils/HttpError";
import prisma from "../utils/prisma";
import { ItemSchemaType } from "./itemSchema";

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
};
export default itemService;
