// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
function createImageElement(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
   
    <a class="gallery__item" href="${original}">
    <img 
    style="display:block"
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
  </a>
  
    `;
    })
    .join('');
}

const galleryContainer = document.querySelector('.gallery');
const markup = createImageElement(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markup);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});