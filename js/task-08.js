const form = document.querySelector('.login-form');

let user = {};

form.addEventListener('submit', ev => {
    ev.preventDefault();
    
    const {
        elements: { email, password },
    } = ev.currentTarget;

    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('Fill in all fields');
        return;
    };

    user.email = email.value.trim();
    user.password = password.value.trim();
    console.log(user);

    ev.target.reset();
});


