import { Map } from "./map/map";

import { buttonBlue } from "./scripts/colors";
import { RouteUI } from "./scripts/uiClasses";

const main = () => {
  const container = document.querySelector("#scene") || new Element();
  const map = new Map(container);

  map.start();
};

main();

const webDiv = document.getElementById("web-version")!;
const mobileDiv = document.getElementById("mobile-version")!;
let isMobile = false;

if(window.innerHeight > window.innerWidth){
  webDiv.style.display = "none";
  isMobile = true;
}else{
  mobileDiv.style.display = "none";
}




const uiOverlay = document.getElementById("ui-overlay")!;
const menuToggleButton = document.getElementById("ui-toggle-button")!;
const buttonsDiv = document.getElementById("buttons-div")!;
const uiOverlayMobile = document.getElementById("ui-overlay-mobile")!;
const menuToggleButtonMobile = document.getElementById("ui-toggle-button-mobile")!;
const buttonsDivMobile = document.getElementById("buttons-div-mobile")!;
let menuState = false;
const toggleMenu = () =>{
  menuState = !menuState;
  if (menuState){ // Open menu
      buttonsDiv.style.display = "block";
      buttonsDiv.style.opacity = "1";
      uiOverlay.style.width="13vw";
      buttonsDivMobile.style.height = "30vw";
  }else{ //Close menu
      buttonsDiv.style.display = "none";
      buttonsDiv.style.opacity = "0";
      uiOverlay.style.width="5vw";
      buttonsDivMobile.style.height = "0vw";
      isInfoOpen = false;
  }
}

const infoOverlay = document.getElementById("info-overlay")!;
const infoButton = document.getElementById("info-button")!;
const infoCloseButton = document.getElementById("info-close-button")!;
const infoBackButton = document.getElementById("info-back-button")!;

const historyButton = document.getElementById("info-navbar-history-button")!;
const lifestyleButton = document.getElementById("info-navbar-lifestyle-button")!;
const faunaButton = document.getElementById("info-navbar-fauna-button")!;
const floraButton = document.getElementById("info-navbar-flora-button")!;
const startPage = document.getElementById("info-start-page")!;
const historyPage = document.getElementById("info-history-page")!;
const lifestylePage = document.getElementById("info-lifestyle-page")!;
const faunaPage = document.getElementById("info-fauna-page")!;
const floraPage = document.getElementById("info-flora-page")!;


let routesOpen = false;
const routesButton = document.getElementById("routes-button")!;
const routesDiv = document.getElementById("routes-div")!;
const wRouteButton = document.getElementById("w-route-button")!;
const nwRouteButton = document.getElementById("nw-route-button")!;
const eNeRouteButton = document.getElementById("e-ne-route-button")!;

const routesList: RouteUI[] = [];
routesList.push(new RouteUI(wRouteButton))
routesList.push(new RouteUI(nwRouteButton))
routesList.push(new RouteUI(eNeRouteButton))


const projectButton = document.getElementById("project-button")!;
const projectOverlay = document.getElementById("project-overlay")!;
const projectCloseButton = document.getElementById("project-close-button")!;

let isInfoOpen = false;

function setInfoPageOpen(setOpen :boolean){
  if(!setOpen){
    infoOverlay.style.display ="none";
    infoButton.style.backgroundColor="transparent";
    infoButton.style.color="#177F9B";

  }else{
    closeAllInfoPages();
    startPage.style.display = "block";
    infoOverlay.style.display ="block";
    infoButton.style.backgroundColor="#177F9B";
    infoButton.style.color="white";
  }
}

infoButton?.addEventListener("click",()=>{
  if (!isInfoOpen){
    setInfoPageOpen(true);
  }else{
    setInfoPageOpen(false);
  }
  isInfoOpen = !isInfoOpen;
});
infoCloseButton?.addEventListener("click",()=>{
  setInfoPageOpen(false);
  toggleMenu();
})

infoBackButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  startPage.style.display = "block";
})

historyButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  historyPage.style.display = "block";
  infoBackButton.style.display = "block";
})

lifestyleButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  lifestylePage.style.display = "block";
  infoBackButton.style.display = "block";
})

faunaButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  faunaPage.style.display = "block";
  infoBackButton.style.display = "block";
})

floraButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  floraPage.style.display = "block";
  infoBackButton.style.display = "block";
})


const closeAllInfoPages =()=>{
  startPage.style.display = "none";
  historyPage.style.display = "none";
  lifestylePage.style.display = "none";
  faunaPage.style.display = "none";
  floraPage.style.display = "none";
  infoBackButton.style.display = "none";
}




menuToggleButton?.addEventListener("click",toggleMenu);


function setRoutesDivOpen(setOpen:boolean){
  routesOpen = setOpen;
  if(setOpen){
      routesDiv.style.display ="block";
      routesButton.style.backgroundColor=buttonBlue;
      routesButton.style.color="white";
  }else{
      routesDiv.style.display ="none";
      routesButton.style.backgroundColor="transparent";
      routesButton.style.color=buttonBlue;
  }
}

routesButton?.addEventListener("click",()=>{
  setRoutesDivOpen(!routesOpen);
})


let isProjectOpen = false;
function setProjectPageOpen(setOpen:boolean){
  isProjectOpen = setOpen;
  if(setOpen){
      projectOverlay.style.display ="block";
      projectButton.style.backgroundColor=buttonBlue;
      projectButton.style.color="white";
  }else{
      projectOverlay.style.display ="none";
      projectButton.style.backgroundColor="transparent";
      projectButton.style.color=buttonBlue;
  }
}

projectButton?.addEventListener("click",()=>{
  setProjectPageOpen(!isProjectOpen);
})
projectCloseButton?.addEventListener("click",()=>{
  setProjectPageOpen(false);
})


let soundOn = true;
//Sound button
const soundButton = document.getElementById("sound-button")!;
soundButton.addEventListener("click",()=>{
  soundOn = !soundOn;
  if (soundOn){
    
  }else{

  }
})



export {routesList}