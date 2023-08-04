import { refs } from './refs';

export function createMarkup(array) {
  const markup = array
    .map(({ webformatURL, tags, likes, views, comments, downloads }) => {
      return `
          <div class="photo-card-ml">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b> ${likes}
              </p>
              <p class="info-item">
                <b>Views</b> ${views}
              </p>
              <p class="info-item">
                <b>Comments</b> ${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b> ${downloads}
              </p>
            </div>
          </div>
          `;
    })
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
