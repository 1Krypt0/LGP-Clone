import { Map } from "./map/map";

const main = () => {
  const container = document.querySelector("#scene") || new Element();
  const map = new Map(container);

  map.start();
};

main();


const uiOverlay = document.getElementById("ui-overlay");
const menuToggleButton = document.getElementById("ui-toggle-button");
const buttonsDiv = document.getElementById("buttons-div");
let menuState = false;
const toggleMenu = () =>{
  menuState = !menuState;
  if( buttonsDiv != null && menuToggleButton!= null && uiOverlay!= null){
    if (menuState){ // Open menu
        buttonsDiv.style.display = "block";
        buttonsDiv.style.opacity = "1";
        uiOverlay.style.width="13vw";
    }else{ //Close menu
        buttonsDiv.style.display = "none";
        buttonsDiv.style.opacity = "0";
        uiOverlay.style.width="5vw";
    }
  }
}

const infoOverlay = document.getElementById("info-overlay")
const infoButton = document.getElementById("info-button");
const infoCloseButton = document.getElementById("info-close-button");
const infoBackButton = document.getElementById("info-back-button");

const historyButton = document.getElementById("info-navbar-history-button");
const lifestyleButton = document.getElementById("info-navbar-lifestyle-button");
const faunaButton = document.getElementById("info-navbar-fauna-button");
const floraButton = document.getElementById("info-navbar-flora-button");
const startPage = document.getElementById("info-start-page");
const historyPage = document.getElementById("info-history-page");
const lifestylePage = document.getElementById("info-lifestyle-page");
const faunaPage = document.getElementById("info-fauna-page");
const floraPage = document.getElementById("info-flora-page");

let isInfoOpen = false;

infoButton?.addEventListener("click",()=>{
  if(infoOverlay == null || startPage == null){
    return
  }
  if (!isInfoOpen){
    closeAllInfoPages();
    startPage.style.display = "block";
    infoOverlay.style.display ="block";
    infoButton.style.backgroundColor="white";
    infoButton.style.color="black";
  }else{
    infoOverlay.style.display ="none";
    infoButton.style.backgroundColor="#141414";
    infoButton.style.color="white";
  }
  isInfoOpen = !isInfoOpen;
});
infoCloseButton?.addEventListener("click",()=>{
  if(infoOverlay == null || infoButton == null){
    return;
  }
  infoOverlay.style.display ="none";
  infoButton.style.backgroundColor="#141414";
  infoButton.style.color="white";
  toggleMenu();
})

infoBackButton?.addEventListener("click",()=>{
  if(startPage == null){
    return
  }
  closeAllInfoPages();
  startPage.style.display = "block";
})

historyButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  if (historyPage == null || infoBackButton == null){
    return;
  }
  historyPage.style.display = "block";
  infoBackButton.style.display = "block";
})

lifestyleButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  if (lifestylePage == null || infoBackButton == null){
    return;
  }
  lifestylePage.style.display = "block";
  infoBackButton.style.display = "block";
})

faunaButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  if (faunaPage == null || infoBackButton == null){
    return;
  }
  faunaPage.style.display = "block";
  infoBackButton.style.display = "block";
})

floraButton?.addEventListener("click",()=>{
  closeAllInfoPages();
  if (floraPage == null || infoBackButton == null){
    return;
  }
  floraPage.style.display = "block";
  infoBackButton.style.display = "block";
})


const closeAllInfoPages =()=>{
  if(startPage == null || historyPage == null || lifestylePage == null || faunaPage == null || floraPage == null || infoBackButton == null){
    return
  }
  startPage.style.display = "none";
  historyPage.style.display = "none";
  lifestylePage.style.display = "none";
  faunaPage.style.display = "none";
  floraPage.style.display = "none";
  infoBackButton.style.display = "none";
}




menuToggleButton?.addEventListener("click",toggleMenu);