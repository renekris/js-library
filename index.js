let myLibrary = [];

const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', formSubmit)


function Book(book) {
    Object.assign(this, book);
}

function formSubmit(e) {
    const book = {};

    book.name = e.target[0]?.form[0]?.value;
    book.startDate = e.target[1]?.form[1]?.value;
    book.endDate = e.target[2]?.form[2]?.value;
    book.hasRead = e.target[3]?.form[3]?.checked;

    addBookToLibrary(book);
}

function addBookToLibrary(book) {
    myLibrary.push(new Book(book));

    console.log(myLibrary[myLibrary.length - 1])
}

