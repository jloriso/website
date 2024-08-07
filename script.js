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

let activeProject = 1;

const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");

function projectSlider(direction){
    if(direction == 'home'){
        loadProjectOne();
    } else if (direction == 'right'){
        loadProjectRight();
    } else if(direction == 'left'){
        loadProjectLeft();
    }
}

function loadProjectRight(){
    if(activeProject == 1){
        loadProjectTwo();
        activeProject = 2;
    } else if(activeProject == 2){
        loadProjectThree();
        activeProject = 3;
    } else{
        loadProjectOne();
        activeProject = 1;
    }
}

function loadProjectLeft(){
    if(activeProject == 1){
        loadProjectThree();
        activeProject = 3;
    } else if(activeProject == 2){
        loadProjectOne();
        activeProject = 1;
    } else{
        loadProjectTwo();
        activeProject = 2;
    }
}

function loadProjectOne(){
    fetch("../projectInjections/projectOneInjection.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("project-info-injection-placeholder").innerHTML = data;
        });

        projectOneDots();
}

function projectOneDots(){
    dot1.classList.add("active");
    dot2.classList.remove("active");
    dot3.classList.remove("active");
}

function loadProjectTwo(){
    fetch("../projectInjections/projectTwoInjection.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("project-info-injection-placeholder").innerHTML = data;
        });

        projectTwoDots();
}

function projectTwoDots(){
    dot1.classList.remove("active");
    dot2.classList.add("active");
    dot3.classList.remove("active");
}

function loadProjectThree(){
    fetch("../projectInjections/projectThreeInjection.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("project-info-injection-placeholder").innerHTML = data;
        });

        projectThreeDots();
}

function projectThreeDots(){
    dot1.classList.remove("active");
    dot2.classList.remove("active");
    dot3.classList.add("active");
}