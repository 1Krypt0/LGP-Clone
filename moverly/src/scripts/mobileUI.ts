import { buttonBlue } from "./colors";
import { routesList } from "../main";

//Buttons menu
let mobileButtonsOpen = false;
const mobileButtonsDiv = document.getElementById("buttons-div-mobile")!;
const menuToggleButtonMobile = document.getElementById("ui-toggle-button-mobile")!;
const toggleMenuMobile = () =>{
    mobileButtonsOpen = !mobileButtonsOpen;
    if (mobileButtonsOpen){ // Open menu
        mobileButtonsDiv.style.height = (50 + 7 * routesList.length * (isRoutesOpen?1:0)) + "vw";
    }else{ //Close menu
        mobileButtonsDiv.style.height = "0vw";
    }
  }
menuToggleButtonMobile?.addEventListener("click",toggleMenuMobile);


//Information pages
const infoButton = document.getElementById("info-button-mobile")!;
const infoOverlay = document.getElementById("info-overlay-mobile")!;
const infoBackButtonMobile = document.getElementById("info-back-button-mobile")!;
const infoCloseButtonMobile = document.getElementById("info-close-button-mobile")!;
const infoStartPage = document.getElementById("info-start-page-mobile")!;
const infoHistoryPage = document.getElementById("info-history-page-mobile")!;
const infoLifestylePage = document.getElementById("info-lifestyle-page-mobile")!;
const infoFaunaPage = document.getElementById("info-fauna-page-mobile")!;
const infoFloraPage = document.getElementById("info-flora-page-mobile")!;
let infoState = "closed";
function closeAllInfoPages(){
    infoStartPage.style.display = "none";
    infoHistoryPage.style.display = "none";
    infoLifestylePage.style.display = "none";
    infoFaunaPage.style.display = "none";
    infoFloraPage.style.display = "none";
}
function setInfoState(state:string){
    if (state == "closed"){
        infoOverlay.style.display = "none";
        infoButton.style.color = buttonBlue;
        infoButton.style.background = "transparent";
        closeAllInfoPages();
    }else if(state == "open"){
        infoOverlay.style.display = "block";
        infoButton.style.color = "white";
        infoButton.style.background = buttonBlue;
        infoBackButtonMobile.style.display = "none";
        closeAllInfoPages();
        infoStartPage.style.display = "block";
    }else if(state == "history"){
        infoOverlay.style.display = "block";
        infoButton.style.color = "white";
        infoButton.style.background = buttonBlue;
        infoBackButtonMobile.style.display = "block";
        closeAllInfoPages();
        infoHistoryPage.style.display = "block";
    }else if(state == "lifestyle"){
        infoOverlay.style.display = "block";
        infoButton.style.color = "white";
        infoButton.style.background = buttonBlue;
        infoBackButtonMobile.style.display = "block";
        closeAllInfoPages();
        infoLifestylePage.style.display = "block";
    }else if(state == "fauna"){
        infoOverlay.style.display = "block";
        infoButton.style.color = "white";
        infoButton.style.background = buttonBlue;
        infoBackButtonMobile.style.display = "block";
        closeAllInfoPages();
        infoFaunaPage.style.display = "block";
    }else if(state == "flora"){
        infoOverlay.style.display = "block";
        infoButton.style.color = "white";
        infoButton.style.background = buttonBlue;
        infoBackButtonMobile.style.display = "block";
        closeAllInfoPages();
        infoFloraPage.style.display = "block";
    }
    infoState = state;
}
infoButton.addEventListener("click",()=>{
    if (infoState == "closed"){
        setInfoState("open");
    }else{
        setInfoState("closed");
    }
    toggleMenuMobile();
})
infoCloseButtonMobile.addEventListener("click",()=>{
    setInfoState("closed");
})
infoBackButtonMobile.addEventListener("click",()=>{
    setInfoState("open");
})
const infoHistoryButton = document.getElementById("info-navbar-history-button-mobile")!;
const infoLifestyleButton = document.getElementById("info-navbar-lifestyle-button-mobile")!;
const infoFaunaButton = document.getElementById("info-navbar-fauna-button-mobile")!;
const infoFloraButton = document.getElementById("info-navbar-flora-button-mobile")!;
infoHistoryButton.addEventListener("click",()=>{setInfoState("history")});
infoLifestyleButton.addEventListener("click",()=>{setInfoState("lifestyle")});
infoFaunaButton.addEventListener("click",()=>{setInfoState("fauna")});
infoFloraButton.addEventListener("click",()=>{setInfoState("flora")});


//Project page
const projectOverlayMobile = document.getElementById("project-overlay-mobile")!;
const projectCloseButtonMobile = document.getElementById("project-close-button-mobile")!;
const projectButtonMobile = document.getElementById("project-button-mobile")!;

let isProjectOpen = false;
projectButtonMobile.addEventListener("click",()=>{setProjectOpen(!isProjectOpen);toggleMenuMobile()});
projectCloseButtonMobile.addEventListener("click",()=>{setProjectOpen(false)});


function setProjectOpen(setOpen: boolean){
    isProjectOpen = setOpen;
    if(setOpen){
        projectOverlayMobile.style.display = "block";
        projectButtonMobile.style.color = "white";
        projectButtonMobile.style.background = buttonBlue;
    }else{
        projectOverlayMobile.style.display = "none";
        projectButtonMobile.style.color = buttonBlue;
        projectButtonMobile.style.background = "transparent";
    }
}


//Routes
const routesButtonMobile = document.getElementById("routes-button-mobile")!;
const routesDivMobile = document.getElementById("routes-div-mobile")!;
let isRoutesOpen = false;
function setRoutesOpen(setOpen:boolean){
    isRoutesOpen = setOpen;
    if (setOpen){
        routesDivMobile.style.height = (7*routesList.length) + "vw";
        routesButtonMobile.style.color = "white";
        routesButtonMobile.style.background = buttonBlue;
    }else{
        routesDivMobile.style.height = "0vw";
        routesButtonMobile.style.color = buttonBlue;
        routesButtonMobile.style.background = "transparent";

    }
    mobileButtonsDiv.style.height = (50 + 7 * routesList.length * (isRoutesOpen?1:0)) + "vw";
}


routesButtonMobile.addEventListener("click",()=>{
    setRoutesOpen(!isRoutesOpen);
})

