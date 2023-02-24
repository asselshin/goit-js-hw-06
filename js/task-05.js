const inputField = document.getElementById('name-input');
const output = document.getElementById('name-output');

inputField.addEventListener("input", () => {
    const inputName = inputField.value.trim();
    output.textContent = inputName !== '' ? inputName : 'Anonymous';
 });

