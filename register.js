const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    register();
});

function register() {
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;

    if (!regEmail || !regPassword) {
        alert('Please fill in both fields.');
        return;
    }

    let userExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === regEmail) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        alert('User already exists. Please use a different email.');
        return;
    }

    const newUser = {
        email: regEmail,
        password: regPassword
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');
    document.getElementById('registerForm').reset();

    window.location.href = 'login.html';
}
