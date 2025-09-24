import type { Car } from "./carTypes";

export type SearchResult = {
  ok: boolean;
  message: string;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  data: Car[];
};
