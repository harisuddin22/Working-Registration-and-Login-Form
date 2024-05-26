const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let storedUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            storedUser = users[i];
            break;
        }
    }

    if (storedUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(storedUser));
        alert('Login successful!');
    } else {
        alert('Invalid email or password.');
    }
}
