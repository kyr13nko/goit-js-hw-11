import { fetchPixabayData } from './pixabay-api';
import { createMarkup } from './02-markup';
import { refs } from './refs';

import { Notify } from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

refs.form.addEventListener('submit', onFormSubmit);

let searchQuery = '';
let searchPage;

// lightbox = new SimpleLightbox('.gallery a', {
//   overlayOpacity: 0.5,
//   captionDelay: 250,
// });

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry);
        getImages(searchQuery, searchPage);
      }
    });
  },
  {
    root: null,
    rootMargin: '100px',
    threshold: 1.0,
  }
);

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

    if (searchPage === 1) {
      Notify.success(`Hooray! We found ${data.totalHits} images.`);
    }

    const lastPage = Math.ceil(data.totalHits / 40);

    if (searchPage === lastPage) {
      {
        observer.unobserve(refs.guard);
        Notify.info(
          `We're sorry, but you've reached the end of search results.`
        );
        return;
      }
    }

    searchPage += 1;
    observer.observe(refs.guard);

    // lightbox.refresh();
  } catch (error) {
    console.log(error);
    Notify.failure(`Ooops... Something goes wrong. Please, try again.`);
  }
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
