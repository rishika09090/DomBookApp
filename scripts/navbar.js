const navbar = () => {
    const nav_html_code = `<nav id="navbar">
        <a href="index.html">Home</a>
        <a href="admin.html">Admin</a>
        <a href="books.html">Books</a>
    </nav>`;
    document.getElementById("navDiv").innerHTML = nav_html_code;
}

navbar();