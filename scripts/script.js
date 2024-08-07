function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function loadHeaderAndFooter(){
    //Footer
    fetch("./injections/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });

    //Header
    fetch("./injections/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });
}

window.onload = loadHeaderAndFooter;

function deactivateRightArrow(){
    document.querySelector(".right-arrow").classList.add("deactivated");
}

function deactivateLeftArrow(){
    document.querySelector(".left-arrow").classList.add("deactivated");
}

function activateRightArrow(){
    document.querySelector(".right-arrow").classList.remove("deactivated");
}

function activateLeftArrow(){
    document.querySelector(".left-arrow").classList.remove("deactivated");
}