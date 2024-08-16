export interface PaginationQuery {
  limit: number;
  page: number;
}

export interface PaginationData extends PaginationQuery {
  total: number;
}
