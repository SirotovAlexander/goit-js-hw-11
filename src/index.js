import Notiflix from 'notiflix';
import { getGallery, totalPages } from './js/apiUse';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const btnLoad = document.querySelector('.load-btn');

form.addEventListener('change', onInput);
form.addEventListener('submit', onSubmit);
btnLoad.addEventListener('click', onClick);
