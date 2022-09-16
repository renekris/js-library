let myLibrary = [];

function Book(name, startDate, endDate, hasRead = false) {
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    let current = new Book('Harry Potter and the Philosopher\'s Stone', Date.now(), 'In the future', true);
    myLibrary.push(current);
}

addBookToLibrary();

console.log(myLibrary[0]);
