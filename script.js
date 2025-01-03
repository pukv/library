const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  // create a new Book object
  const book = new Book(title, author, pages);
  // add it to library
  library.push(book);
  // call the displayBooks funciton
  displayBooks();
}

// create a function which loops through the library array and displays books

function displayBooks() {
  const LibraryContainer = document.querySelector("#library-container");
  LibraryContainer.innerHTML = "";
  library.forEach((book, index) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book"); // added class to the newly created div in order to style it mroe easily
    bookElement.innerHTML = `
    <h2>${book.title}</h2>
    Author: ${book.author}
    Pages: ${book.pages}`;

    LibraryContainer.appendChild(bookElement);
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("Lord Of the Rings", "J.R.R Tolkien", 399);
