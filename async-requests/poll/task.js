const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.responseType = 'json'
xhr.setRequestHeader('Content-Type','application/json');
xhr.send();

xhr.addEventListener('readystatechange', function(){
  if(this.readyState == 4){
    let text = xhr.response.data.title;
    pollTitle.textContent = text;

    let answers = xhr.response.data.answers;
    answers.forEach(item => {
      pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${item}</button>`);
    });
    
    let pollAnswer = document.querySelectorAll('.poll__answer');
    pollAnswer.forEach(item => {
      item.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!')
      });
    });
  }
});