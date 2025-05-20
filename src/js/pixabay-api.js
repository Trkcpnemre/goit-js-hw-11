import axios from 'axios';

const API_KEY = '50407097-97f89f24cac4a5e9b5e4904eb';
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
      console.log(error);
      return [];
    });
}