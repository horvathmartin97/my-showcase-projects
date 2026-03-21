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
  addMember: async (
    listId: string,
    email: string,
    ownerId: string,
  ): Promise<List> => {
    const list = await prisma.list.findUnique({ where: { id: listId } });
    if (!list || list.ownerId !== ownerId) {
      throw new HttpError("Forbidden", 403);
    }
    const userToAdd = await prisma.user.findUnique({ where: { email } });
    if (!userToAdd) {
      throw new HttpError("User not found", 404);
    }
    if (userToAdd.id === ownerId) {
      throw new HttpError("You are already the owner of the list", 400);
    }
    return prisma.list.update({
      where: { id: listId },
      data: { members: { connect: { id: userToAdd.id } } },
      include: { members: { select: { id: true, name: true, email: true } } },
    });
  },
  removeMember: async (
    listId: string,
    memberId: string,
    ownerId: string,
  ): Promise<List> => {
    const list = await prisma.list.findUnique({ where: { id: listId } });
    if (!list || list.ownerId !== ownerId) {
      throw new HttpError("Forbidden", 403);
    }
    return prisma.list.update({
      where: { id: listId },
      data: { members: { disconnect: { id: memberId } } },
      include: { members: { select: { id: true, name: true, email: true } } },
    });
  },
};
export default listService;
