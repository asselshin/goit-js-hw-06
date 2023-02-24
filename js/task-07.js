const range = document.getElementById('font-size-control');

const text = document.getElementById('text');

range.addEventListener('input', (ev) => {
    const font = Number(ev.target.value);
    text.style.fontSize = `${font}px`;
});
