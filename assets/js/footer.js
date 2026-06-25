fetch("./components/footer.html")
.then(Response => Response.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
})