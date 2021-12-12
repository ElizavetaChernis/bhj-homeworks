const book = document.querySelector('.book');
const fontSizeControl = document.querySelector('.book__control_font-size');

function changeSize(event) {
    event.preventDefault();

    let fontSizeActive = event.currentTarget.querySelector('.font-size_active');
    fontSizeActive.classList.remove('font-size_active');
    fontSizeActive = event.target;
    fontSizeActive.classList.add('font-size_active');

    const fontSize = fontSizeActive.dataset.size;
    if (fontSize) {
        book.className = `book book_fs-${fontSize}`;
    } else {
        book.className = 'book';
    }
}

fontSizeControl.addEventListener('click', changeSize);