fetch("./components/navbar.html")
.then(response => response.text())
.then(data =>{
    document.getElementById("navbar").innerHTML = data;


   // Active Menu
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const links = document.querySelectorAll("#navbar a");

    links.forEach(link => {
      const href = link.getAttribute("href");

      if (href === currentPage) {
        link.classList.add(
          "text-green-600",
          "font-bold",
          "border-b-2",
          "border-green-600"
        );
      }
    });
  });