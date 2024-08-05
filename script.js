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
    if (currImg == "./assets/seniorPic.jpg"){
        img.setAttribute("src", "./assets/graduationSpeech.png");
    } else if(currImg == "./assets/graduationSpeech.png"){
        img.setAttribute("src", "./assets/ONUrun.jpg");
    } else if(currImg == "./assets/ONUrun.jpg"){
        img.setAttribute("src", "./assets/trackHeadshot.jpg");
    } else if(currImg == "./assets/trackHeadshot.jpg"){
        img.setAttribute("src", "./assets/seniorPic.jpg");
    }
}

function toggleLeft(img, currImg){
    if(currImg == "./assets/seniorPic.jpg"){
        img.setAttribute("src", "./assets/trackHeadshot.jpg");
    } else if(currImg == "./assets/trackHeadshot.jpg"){
        img.setAttribute("src", "./assets/ONUrun.jpg");
    } else if(currImg == "./assets/ONUrun.jpg"){
        img.setAttribute("src", "./assets/graduationSpeech.png");
    } else if(currImg == "./assets/graduationSpeech.png"){
        img.setAttribute("src", "./assets/seniorPic.jpg");
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
