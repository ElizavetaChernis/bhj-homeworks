const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const btn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

let user = localStorage.userId;
signin.classList.add('signin_active');

function signIn(e) {
    e.preventDefault();
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', ' https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);

    xhr.addEventListener('readystatechange', function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.success == false) {
                alert('Неверный логин или пароль');
            } else {
                localStorage.userId = response.user_id;
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = response.user_id;
            }
        }
    })
}

btn.addEventListener('click', signIn);