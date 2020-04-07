export const TOKEN_KEY = 'authToken';

export const clearStorage = () => {
  localStorage.removeItem(TOKEN_KEY);
};
