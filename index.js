let myLibrary = [];
let id = 0;

const bookFormElement = document.getElementById('book-form');
bookFormElement.addEventListener('submit', formSubmit)


function Book(book) {
    Object.assign(this, book);
}

function formSubmit(e) {
    const book = {};

    book.id = getId();
    book.name = e.target[0]?.form[0]?.value || '-';
    book.author = e.target[1]?.form[1]?.value || '-';
    book.pages = e.target[2]?.form[2]?.value || '-';
    book.isFinished = e.target[3]?.form[3]?.checked;

    addBookToLibrary(book);
}

function getId() {
    return id++;
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
    const currentBook = myLibrary[myLibrary.length - 1];

    bookCard.dataset.number = currentBook['id'];

    console.log(currentBook['id']);

    bookCard.append(createCardElement('name'));
    bookCard.append(createCardElement('author'));
    bookCard.append(createCardElement('pages'));
    bookCard.append(createCardElement('isFinished'));


    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('pointerup', cardDelete);

    bookCard.append(deleteButton);

    libraryDisplay.append(bookCard);
}

function createCardElement(key) {
    const currentBook = myLibrary[myLibrary.length - 1];

    const cardElement = document.createElement('p');
    cardElement.textContent = currentBook[key];
    cardElement.classList.add(`card-${key}`);

    return cardElement;
}

function cardDelete(e) {

    const index = myLibrary.findIndex(obj => {
        return obj.id === parseInt(e.target.parentElement.dataset.number);
    });

    if (index <= -1) return
    myLibrary.splice(index, 1);
    e.target.parentElement.remove();

    console.log(myLibrary);
}
