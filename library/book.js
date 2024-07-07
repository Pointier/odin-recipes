const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let readStatus = this.read ? "read" : "not read yet";
    return `${title} by ${author}, ${pages} pages, ${readStatus}`;
  };
}

const testBook = new Book("nice", "me", 300, true);

const bestBook = new Book("witcher", "andrew", 350, true);

function addBookToLibrary(book, library) {
  library.push(book);
}

addBookToLibrary(testBook, myLibrary);
addBookToLibrary(bestBook, myLibrary);

function createListItems(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}

function displayBook(library) {
  const container = document.getElementsByClassName("library-container")[0];
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (const book of library) {
    const index = library.indexOf(book);
    const bookCard = document.createElement("div");
    const infoList = document.createElement("ul");

    bookCard.dataset.index = index;
    bookCard.className = "book";
    infoList.appendChild(createListItems(`Title: ${book.title}`));
    infoList.appendChild(createListItems(`Author: ${book.author}`));
    infoList.appendChild(createListItems(`Pages: ${book.pages}`));
    infoList.appendChild(createListItems(`Read: ${book.read ? "Yes" : "No"}`));

    const read = document.createElement("input");
    read.type = "checkbox";
    read.checked = book.read;
    read.addEventListener("change", (event) => {
      book.read = read.checked;
      displayBook(library);
    });

    const del = document.createElement("button");
    del.addEventListener("click", (event) => {
      library.splice(index, 1);
      displayBook(library);
    });
    del.className = "delete";
    del.textContent = "Delete";

    bookCard.appendChild(infoList);
    bookCard.appendChild(del);
    bookCard.appendChild(read);
    container.appendChild(bookCard);
  }
}

displayBook(myLibrary);

const buttonNewBook = document.getElementById("newBook");
const dialog = document.querySelector("dialog");
buttonNewBook.addEventListener("click", () => {
  dialog.showModal();
});

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);
  addBookToLibrary(book, myLibrary);
  displayBook(myLibrary);
  dialog.close();
  document.getElementById("bookForm").reset();
});
