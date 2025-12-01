import request from '@/utils/request';
import type { LoginDTO, RegisterDTO, LoginResponse, User } from '@/types/user';

export const login = (data: LoginDTO): Promise<LoginResponse> => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  });
};

export const register = (data: RegisterDTO): Promise<void> => {
  return request({
    url: '/auth/register',
    method: 'post',
    data,
  });
};

export const getUserInfo = (): Promise<User> => {
  return request({
    url: '/auth/me',
    method: 'get',
  });
};

export const logout = (): Promise<void> => {
  // Usually logout is just client side token removal, unless backend has a blacklist
  return Promise.resolve(); 
};
