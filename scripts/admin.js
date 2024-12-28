const loggedInCredentials = JSON.parse(localStorage.getItem("loginData"));
if(!loggedInCredentials || loggedInCredentials.email !== "admin@empher.com" ) {
    alert("Admin Not Logged In");
    window.location.href = "index.html"
}
const url = "https://bubbly-adorable-hose.glitch.me/books";

const addBookForm = document.getElementById("addBookForm");
addBookForm.addEventListener("submit", () => {
    event.preventDefault();
    const book = {
        "title": addBookForm.bookTitle.value,
        "author": addBookForm.bookAuthor.value,
        "category": addBookForm.category.value,
        "isAvailable": true,
        "isVerified": false,
        "borrowedDays": null,
        "imageUrl": "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
    }


    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
    }).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return (response.json())
    }).then(data => {
        alert("Book added Successfully")
        console.log("Success", data);
    }).catch(error => {
        console.log("Error", error);
    })

})

fetch(url).then(response => {
    if(!response.ok) {
        throw new Error()
    } return response.json()
}) .then(data => {
    console.group(data)
    const productsContainer = document.getElementById("productsContainer");
    data.forEach(book => {
        const productCard = document.createElement('div');
        productCard.className = "product-card";
        productCard.innerHTML = `<img src="${book.imageUrl}" alt="">
        <h3>${book.title}</h3>
        <p> - ${book.author}</p>
        <p> Category : ${book.category}</p>
        <p> Availability Status : ${book.isAvailable ? "Available" : "Not Available"}</p>
        <p> Borrowed Days : ${book.borrowedDays || 0}</p>
        <span></span>
        <button class="verify-btn" onclick="verifyBook()">Verify</button>
        <button class="delete-btn" onclick="deleteBook()">Delete</button>
        `
        productsContainer.appendChild(productCard);
        console.log(book)
    });
}). catch(error =>{
    console.log("error fetching books data ", error);
}) 


function deleteBook(book) {
    console.log(book)
    const confirms = confirm("Are you sure to delete?");
}

function verifyBook(book) {
    console.log(book)
    const confirms = confirm("Are you sure to verify Book?");
}