export type ApiResponse<T> = {
  ok: boolean;
  message: string;
  data: T;
};
