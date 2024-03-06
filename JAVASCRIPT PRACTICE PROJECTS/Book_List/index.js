const booklist = document.querySelector(".booklist");
const addBookBtn = document.querySelector(".add-book-btn");
const table = document.querySelector(".table");
// Book Class : Represent a Book
class BookData {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class: Handle UI Tasks
class UI {
  static displayBooks() {
    const bookData = Store.getBooks();
    // console.log(bookData);
    bookData.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const row = document.createElement("tr");
    row.innerHTML = `<td scope="col">${book.title}</td>
                  <td scope="col">${book.author}</td>
                  <td scope="col">${book.isbn}</td>
                  <td scope="col" ><a href="" class="delete-btn">❌</a></td>`;
    booklist.appendChild(row);
  }
  static clearFields() {
    document.querySelector(".title").value = "";
    document.querySelector(".author").value = "";
    document.querySelector(".isbn").value = "";
  }

  static alertMessage(message, classname) {
    const div = document.createElement("div");
    div.classList = `alert alert-${classname}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.getElementById("#form");
    console.log(div);
    container.insertBefore(div, form);

    // remove alert
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 1000);
  }
}

// Store Class: Handles Storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  static addBooks(book) {
    const books = Store.getBooks();
    console.log(books);
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBooks(isbn) {
    const books = Store.getBooks();
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));
  }
}
// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: Add a Book

addBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Get form values
  const title = document.querySelector(".title").value;
  const author = document.querySelector(".author").value;
  const isbn = document.querySelector(".isbn").value;
  // Create new book

  // Validate
  if (title === "" || author === "" || isbn === "") {
    // alert empty field message
    UI.alertMessage("Fill all the fields.", "danger");
  } else {
    // Instantiate book
    const book = new BookData(title, author, isbn);

    // add book to local storage
    Store.addBooks(book);

    // Add Book to UI
    UI.addBookToList(book);

    // alert success message
    UI.alertMessage("Book added successfully.", "sucess");

    // Clear Fields
    UI.clearFields();
  }
});

// Event: Remove a Book
table.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete-btn")) {
    console.log(e.target.parentElement.parentElement.remove());
    // alert success message
    UI.alertMessage("Book removed successfully.", "sucess");

    // remove book from storage
    Store.removeBooks(e.target.parentElement.previousElementSibling.innerText);

    //
  }
});
