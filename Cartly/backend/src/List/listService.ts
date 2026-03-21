import { List } from "../../generated/prisma";
import prisma from "../utils/prisma";
import { AddNewListType, UpdateListInput } from "./listSchema";

import HttpError from "../utils/HttpError";

const listService = {
  addNewList: async (data: AddNewListType, userId: string) => {
    const newList = await prisma.list.create({
      data: { ...data, owner: { connect: { id: userId } } },
      include: { items: true, members: true },
    });
    return newList;
  },
  getLists: async (userId: string) => {
    const lists = await prisma.list.findMany({
      where: {
        OR: [{ ownerId: userId }, { members: { some: { id: userId } } }],
      },
      include: {
        items: true,
        owner: {
          select: { id: true, name: true, email: true },
        },
        members: {
          select: { id: true, name: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return lists;
  },
  deleteList: async (listId: string): Promise<List> => {
    const isListExist = await prisma.list.findUnique({
      where: { id: listId },
    });
    if (!isListExist) {
      throw new HttpError("List is not exists", 404);
    }
    return await prisma.list.delete({ where: { id: listId } });
  },
  getListById: async (listId: string): Promise<List> => {
    const doesListExist = await prisma.list.findUnique({
      where: { id: listId },
      include: { items: true, members: true },
    });
    if (!doesListExist) {
      throw new HttpError("List is not exist", 404);
    }
    return doesListExist;
  },
  updateList: async (listId: string, data: UpdateListInput): Promise<List> => {
    const isListExist = await prisma.list.findUnique({
      where: { id: listId },
    });
    if (!isListExist) {
      throw new HttpError("List is not exists", 404);
    }
    return await prisma.list.update({
      where: { id: listId },
      data,
      include: { items: true, members: true },
    });
  },
};
export default listService;
