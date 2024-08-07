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
        checkArrows();
    } else if(activeProject == 2){
        loadProjectThree();
        activeProject = 3;
        checkArrows();
    }
}

function loadProjectLeft(){
    if(activeProject == 2){
        loadProjectOne();
        activeProject = 1;
        checkArrows();
    } else if(activeProject == 3){
        loadProjectTwo();
        activeProject = 2;
        checkArrows();
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

function checkArrows(){
    if(activeProject == 1){
        deactivateLeftArrow();
        activateRightArrow();
    } else if(activeProject == 2){
        activateLeftArrow();
        activateRightArrow();
    } else if(activeProject == 3){
        activateLeftArrow();
        deactivateRightArrow();
    }
}
