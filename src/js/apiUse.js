import axios from 'axios';

const per_page = 40;
let totalPages = 0;

async function getGallery(query, page) {
  const API_KEY = '36028425-48f97f4e693396b4b6c5eb90a';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
    page: page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  totalPages = response.data.totalHits / per_page;
  return response;
}

export { getGallery, totalPages };
