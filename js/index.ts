// goal:
// * open a navigation menu when hamburger is clicked

// action items:
// * select the hamburger object container by class "icon"



  // * set the default menu display to false to equal default "display:none"

let showNav = false;

const toggleNav = () => {
  // do stuff
  console.log("hi");
  const pgLinks = document.getElementById("page-links");
  if (pgLinks.style.display === "block") {
    console.log('on');
    pgLinks.style.display = "none";
  } else {
    console.log('off');
    pgLinks.style.display = "block";
  }

}

const init = () => {
  // do stuff
  console.log("page loaded");

  const iconBtn = document.querySelector("#icon");
  const iconBar = document.querySelector("#iconBar");
  iconBtn.addEventListener("click", toggleNav);
  
}

window.addEventListener("load", init, false);