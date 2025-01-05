// Adding elements for the modal
const modal = document.querySelector("#modal");
const openModalBtn = document.querySelector(".open-modal");
const modalForm = document.querySelector(".modal-form");
const deleteBookBtn = document.querySelectorAll(".delete-book");
const closeModal = document.querySelector(".close-modal-btn");
const library = [];

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
  library.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book"); // add class to style more easily

    bookElement.innerHTML = `
    <h2>${book.title}</h2>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pages}</p>
    <button class="delete-book">Delete Book</button>`;

    // append the created div to page
    LibraryContainer.appendChild(bookElement);
  });
}

// Open the modal
openModalBtn.addEventListener("click", () => {
  modal.showModal();
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310);
addBookToLibrary("1984", "George Orwell", 328);
addBookToLibrary("Lord Of the Rings", "J.R.R Tolkien", 399);

closeModal.addEventListener("click", () => {
  modal.close();
});
