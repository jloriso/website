function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleDots(){
    const dot1 = document.querySelector(".dot1");
    const dot2 = document.querySelector(".dot2");
    dot1.classList.toggle("active");
    dot2.classList.toggle("active");
}

function togglePicture(){
    let img = document.querySelector(".about-pic");

    let currImg = img.getAttribute("src");

    if (currImg == "./assets/profile-pic-2.png"){
        img.setAttribute("src", "./assets/about-pic.png");
    }
    else{
        img.setAttribute("src", "./assets/profile-pic-2.png");
    }

    toggleDots();
}

function currentSlide(slide){
    let img = document.querySelector(".about-pic");

    if (slide == 1){
        img.setAttribute("src", "./assets/about-pic.png");
        
        toggleDots();
    }
    else if (slide == 2){
        img.setAttribute("src", "./assets/profile-pic-2.png");
        
        toggleDots();
    }
    else{
        img.setAttribute("src", "./assets/about-pic.png");
        
        toggleDots();
    }
}