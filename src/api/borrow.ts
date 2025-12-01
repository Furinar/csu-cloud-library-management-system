import request from '@/utils/request';
import type { BorrowRecord, BorrowRequestDTO, ReturnRequestDTO } from '@/types/borrow';
import type { PageResponse } from '@/types/book';

export const borrowBook = (data: BorrowRequestDTO): Promise<BorrowRecord> => {
  return request({
    url: '/borrow',
    method: 'post',
    data,
  });
};

export const returnBook = (data: ReturnRequestDTO): Promise<BorrowRecord> => {
  return request({
    url: '/return',
    method: 'post',
    data,
  });
};

export const getCurrentBorrows = (currentPage: number, pageSize: number): Promise<PageResponse<BorrowRecord>> => {
  return request({
    url: '/borrows/me',
    method: 'get',
    params: { currentPage, pageSize }
  });
};

export const getHistoryBorrows = (currentPage: number, pageSize: number): Promise<PageResponse<BorrowRecord>> => {
  return request({
    url: '/borrows/history',
    method: 'get',
    params: { currentPage, pageSize }
  });
};

export const deleteHistoryRecords = (idList: string[]): Promise<void> => {
  return request({
    url: '/borrows/history',
    method: 'delete',
    data: { idList } // Assuming backend expects body for DELETE (not standard but specified in api.md)
  });
};
