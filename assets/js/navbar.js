fetch("./components/navbar.html")
.then(response => response.text())
.then(data => {

    document.getElementById("navbar").innerHTML = data;

    // Active Menu
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("#navbar a").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add(
                "text-green-600",
                "font-bold",
                "border-b-2",
                "border-green-600"
            );
        }
    });

    // Mobile Menu
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu-2");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });

});