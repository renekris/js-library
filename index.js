let myLibrary = [];

const bookFormElement = document.getElementById('book-form');
bookFormElement.addEventListener('submit', formSubmit);

const updateFormElement = document.getElementById('update-form');
updateFormElement.addEventListener('submit', updateSubmit)

// close modal if target != modal content
document.addEventListener('pointerup', function (e) {
    const modal = document.getElementById('modal');
    if (e.target == modal) modal.style.display = "none";
})

function updateSubmit(e) {
    const currentIndex = myLibrary.findIndex(obj => obj.id === e.target[0].value);

    myLibrary[currentIndex].id = e.target[0].value;
    myLibrary[currentIndex].name = e.target[1].value;
    myLibrary[currentIndex].author = e.target[2].value;
    myLibrary[currentIndex].pages = e.target[3].value;
    myLibrary[currentIndex].isFinished = e.target[4].checked;

    updateLibraryDisplay()
}

function Book(book) {
    Object.assign(this, book);
}

function setNewLibraryValues(e) {
    const book = {};

    book.id = crypto.randomUUID();
    book.name = e.target[0].value || '-';
    book.author = e.target[1].value || '-';
    book.pages = e.target[2].value || '-';
    book.isFinished = e.target[3].checked; //default = false

    return book;
}

function formSubmit(e) {
    const book = setNewLibraryValues(e);

    myLibrary.push(new Book(book));
    addCard();
}

function updateLibraryDisplay() {
    const cardLibrary = document.getElementById('library');
    cardLibrary.innerHTML = '';

    myLibrary.forEach(cardObj => {
        createCard(cardObj);
    });
}

function addCard() {
    const currentCard = myLibrary[myLibrary.length - 1];
    createCard(currentCard);
}

function createCard(currentCardObj) {
    const cardLibrary = document.getElementById('library');
    const card = document.createElement('div');

    card.dataset.uuid = currentCardObj.id;
    if (currentCardObj.isFinished) card.classList.add('finished');

    card.append(createCardElement(currentCardObj, 'name', 'Name:'));
    card.append(createCardElement(currentCardObj, 'author', 'Author:'));
    card.append(createCardElement(currentCardObj, 'pages', 'Pages:'));

    card.append(createCardSettings());
    card.append(createCardDelete());

    cardLibrary.append(card);
}

function createCardElement(currentCard, key, comment) {
    const cardElement = document.createElement('p');
    cardElement.textContent = `${comment} ${currentCard[key]}`;
    cardElement.classList.add(`card-${key}`);

    return cardElement;
}

function createCardSettings() {
    const settingsButton = document.createElement('button');
    settingsButton.classList.add('settings-button');
    settingsButton.addEventListener('pointerup', displaySettingsModal)

    return settingsButton;
}

function displaySettingsModal(e) {
    const currentLibraryIndex = myLibrary.filter(obj => obj.id === e.target.parentElement.attributes[0].value)[0];
    const modal = document.getElementById('modal');
    const updateForm = document.getElementById('update-form');

    modal.style.display = 'flex';

    console.log(`%cCurrent UUID: ${e.target.parentElement.attributes[0].value}`, 'color: lightgreen');

    updateForm[0].value = currentLibraryIndex.id;
    updateForm[1].value = currentLibraryIndex.name;
    updateForm[2].value = currentLibraryIndex.author;
    updateForm[3].value = currentLibraryIndex.pages;
    updateForm[4].checked = currentLibraryIndex.isFinished;
}

function createCardDelete() {
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('pointerup', cardDelete);

    return deleteButton;
}

function cardDelete(e) {
    const currentIndex = myLibrary.findIndex(obj => obj.id === e.target.parentElement.dataset.uuid);

    if (currentIndex <= -1) return
    myLibrary.splice(currentIndex, 1);
    e.target.parentElement.remove();

    console.log(myLibrary);
}
