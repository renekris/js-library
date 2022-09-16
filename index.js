let myLibrary = [];

const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', formSubmit)


function Book(book) {
    Object.assign(this, book);
}

function formSubmit(e) {
    const book = {};

    book.name = e.target[0]?.form[0]?.value || '-';
    book.author = e.target[1]?.form[1]?.value || '-';
    book.pages = e.target[2]?.form[2]?.value || '-';
    book.isFinished = e.target[3]?.form[3]?.checked;

    addBookToLibrary(book);
}

function addBookToLibrary(book) {
    myLibrary.push(new Book(book));

    addCard();
    console.log(myLibrary.length)
    console.log(myLibrary[myLibrary.length - 1])
}


function updateBookDisplay() {
    for (let i = 0; i < myLibrary.length; i++) {
        const libraryDisplay = document.getElementById('library');
        const book = myLibrary[i];
        const bookCard = document.createElement('div');

        bookCard.append(document.createElement('p').textContent = book.name);
        bookCard.append(document.createElement('p').textContent = book.author);
        bookCard.append(document.createElement('p').textContent = book.pages);
        bookCard.append(document.createElement('p').textContent = book.isFinished);


        libraryDisplay.append(bookCard);
    }
}

// updateBookDisplay();

function addCard() {
    const libraryDisplay = document.getElementById('library');
    const bookCard = document.createElement('div');


    bookCard.append(createCardElement('name'));
    bookCard.append(createCardElement('author'));
    bookCard.append(createCardElement('pages'));
    bookCard.append(createCardElement('isFinished'));

    libraryDisplay.append(bookCard);
}

function createCardElement(key) {
    const book = myLibrary[myLibrary.length - 1];


    const cardElement = document.createElement('p');
    cardElement.textContent = book[key];
    cardElement.classList.add(`card-${key}`);

    return cardElement;
}
