const inputField = document.getElementById('validation-input');
const lengthNeeded = Number(inputField.getAttribute("data-length"));

inputField.addEventListener('blur', () => {
    validation(inputField);
});

function validation(input) {
     if (input.value.trim().length === lengthNeeded) {
        input.classList.remove('invalid');
        input.classList.add('valid');
     } else {
        input.classList.add('invalid')
        input.classList.remove('valid');
     }
}