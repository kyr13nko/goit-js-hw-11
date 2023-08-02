import { fetchPixabayData } from './pixabay-api';
import { createMarkup } from './markup';

const refs = {
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

refs.loadMoreBtn.classList = 'is-hidden';

refs.form.addEventListener('submit', onFormSubmit);

let searchPage = 1;
let searchQuery = '';

function onFormSubmit(event) {
  event.preventDefault();

  searchQuery = event.target.elements.searchQuery.value;

  fetchPixabayData(searchQuery, searchPage).then(data => {
    console.log(data.hits);
    createMarkup(data.hits);
  });

  refs.form.reset();
}

export { refs };
