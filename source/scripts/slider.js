const PRICE_CONFIG = {
  MIN: 0,
  MAX: 980,
  STEP: 1,
  START: [0, 900]
};

const slider = document.querySelector('.form__slider');
const minInput = document.querySelector('.form__slider-min');
const maxInput = document.querySelector('.form__slider-max');
const form = document.querySelector('.catalog__form');

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: PRICE_CONFIG.MIN,
      max: PRICE_CONFIG.MAX
    },
    step: PRICE_CONFIG.STEP,
    start: PRICE_CONFIG.START,
    connect: true,
    cssPrefix: 'noUi-',
    cssClasses: {
      target: 'target',
      base: 'base',
      origin: 'origin',
      handle: 'handle no-ui-slider__handle',
      handleLower: 'handleLower',
      handleUpper: 'handleUpper',
      touchArea: 'touch-area no-ui-slider__touch-area',
      horizontal: 'horizontal',
      vertical: 'vertical',
      background: 'background',
      connect: 'connect no-ui-slider__connect',
      connects: 'connects no-ui-slider__connects',
      ltr: 'ltr',
      rtl: 'rtl',
      textDirectionLtr: 'txt-dir-ltr',
      textDirectionRtl: 'txt-dir-rtl',
      draggable: 'draggable',
      drag: 'state-drag',
      tap: 'state-tap',
      active: 'active',
      tooltip: 'tooltip',
      pips: 'pips',
      pipsHorizontal: 'pips-horizontal',
      pipsVertical: 'pips-vertical',
      marker: 'marker',
      markerHorizontal: 'marker-horizontal',
      markerVertical: 'marker-vertical',
      markerNormal: 'marker-normal',
      markerLarge: 'marker-large',
      markerSub: 'marker-sub',
      value: 'value',
      valueHorizontal: 'value-horizontal',
      valueVertical: 'value-vertical',
      valueNormal: 'value-normal',
      valueLarge: 'value-large',
      valueSub: 'value-sub'
    }
  });
};

const updateInputs = (values, handle) => {
  const inputs = [minInput, maxInput];
  inputs[handle].value = Number(values[handle]);

  const [value1] = values.map(parseFloat);
  if (value1 === PRICE_CONFIG.MIN && inputs.length) {
    inputs[0].classList.add('form__slider-min-value');
  } else {
    inputs[0].classList.remove('form__slider-min-value');
  }
};

const updateSliderFromInput = (index, value) => {
  const values = [null, null];
  values[index] = value;
  slider.noUiSlider.set(values);
};

const initListeners = () => {
  slider.noUiSlider.on('update', updateInputs);
  minInput.addEventListener('change', (event) => updateSliderFromInput(0, event.target.value));
  maxInput.addEventListener('change', (event) => updateSliderFromInput(1, event.target.value));
  form.addEventListener('reset', () => {
    setTimeout(() => {
      slider.noUiSlider.set(PRICE_CONFIG.START);
    }, 0);
  });
};

const initSlider = () => {
  createSlider();
  initListeners();
};

export { initSlider };
