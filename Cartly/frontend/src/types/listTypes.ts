export type Item = {
  id: string;
  name: string;
  quantity: number;
  checked: boolean;
  listId: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type ListType = {
  id: string;
  name: string;
  createdAt: Date;
  owner: User;
  ownerId: string;
  members: User[];
  items: Item[];
};
