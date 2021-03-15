// goal:
// * open a navigation menu when hamburger is clicked
// action items:
// * select the hamburger object container by class "icon"
// * set the default menu display to false to equal default "display:none"
var showNav = false;
var toggleNav = function () {
    // do stuff
    console.log("hi");
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
    var iconBar = document.querySelector("#iconBar");
    iconBtn.addEventListener("click", toggleNav);
};
window.addEventListener("load", init, false);
