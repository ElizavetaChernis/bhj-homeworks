const messages = document.querySelector( '.chat-widget__messages' );
const chat = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messagesContainer = document.querySelector('.chat-widget__messages-container');
const answers = ["Вы не купили ни одного товара, чтобы так с нами разговаривать!",
                 "Кто тут?",
                 "Где ваша совесть?",
                 "К сожалению, все операторы заняты. Не пишите нам больше",
                 "Мы ничего не будем вам продавать",
                 "Добрый день! До свидания!"];

function activeChat() {
    if (!chat.classList.contains('chat-widget_active')) {
    chat.classList.add('chat-widget_active');
    texting();
    };
};

function texting() {
    let remindInterval = setInterval(() => {
        botMessage('Напишите нам, мы онлайн!');
        autoScroll();
    }, 30000);

    chatInput.addEventListener('input', () => clearInterval(remindInterval));
};

function botMessage(message) {
    messages.insertAdjacentHTML('beforeEnd',`
    <div class="message">
        <div class="message__time">${messageTime()}</div>
            <div class="message__text">${message}</div>
        </div>
    `);
};

function sendMessage(message) {
    messages.insertAdjacentHTML('beforeEnd',`
    <div class="message message_client">
        <div class="message__time">${messageTime()}</div>
            <div class="message__text">${message}</div>
        </div>
    `);
};

function messageTime() {
    let messageDate = new Date();
    let hours = messageDate.getHours();
    let minutes = messageDate.getMinutes();
    if (hours < 10) {
        hours = '0' + hours;
    };
    if (minutes < 10) {
        minutes = '0' + minutes;
    };
    return (hours + ':' + minutes);
};

chatInput.addEventListener('keydown', function(event) {
    if (event.key !== 'Enter' || chatInput.value == '') {
        return;
    } else {
        sendMessage(chatInput.value);
        botMessage(answers[Math.floor(Math.random() * answers.length)]);
        texting();
        autoScroll();
        chatInput.value = '';
    }
});

function autoScroll() {
    messagesContainer.scrollTop = 99999999;
};

chat.addEventListener('click', activeChat);
