const changeBtn = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('.color');


changeBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color; 
  colorValue.textContent = color;  
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


