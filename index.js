
const myform = document.getElementById("addForm");
const Library = [];
const bookUl = document.getElementById("bookListUl");

function Book(title ,author , pages , read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myform.addEventListener("submit" , function(e){
        e.preventDefault();

        const rows = document.querySelectorAll("#addTable tbody tr");
        rows.forEach((row)=> {
        // get data of books from the form
                const title = row.querySelector('input[name="title"]').value;
                const author = row.querySelector('input[name="author"]').value;
                const pages = row.querySelector('input[name="pages"]').value;
                const read = row.querySelector('input[name="read"]').checked;
        // create new book object
                const newBook = new Book(title , author , pages , read);
                // add book to library
                Library.push(newBook);
                console.log(Library); 
        })
        // display books in the library
        displayBooks(); 
    })
}

function displayBooks() {
    bookUl.innerHTML = "";
    Library.forEach((book , index) => {
        const li = document.createElement("li");
        li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? "read" : "not read yet"}`;
        bookUl.appendChild(li);
    });

}

document.getElementById("addRow").addEventListener("click" , function(e) {
    const tbody = document.querySelector("#addTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td><input type="text" name="title" placeholder="Title"></td>
        <td><input type="text" name="author" placeholder="Author"></td>
        <td><input type="number" name="pages" placeholder="Pages"></td>
        <td><input type="checkbox" name="read"> Read</td>
    `;
    tbody.appendChild(newRow);  
})

addBookToLibrary(Library);
console.log(Library);
