const tasksInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const tasksAdd = document.querySelector('.tasks__add');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.target.parentElement.remove();
    };
});

tasksAdd.addEventListener('click', (event) => {
    if (tasksInput.value.length) {
        addList(tasksInput);
    }; 
    event.preventDefault();
});

tasksInput.addEventListener('keyup', (event) => {
    if ((event.code === 'Enter') && (tasksInput.value.length)) {
        addList(event);
    };
});

function addList (event) {
    tasksList.insertAdjacentHTML('afterBegin', `
        <div class="task">
            <div class="task__title">
                ${event.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
    tasksInput.value = '';
};