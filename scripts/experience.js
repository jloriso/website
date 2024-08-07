let activeExperience = 1;

const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");

function experienceSlider(direction){
    if(direction == 'home'){
        loadExperienceOne();
    } else if(direction == 'right'){
        loadExperienceRight();
    } else if(direction == 'left'){
        loadExperienceLeft();
    }
}

function loadExperienceRight(){
    if(activeExperience == 1){
        loadExperienceTwo();
        activeExperience = 2;
        checkArrows();
    }
}

function loadExperienceLeft(){
    if(activeExperience == 2){
        loadExperienceOne();
        activeExperience = 1;
        checkArrows();
    }
}

function loadExperienceOne(){
    fetch("../experienceInjections/experienceOneInjection.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("experience-info-injection-placeholder").innerHTML = data;
        });

    experienceOneDots();
}

function experienceOneDots(){
    dot1.classList.add("active");
    dot2.classList.remove("active");
}

function loadExperienceTwo(){
    fetch("../experienceInjections/experienceTwoInjection.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("experience-info-injection-placeholder").innerHTML = data;
        });

    experienceTwoDots();
}

function experienceTwoDots(){
    dot1.classList.remove("active");
    dot2.classList.add("active");
}

function checkArrows(){
    if(activeExperience == 1){
        deactivateLeftArrow();
        activateRightArrow();
    } else if(activeExperience == 2){
        deactivateRightArrow();
        activateLeftArrow();
    }
}