import request from '@/utils/request';

export interface Review {
  id: string;
  bookId: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  gmtCreate: string;
}

export interface CreateReviewDTO {
  bookId: string;
  rating: number;
  comment: string;
}

export const createReview = (data: CreateReviewDTO): Promise<Review> => {
  return request({
    url: '/reviews',
    method: 'post',
    data,
  });
};

export const getReviewsByBookId = (bookId: string, currentPage: number = 1, pageSize: number = 10): Promise<{ records: Review[], totalCount: number }> => {
  return request({
    url: `/reviews/${bookId}`,
    method: 'get',
    params: { currentPage, pageSize },
  });
};

export const deleteReview = (reviewId: string): Promise<void> => {
  return request({
    url: `/review/${reviewId}`,
    method: 'delete',
  });
};

