const library = [];

// Adding modal elements to DOM
const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal-btn");

const modalTitle = modal.querySelector("#title");
const modalAuthor = modal.querySelector("#author");
const modalPages = modal.querySelector("#pages");
const addBook = modal.querySelector("#add-book-btn");

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  const book = new Book(title, author, pages);
  library.push(book);
  displayBooks();
}

function displayBooks() {
  const LibraryContainer = document.querySelector("#library-container");
  LibraryContainer.innerHTML = "";
  library.forEach((book, index) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book"); // add class to style more easily

    bookElement.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <button class="delete-book">Delete Book</button>`;

    // add deleteBook functionality
    removeBook(bookElement, index);

    // append the created div to page
    LibraryContainer.appendChild(bookElement);
  });
}

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.showModal();
  modalTitle.value = "";
  modalAuthor.value = "";
  modalPages.value = "";
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.close();
});

// Save values from the form and store them in the addBookToLibrary function
addBook.addEventListener("click", e => {
  e.preventDefault();
  addBookToLibrary(modalTitle.value, modalAuthor.value, modalPages.value);
  modal.close();
});

// remove book from the library
function removeBook(bookElement, index) {
  const removeBookBtn = bookElement.querySelector(".delete-book");
  removeBookBtn.addEventListener("click", () => {
    bookElement.remove();
    if (index > 1) library.splice(index, -1);
  });
}

// Test Data
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("Lord Of the Rings", "J.R.R Tolkien", 399);
