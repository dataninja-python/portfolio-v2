// goal:
// * open a navigation menu when hamburger is clicked
// action items:
// * select the hamburger object container by class "icon"
var iconBtn = document.querySelector("#icon");
var iconBar = document.querySelector("#iconBar");
// * set the default menu display to false to equal default "display:none"
var showNav = false;
var toggleNav = function () {
    // do stuff
    console.log("hi");
};
var init = function () {
    // do stuff
    console.log("page loaded");
};
iconBtn.addEventListener("click", toggleNav);
window.addEventListener("load", init, false);
