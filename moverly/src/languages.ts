async function setLanguage(lang:string) {
    const data = await fetch(`src/lang/${lang}.json`);
    const json_data = await data.json();
    setTexts(json_data);
}

const setTexts = (data:any):void =>{
    /*
    PLACE ANY TEXTS TO CHANGE INSIDE THIS FUNCTION
    Example:
    */
    document.getElementById("info-title")!.innerHTML=data["info-title"];
    document.getElementById("info-text")!.innerHTML=data["info-text"];
    document.getElementById("info-history-title")!.innerHTML=data["info-history-title"];
    document.getElementById("info-history-text")!.innerHTML=data["info-history-text"];
    document.getElementById("info-lifestyle-title")!.innerHTML=data["info-lifestyle-title"];
    document.getElementById("info-lifestyle-text")!.innerHTML=data["info-lifestyle-text"];
    document.getElementById("info-fauna-title")!.innerHTML=data["info-fauna-title"];
    document.getElementById("info-fauna-text")!.innerHTML=data["info-fauna-text"];
    document.getElementById("info-flora-title")!.innerHTML=data["info-flora-title"];
    document.getElementById("info-flora-text")!.innerHTML=data["info-flora-text"];
    document.getElementById("info-navbar-history")!.innerHTML=data["info-navbar-history"];
    document.getElementById("info-navbar-lifestyle")!.innerHTML=data["info-navbar-lifestyle"];
    document.getElementById("info-navbar-fauna")!.innerHTML=data["info-navbar-fauna"];
    document.getElementById("info-navbar-flora")!.innerHTML=data["info-navbar-flora"];
    document.getElementById("project-title")!.innerHTML=data["project-title"];
    document.getElementById("project-text")!.innerHTML=data["project-text"];
    document.getElementById("info-button")!.innerHTML=data["info-button"];
    document.getElementById("routes-button")!.innerHTML=data["routes-button"];
    document.getElementById("w-route-button")!.innerHTML=data["w-route-button"];
    document.getElementById("nw-route-button")!.innerHTML=data["nw-route-button"];
    document.getElementById("e-ne-route-button")!.innerHTML=data["e-ne-route-button"];
    document.getElementById("project-button")!.innerHTML=data["project-button"];
    document.getElementById("accessibility-button")!.innerHTML=data["accessibility-button"];
    
}

let currentLanguage = "pt";


/*

Example of a selector to change language. Later will be changed to accomodate the site's UI
 */
const languagesButton = document.getElementById("languages-button")! as HTMLSelectElement //get the language selector
const languagesButtonMobile = document.getElementById("languages-button-mobile")!

languagesButton.addEventListener("click", ()=>{
    if (currentLanguage == "pt"){
        currentLanguage = "en";
        languagesButton.innerHTML = "PT&nbsp;|&nbsp;<b>EN</b>";
    }else{
        currentLanguage = "pt";
        languagesButton.innerHTML = "<b>PT</b>&nbsp;|&nbsp;EN";
    }
    setLanguage(currentLanguage);
})

languagesButtonMobile.addEventListener("click", ()=>{
    if (currentLanguage == "pt"){
        currentLanguage = "en";
        languagesButtonMobile.innerHTML = "PT&nbsp;|&nbsp;<b>EN</b>";
    }else{
        currentLanguage = "pt";
        languagesButtonMobile.innerHTML = "<b>PT</b>&nbsp;|&nbsp;EN";
    }
    setLanguage(currentLanguage);
})



setLanguage('pt');