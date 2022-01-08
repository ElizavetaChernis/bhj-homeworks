const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    
    const formDada = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', (event) => {
            progress.value = event.loaded / event.total;
    });
    xhr.send(formDada);
    event.preventDefault();
});