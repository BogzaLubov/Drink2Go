const buttonBack = document.querySelector('.hero__page-button--back');
const buttonForward = document.querySelector('.hero__page-button--forward');
const heroItems = document.querySelectorAll('.hero__item');
const buttonList = document.querySelectorAll('.hero__pagination-button');

const getActiveSlide = (pages) => {
  const index = Array.from(pages).findIndex((page) => page.classList.contains('hero__item--active'));
  return index;
};

const setPageActive = (oldIndex, newIndex) => {
  heroItems[oldIndex].classList.remove('hero__item--active');
  buttonList[oldIndex].classList.remove('hero__pagination-button--active');

  heroItems[newIndex].classList.add('hero__item--active');
  buttonList[newIndex].classList.add('hero__pagination-button--active');

  buttonBack.disabled = newIndex === 0;
  buttonForward.disabled = newIndex === (Array.from(heroItems).length - 1);
};


const onBackClick = () => {
  const currentIndex = getActiveSlide(heroItems);
  if (currentIndex > 0) {
    setPageActive(currentIndex, currentIndex - 1);
  }
};

const onForwardClick = () => {
  const currentIndex = getActiveSlide(heroItems);
  if (currentIndex >= 0 && currentIndex < heroItems.length - 1) {
    setPageActive(currentIndex, currentIndex + 1);
  }
};

const onPageClick = ({ target }) => {
  const currentIndex = getActiveSlide(heroItems);
  const newIndex = Array.from(buttonList).indexOf(target);
  if (newIndex !== -1 && newIndex !== currentIndex) {
    setPageActive(currentIndex, newIndex);
  }
};

const initGallery = () => {
  buttonBack.addEventListener('click', onBackClick);
  buttonForward.addEventListener('click', onForwardClick);
  buttonList.forEach((button) =>
    button.addEventListener('click', onPageClick)
  );
};

export { initGallery };
