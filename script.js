function imageSlider(direction){
    let img = document.querySelector(".about-pic");

    let currImg = img.getAttribute("src");

    if(direction == "right"){
        toggleRight(img, currImg);
    } else {
        toggleLeft(img, currImg);
    }
}

function toggleRight(img, currImg){
    if (currImg == "./assets/aboutPics/seniorPic.jpg"){
        img.setAttribute("src", "./assets/aboutPics/graduationSpeech.png");
    } else if(currImg == "./assets/aboutPics/graduationSpeech.png"){
        img.setAttribute("src", "./assets/aboutPics/ONUrun.jpg");
    } else if(currImg == "./assets/aboutPics/ONUrun.jpg"){
        img.setAttribute("src", "./assets/aboutPics/trackHeadshot.jpg");
    } else if(currImg == "./assets/aboutPics/trackHeadshot.jpg"){
        img.setAttribute("src", "./assets/aboutPics/seniorPic.jpg");
    }
}

function toggleLeft(img, currImg){
    if(currImg == "./assets/aboutPics/seniorPic.jpg"){
        img.setAttribute("src", "./assets/aboutPics/trackHeadshot.jpg");
    } else if(currImg == "./assets/aboutPics/trackHeadshot.jpg"){
        img.setAttribute("src", "./assets/aboutPics/ONUrun.jpg");
    } else if(currImg == "./assets/aboutPics/ONUrun.jpg"){
        img.setAttribute("src", "./assets/aboutPics/graduationSpeech.png");
    } else if(currImg == "./assets/aboutPics/graduationSpeech.png"){
        img.setAttribute("src", "./assets/aboutPics/seniorPic.jpg");
    }
}

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
