export const apiUrl = 'http://localhost:3001/api';

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const setToken = (payload: string): any => {
  return localStorage.setItem('token', payload);
};

export const removeToken = (): void => {
  return localStorage.removeItem('token');
};

export default { apiUrl, getToken, setToken, removeToken };
