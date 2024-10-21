const mainNavigation = document.querySelector('.main-navigation');
const mainNavigationToggle = document.querySelector('.main-navigation__toggle');

const setDropdownState = () => {
  mainNavigation.classList.toggle('main-navigation--closed');
  mainNavigation.classList.toggle('main-navigation--opened');
};

const initMenu = () => {
  mainNavigationToggle.addEventListener('click', setDropdownState);
};

export { initMenu };
