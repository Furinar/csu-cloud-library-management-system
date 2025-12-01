import request from '@/utils/request';

export interface Notification {
  id: string;
  title: string;
  content: string;
  type: 'DUE_REMINDER' | 'RESERVATION_AVAILABLE' | 'OVERDUE_NOTICE' | 'SYSTEM_NOTICE';
  status: 'UNREAD' | 'READ';
  gmtCreate: string;
}

export interface NotificationQuery {
  currentPage?: number;
  pageSize?: number;
}

export interface SendNotificationDTO {
  title: string;
  content: string;
  userId?: string; // Optional: if null/empty, send to all
  type: 'SYSTEM_NOTICE' | 'DUE_REMINDER';
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

// Admin: Send notification
export const sendNotification = (data: SendNotificationDTO): Promise<void> => {
  // Note: This endpoint might not exist in the backend yet based on api.md
  // Assuming a standard admin endpoint
  return request({
    url: '/admin/notifications',
    method: 'post',
    data,
  });
};
