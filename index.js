let myLibrary = [];

const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', formSubmit)


function Book(book) {
    Object.assign(this, book);
}

function formSubmit(e) {
    const book = {};

    book.name = e.target[0]?.form[0]?.value || '-';
    book.startDate = e.target[1]?.form[1]?.value || '-';
    book.endDate = e.target[2]?.form[2]?.value || '-';
    book.hasRead = e.target[3]?.form[3]?.checked;

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
        bookCard.append(document.createElement('p').textContent = book.startDate);
        bookCard.append(document.createElement('p').textContent = book.endDate);
        bookCard.append(document.createElement('p').textContent = book.hasRead);


        libraryDisplay.append(bookCard);
    }
}

// updateBookDisplay();

function addCard() {
    const libraryDisplay = document.getElementById('library');
    const book = myLibrary[myLibrary.length - 1];
    const bookCard = document.createElement('div');

    const cardName = document.createElement('h2');
    cardName.textContent = book.name;
    cardName.classList.add('card-name');
    bookCard.append(cardName);

    const cardStartDate = document.createElement('p');
    cardStartDate.textContent = book.startDate;
    cardStartDate.classList.add('card-start-date');
    bookCard.append(cardStartDate);

    const cardEndDate = document.createElement('p');
    cardEndDate.textContent = book.endDate;
    cardEndDate.classList.add('card-end-date');
    bookCard.append(cardEndDate);

    const cardHasRead = document.createElement('p');
    cardHasRead.textContent = book.startDate;
    cardHasRead.classList.add('card-start-date');
    bookCard.append(cardHasRead);

    libraryDisplay.append(bookCard);
}
