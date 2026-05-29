
'use strict'
const btnOpen = document.querySelector('.btn--open');
const modal = document.querySelector('.modal');
const modalViewHandler = () => {
  console.log(1)
  modal.classList.toggle('modal--open');
}
btnOpen.addEventListener('click', modalViewHandler);
modal.addEventListener('click', modalViewHandler);


const closeTextBtn = document.querySelector('.close-text-btn');
  btnClose.addEventListener('click', modalViewHandler);
