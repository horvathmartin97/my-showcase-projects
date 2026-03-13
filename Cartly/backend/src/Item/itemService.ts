import { Item } from "../../generated/prisma";
import prisma from "../utils/prisma";
import { ItemSchemaType } from "./itemSchema";

const itemService = {
  postItem: async (itemData: ItemSchemaType, listId: string): Promise<Item> => {
    const newItem = await prisma.item.create({
      data: { ...itemData, list: { connect: { id: listId } } },
    });
    return newItem;
  },
};
