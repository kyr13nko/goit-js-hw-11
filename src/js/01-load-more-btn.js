import { Notify } from 'notiflix';
import SimpleLightbox from 'simplelightbox';

import { fetchPixabayData } from './pixabay-api';
import { createMarkup } from './markup';
import { refs } from './refs';

refs.form.addEventListener('submit', onFormSubmit);

let searchQuery = '';
let searchPage;

const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.5,
  captionDelay: 250,
});

async function getImages(q, pages) {
  try {
    const data = await fetchPixabayData(q, pages);
    console.log(data.hits);
    console.log(data);

    if (!data.totalHits) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }

    createMarkup(data.hits);

    const lastPage = Math.ceil(data.totalHits / 40);

    if (searchPage >= lastPage) {
      refs.loadMoreBtn.classList.add('is-hidden');
      Notify.info(`We're sorry, but you've reached the end of search results.`);
    } else {
      refs.loadMoreBtn.classList.remove('is-hidden');
    }

    lightbox.refresh();
  } catch (error) {
    console.log(error);
    Notify.failure(`Ooops... Something goes wrong. Please, try again.`);
  }
}

refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);

function onLoadMoreBtnClick() {
  searchPage += 1;
  refs.loadMoreBtn.classList.add('is-hidden');
  getImages(searchQuery, searchPage);
}

function onFormSubmit(event) {
  event.preventDefault();

  const inputValue = event.target.elements.searchQuery.value;

  if (!inputValue.trim() || inputValue === searchQuery)
    return Notify.warning('Please enter something to search');

  searchQuery = inputValue;
  searchPage = 1;

  refs.gallery.innerHTML = '';

  getImages(searchQuery, searchPage);

  refs.form.reset();
}
