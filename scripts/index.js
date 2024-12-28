const form = document.getElementById("loginForm");
form.addEventListener("submit", () => {
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    if (email === "admin@empher.com" && password === "empher@123") {
        alert("Logged in as Admin.");
        localStorage.setItem("loginData", JSON.stringify({
            email: email,
            password: password
        }))
        window.location.href = "admin.html"
    } else if (email === "user@empher.com" && password === "user@123") {
        alert("Logged in as User.");
        localStorage.setItem("loginData", JSON.stringify({
            email: email,
            password: password
        }))
        window.location.href = "books.html"
    } else {
        alert("incorrect Credentials");
    }
})