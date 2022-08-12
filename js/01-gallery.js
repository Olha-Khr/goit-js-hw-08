// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

const galleryMarkup = createGalleryMurkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;

const gallery = new SimpleLightbox('.gallery  a', {
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMurkup(gallery) {
  return gallery
    .map(image => {
      return `
        <a class="gallery__item" href="${image.original}">
            <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
        </a>
        `;
    })
    .join('');
}