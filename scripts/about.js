const image = Object.freeze({
    First: "./assets/aboutPics/seniorPic.jpg",
    Second: "./assets/aboutPics/graduationSpeech.png",
    Third: "./assets/aboutPics/ONUrun.jpg",
    Fourth: "./assets/aboutPics/trackHeadshot.jpg"
});

const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");

const img = document.querySelector(".about-pic");

let activePicture = image.First;

function imageSlider(direction){
    if(direction == "right"){
        toggleRight();
    } else {
        toggleLeft();
    }
}

function toggleRight(){
    if(activePicture == image.First){
        activePicture = image.Second;
        checkDots();
    } else if(activePicture == image.Second){
        activePicture = image.Third;
    } else if(activePicture == image.Third){
        activePicture = image.Fourth;
    }

    img.setAttribute("src", activePicture);    
    checkDots();
    checkArrows();
}

function toggleLeft(){
    if(activePicture == image.Second){
        activePicture = image.First;
    } else if(activePicture == image.Third){
        activePicture = image.Second;
    } else if(activePicture == image.Fourth){
        activePicture = image.Third;
    }

    img.setAttribute("src", activePicture);
    checkDots();
    checkArrows();
}

function checkArrows(){
    if(activePicture == image.First){
        deactivateLeftArrow();
        activateRightArrow();
    } else if(activePicture == image.Second){
        activateLeftArrow();
        activateRightArrow();
    } else if(activePicture == image.Third){
        activateLeftArrow();
        activateRightArrow();
    } else{
        activateLeftArrow();
        deactivateRightArrow();
    }
}

function loadPictureOne(){
    activePicture = image.First;
    img.setAttribute("src", activePicture);
    checkDots();
    checkArrows();
}

function loadPictureTwo(){
    activePicture = image.Second;
    img.setAttribute("src", activePicture);
    checkDots();
    checkArrows();
}

function loadPictureThree(){
    activePicture = image.Third;
    img.setAttribute("src", activePicture);
    checkDots();
    checkArrows();
}

function loadPictureFour(){
    activePicture = image.Fourth;
    img.setAttribute("src", activePicture);
    checkDots();
    checkArrows();
}

function checkDots(){
    if(activePicture == image.First){
        pictureDotsOne();
    } else if(activePicture == image.Second){
        pictureDotsTwo();
    } else if(activePicture == image.Third){
        pictureDotsThree();
    } else{
        pictreDotsFour();
    }
}

function pictureDotsOne(){
    dot1.classList.add("active");
    dot2.classList.remove("active");
    dot3.classList.remove("active");
    dot4.classList.remove("active");
}

function pictureDotsTwo(){
    dot1.classList.remove("active");
    dot2.classList.add("active");
    dot3.classList.remove("active");
    dot4.classList.remove("active");
}

function pictureDotsThree(){
    dot1.classList.remove("active");
    dot2.classList.remove("active");
    dot3.classList.add("active");
    dot4.classList.remove("active");
}

function pictreDotsFour(){
    dot1.classList.remove("active");
    dot2.classList.remove("active");
    dot3.classList.remove("active");
    dot4.classList.add("active");
}