export interface ApiResponse<T> {
  ok: boolean;
  message: string;
  data: T;
}
export interface PaginatedResponse<T> extends ApiResponse<T> {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
