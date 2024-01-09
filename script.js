function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function togglePicture(){
    let img = document.querySelector(".about-pic");

    let currImg = img.getAttribute("src");

    console.log(currImg);

    if (currImg == "./assets/profile-pic-2.png"){
        img.setAttribute("src", "./assets/about-pic.png");
    }
    else{
        img.setAttribute("src", "./assets/profile-pic-2.png");
    }
}