const imgSlider = document.querySelector('#slider-img');

const arrOfImg = [
  './images/img-2.jpg',
  './images/img-3.jpg',
  './images/img-4.jpg',
  './images/img-5.jpg',
  './images/img-6.jpg',
  './images/img-7.jpg',
  './images/img-8.jpg',
];

console.log(arrOfImg.length);
let imgIndex = 0;

setInterval(() => {
  imgIndex >= arrOfImg.length ? imgIndex = 0 : '';
  imgSlider.src = arrOfImg[imgIndex];
  imgIndex++;
}, 2000);
