const loggedInCredentials = localStorage.getItem("loginData");
if(!loggedInCredentials || loggedInCredentials.email !== "admin@empher.com" ) {
    alert("Admin Not Logged In");
    window.location.href = "index.html"
}

const addBookForm = document.getElementById("addBookForm");
addBookForm.addEventListener("submit", () => {
    const book = {
        "title": addBookForm.bookTitle.value,
        "author": addBookForm.bookAuthor.value,
        "category": addBookForm.category.value,
        "isAvailable": true,
        "isVerified": false,
        "borrowedDays": null,
        "imageUrl": "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg"
    }

    const url = "https://bubbly-adorable-hose.glitch.me/books";

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
        console.log(response.json())
    }).then(data => {
        console.log("Success", data);
    }).catch(error => {
        console.log("Error", error);
    })

})