export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  publishDate: string;
  category: string;
  description: string;
  coverUrl: string;
  totalStock: number;
  availableStock: number;
  averageRating?: number;
}

export interface BookBrief {
  id: string;
  title: string;
  author: string;
  category: string;
  coverUrl: string;
  totalStock: number;
  availableStock: number;
}

export interface BookQuery {
  currentPage: number;
  pageSize: number;
  title?: string;
  author?: string;
  isbn?: string;
}

export interface PageResponse<T> {
  currentPage: number;
  pageSize: number;
  totalPage: number;
  totalCount: number;
  records: T[];
}

export interface BookCreateDTO {
  title: string;
  author: string;
  isbn: string;
  publisher: string;
  publishDate: string;
  category: string;
  description: string;
  coverUrl: string;
  totalStock: number;
}

export interface BookUpdateDTO extends BookCreateDTO {}
