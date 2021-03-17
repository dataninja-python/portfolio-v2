// goal:
// * open a navigation menu when hamburger is clicked
// action items:
// * select the hamburger object container by class "icon"
// * set the default menu display to false to equal default "display:none"
// let showNav = false;
var toggleSpeech = function () {
    // do stuff
    console.log("speech");
    var speechBubble = document.getElementById("speech-bubble");
    if (speechBubble.style.display === "block") {
        console.log('on');
        speechBubble.style.display = "none";
    }
    else {
        console.log('off');
        speechBubble.style.display = "block";
    }
};
var toggleNav = function () {
    // do stuff
    console.log("nav");
    var pgLinks = document.getElementById("page-links");
    if (pgLinks.style.display === "block") {
        console.log('on');
        pgLinks.style.display = "none";
    }
    else {
        console.log('off');
        pgLinks.style.display = "block";
    }
};
var init = function () {
    // do stuff
    console.log("page loaded");
    var iconBtn = document.querySelector("#icon");
    // const iconBar = document.querySelector("#iconBar");
    var avatarBtn = document.querySelector("#avatar");
    iconBtn.addEventListener("click", toggleNav);
    avatarBtn.addEventListener("mouseover", toggleSpeech);
    avatarBtn.addEventListener("mouseout", toggleSpeech);
};
window.addEventListener("load", init, false);
