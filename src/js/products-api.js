import axios from 'axios';
import { BASE_URL, ENDPOINTS, LIMIT } from './constants';

axios.defaults.baseURL = BASE_URL;

export let page = 1;

export const incrementPage = () => (page += 1);
export const getPage = () => page;

export const fetchCategories = async () => {
  const { data } = await axios(`${ENDPOINTS.CATEGORIES}`);
  return data;
};

export const fetchFurniture = async (page = 1, categoryId = null) => {
  const { data } = await axios(`${ENDPOINTS.FURNITURES}`, {
    params: {
      limit: LIMIT,
      page: page,
      category: categoryId,
    },
  });
  console.log(data);
  return data;
};

export async function fetchFurnitureDetails(id) {
  try {
    const response = await axios(`${ENDPOINTS.FURNITURES}/${id}`);
    return response.data;
  } catch (error) {}
}
