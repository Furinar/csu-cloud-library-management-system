import request from '@/utils/request';

export interface Notification {
  id: string;
  title: string;
  content: string;
  type: 'DUE_REMINDER' | 'RESERVATION_AVAILABLE' | 'OVERDUE_NOTICE';
  status: 'UNREAD' | 'READ';
  gmtCreate: string;
}

export interface NotificationQuery {
  currentPage?: number;
  pageSize?: number;
}

export const getNotifications = (params: NotificationQuery): Promise<{ records: Notification[], totalCount: number }> => {
  return request({
    url: '/notifications/me',
    method: 'get',
    params,
  });
};

export const getUnreadCount = (): Promise<{ count: number }> => {
  return request({
    url: '/notifications/unread-count',
    method: 'get',
  });
};

export const readNotifications = (notificationIdList: string[]): Promise<void> => {
  return request({
    url: '/notifications/read',
    method: 'put',
    data: { notificationIdList },
  });
};

