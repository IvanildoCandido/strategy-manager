import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});
export const getCardByName = async (name) => {
  return api.get(`/cards?name=${encodeURI(name)}`);
};

export const getMagics = async () => {
  return api.get('/magics');
};
export const getManas = async () => {
  const manas = await api.get('/manas');
  manas.data.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0,
  );
  return manas;
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
export const getStrategies = async () => {
  return api.get('/strategies');
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
export const getCardsByServer = async () => {
  const response = await axios.get(
    'https://api2.splinterlands.com/cards/get_details',
  );
  return response.data.map((result) => ({
    name: result.name,
    type: result.type,
    editions: result.editions
      .split(',')
      .map((edition) => ({ title: editionParseName(edition) })),
  }));
};
export const getImageFromServer = async (name, edition, level) => {
  const URL = `https://d36mxiodymuqjm.cloudfront.net/cards_by_level/${edition.toLowerCase()}/${encodeURI(
    name,
  )}_lv${level}.png`;
  return axios.get(URL);
};

const editionParseName = (edition) => {
  switch (edition) {
    case '0':
      return 'ALPHA';
    case '1':
      return 'BETA';
    case '2':
      return 'PROMO';
    case '3':
      return 'REWARD';
    case '4':
      return 'UNTAMED';
    case '5':
      return 'DICE';
    default:
      return;
  }
};
export const filterStrategies = async (mana, magic, role) => {
  let URL = '/strategies?';
  if (mana !== null) {
    URL += `manaLimit=${mana}`;
  }
  if (magic !== null) {
    URL += `&magicType=${magic}`;
  }
  if (role !== null) {
    URL += `&roleType=${encodeURI(role)}`;
  }
  return api.get(URL);
};
