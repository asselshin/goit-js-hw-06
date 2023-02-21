const inputField = document.getElementById('validation-input');
// console.dir(inputField);
const lengthNeeded = Number(inputField.getAttribute("data-length"));
// console.log(lengthNeeded, typeof lengthNeeded);


inputField.addEventListener('blur', () => {
    // console.dir(inputField.value.length);
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