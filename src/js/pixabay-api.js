import axios from 'axios';
import { Notify } from 'notiflix';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38612525-9c00fd32cf86797bbff975221';

async function fetchPixabayData(q, page) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 40,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.message);
    Notify.failure('Ooops... Something goes wrong. Please, try again.');
  }
}

export { fetchPixabayData };
