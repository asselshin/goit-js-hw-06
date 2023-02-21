const range = document.getElementById('font-size-control');

const text = document.getElementById('text');
// console.dir(text);

range.addEventListener('change', (ev) => {
    const font = Number(ev.target.value);
    text.style.fontSize = `${font}px`;
});
