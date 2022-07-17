// eslint-disable-next-line no-unused-vars
import axios from 'axios';

// eslint-disable-next-line no-unused-vars
const API_KEY = '27714328-f8800d5e9a5f7cfa6f85a6657';
// eslint-disable-next-line no-unused-vars
const BASE_URL = 'https://pixabay.com/';

const fetchData = async (query, page, perPage) => {
  const response = await axios.get(
    `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  return response.data;
};

export default fetchData;
