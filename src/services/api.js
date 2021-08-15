import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getMagics = async () => {
  return api.get('/magics');
};
export const getManas = async () => {
  return api.get('/manas');
};
export const getRoles = async () => {
  return api.get('/roles');
};
export const getCards = async () => {
  return api.get('/cards');
};
export const getCardsByLevel = async (level) => {
  return api.get(`/cards?level=${level}`);
};
export const getLevels = async () => {
  return api.get('/level');
};
export const setCard = async (card) => {
  await api.post('/cards', card);
};
export const getImage = async (name, level) => {
  const { data } = await api.get(`/cards?name=${name}&level=${level}`);
  return data[0].tumbnail;
};
export const postStrategy = async (strategy) => {
  await api.post('/strategies', strategy);
};
