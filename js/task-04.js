const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.getElementById('value');

let counterValue = 0;

const decrementClick = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const incrementClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrementClick);
incrementBtn.addEventListener('click', incrementClick);