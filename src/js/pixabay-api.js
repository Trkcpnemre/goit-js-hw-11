// src/js/pixabay-api.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY; // .env'den al
const URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits)
    .catch(error => {
      console.error('API error:', error);
      return [];
    });
}