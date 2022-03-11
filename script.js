const imgSlider = document.querySelector('#slider-img');
const slider = document.querySelector('#slider');

const arrOfImg = [
  './images/img-2.jpg',
  './images/img-3.jpg',
  './images/img-4.jpg',
  './images/img-5.jpg',
  './images/img-6.jpg',
  './images/img-7.jpg',
  './images/img-8.jpg',
];

// using array
let imgIndex = 0;
setInterval(() => {
  imgIndex >= arrOfImg.length ? (imgIndex = 0) : '';
  imgSlider.src = arrOfImg[imgIndex];
  imgIndex++;
}, 2000);

// not using array or dumb way
let i = 1;
setInterval(() => {
  i > 8 ? (i = 0) : '';
  slider.innerHTML = `
        <h1>using smart way</h1>
          <img src="./images/img-${i}.jpg" alt="" class="slider1" />
          `;
  i++;
}, 2000);
