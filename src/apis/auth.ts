import apis from '.';

export const signIn = (data) => apis.post('/api/auth', data);
