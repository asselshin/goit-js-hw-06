const inputField = document.getElementById('name-input');
// console.dir(inputField);
const output = document.getElementById('name-output');

inputField.addEventListener("input", () => {
    // console.dir(inputField.value);

    const inputName = inputField.value.trim();
    
    output.textContent = inputName !== '' ? inputName : 'Anonymous';
 });

