import request from '@/utils/request';
import type { Book, BookQuery, PageResponse, BookCreateDTO, BookUpdateDTO } from '@/types/book';

export const getBooks = (params: BookQuery): Promise<PageResponse<Book>> => {
  return request({
    url: '/books',
    method: 'get',
    params,
  });
};

export const getBookById = (bookId: string): Promise<Book> => {
  return request({
    url: `/books/${bookId}`,
    method: 'get',
  });
};

export const createBook = (data: BookCreateDTO): Promise<Book> => {
  return request({
    url: '/admin/books',
    method: 'post',
    data,
  });
};

export const updateBook = (bookId: string, data: BookUpdateDTO): Promise<Book> => {
  return request({
    url: `/admin/books/${bookId}`,
    method: 'put',
    data,
  });
};

export const deleteBooks = (idList: string[]): Promise<void> => {
  return request({
    url: '/admin/books',
    method: 'delete',
    data: { idList },
  });
};

// Not strictly in api.md as /books/recommend, but often needed. 
// Using getBooks with sorting or a specific backend endpoint if available.
// Since api.md doesn't specify /books/recommend, I will simulate it using getBooks or assume it might be added.
// For strict adherence, I'll use getBooks.
export const getRecommendBooks = async (): Promise<Book[]> => {
  // Fallback to fetching list for now
  const res = await getBooks({ currentPage: 1, pageSize: 5 });
  return res.records;
};
