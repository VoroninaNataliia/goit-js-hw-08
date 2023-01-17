import { galleryItems } from './gallery-items.js';

// Change code below this line

const divContainerEl = document.querySelector('.gallery');

const makeMarkup = function () {
  const markup = galleryItems.map(item => {
    return `
       <div class="gallery__item">
         <a href="${item.original}" class="gallery__link">
          <img class = "gallery__image"
            src="${item.preview}"
            data-banner-url="${item.original}"
            alt="${item.description}"
          />
         </a>
       </div>
      `;
  });
  return markup.join('');
};

divContainerEl.insertAdjacentHTML('afterbegin', makeMarkup());

divContainerEl.addEventListener('click', onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.bannerUrl}" width = "800", heigth = "600">
  `);

  instance.show();

  divContainerEl.instance = instance;
  divContainerEl.addEventListener('keydown', keydownCallback);
}

const keydownCallback = e => {
  console.log(e);
  if (e.code === 'Escape') {
    divContainerEl.instance.close();
    delete divContainerEl.instance;
    divContainerEl.removeEventListener('keydown', keydownCallback);
  }
};
