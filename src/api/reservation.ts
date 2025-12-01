import request from '@/utils/request';

export interface Reservation {
  id: string;
  bookId: string;
  bookTitle: string;
  bookAuthor: string;
  reservationDate: string;
  status: 'PENDING' | 'AVAILABLE' | 'FULFILLED' | 'CANCELLED';
}

export const createReservation = (bookId: string): Promise<Reservation> => {
  return request({
    url: '/reservation',
    method: 'post',
    data: { bookId },
  });
};

export const getMyReservations = (currentPage: number, pageSize: number): Promise<{ records: Reservation[], totalCount: number }> => {
  return request({
    url: '/reservation/me',
    method: 'get',
    params: { currentPage, pageSize },
  });
};

export const cancelReservation = (reservationId: string): Promise<void> => {
  return request({
    url: '/reservation/cancel',
    method: 'put',
    data: { reservationId },
  });
};

export const getAllReservations = (currentPage: number, pageSize: number): Promise<{ records: Reservation[], totalCount: number }> => {
  return request({
    url: '/admin/reservation',
    method: 'get',
    params: { currentPage, pageSize },
  });
};

