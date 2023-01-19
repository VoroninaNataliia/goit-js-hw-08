import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const ulContainerEl = document.querySelector('.gallery');

const makeMarkup = function () {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
      `;
  });
  return markup.join('');
};

ulContainerEl.insertAdjacentHTML('afterbegin', makeMarkup());

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
