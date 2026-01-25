let books = [
    {name: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A classic American novel", pages: 180},
    {name: "To Kill a Mockingbird", author: "Harper Lee", description: "A novel about racial injustice", pages: 281},
    {name: "1984", author: "George Orwell", description: "A dystopian novel", pages: 328},
    {name: "Pride and Prejudice", author: "Jane Austen", description: "A romantic novel", pages: 279}
];

let editingIndex = null; // Track which book is being edited

function addBook() {
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pagesNumber = document.getElementById("pagesNumber").value;
    // console.log("Info" + ":" + 1213 + ":" + (isNaN(pagesNumber)? "valid":"invalid"));
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            author: authorName,
            description: bookDescription,
            pages: pagesNumber
        }
        
        if (editingIndex !== null) {
            // Update existing book in same position
            books[editingIndex] = book;
            editingIndex = null; // Reset editing mode
        } else {
            // Add new book
            books.push(book);
        }
        
        displayBooks();
        clearInputs();
    } else {
        alert("Please fill in all fields correctly.");
    }
}
//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, officia optio at aperiam maiores voluptates dicta eligendi quaerat, vero sit necessitatibus sint ipsum eveniet labore commodi corporis fugiat ad voluptatem reprehenderit! Cumque dignissimos eos ab harum. Deleniti consequatur vero expedita fuga, quaerat nam, culpa eos laudantium ut voluptatibus autem tempora!
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores alias minus amet? Repudiandae vero numquam commodi blanditiis minima! Vel, possimus?

function displayBooks() {
    let booksDiv = books.map((book, index) => 
        `<h1>Book Number: ${index + 1}</h1>
        <p>Book Name: ${book.name}</p>
        <p>Author Name: ${book.author}</p>
        <p>Description: ${book.description}</p>
        <p>Number of Pages: ${book.pages}</p>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>`
    );
    document.getElementById("books").innerHTML = booksDiv.join("<hr/>");
}

function editBook(index) {
    const book = books[index];
    document.getElementById("bookName").value = book.name;
    document.getElementById("authorName").value = book.author;
    document.getElementById("bookDescription").value = book.description;
    document.getElementById("pagesNumber").value = book.pages;
    
    // books.splice(index, 1, {
    //     name: document.getElementById("bookName").value,
    //     author: document.getElementById("authorName").value,
    //     description: document.getElementById("bookDescription").value,
    //     pages: document.getElementById("pagesNumber").value
    // }); No tiene sentido porque primero se edita y luego se guarda
    // document.getElementById('myBookForm').scrollIntoView();
    // books.splice(index, 1); // Remove the book to be edited
    editingIndex = index; // Set editing mode to track which book is being edited
    document.getElementById('myBookForm').scrollIntoView({ behavior: 'smooth' });
    displayBooks();
}

function clearInputs() {
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookDescription").value = "";
    document.getElementById("pagesNumber").value = "";
}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks();
}

// A este codigo hay que arreglarle que al editar un libro, no se debe agregar uno nuevo, sino que se debe actualizar el existente en la misma posicion del anterior. Lo arregle casi que inmediatamente con copilot AI
