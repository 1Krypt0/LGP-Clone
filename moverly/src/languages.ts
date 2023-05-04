async function setLanguage(lang:string) {
    const data = await fetch(`src/lang/${lang}.json`);
    const json_data = await data.json();
    setTexts(json_data);
}

const setTexts = (data:any):void =>{
    /*
    PLACE ANY TEXTS TO CHANGE INSIDE THIS FUNCTION
    Example:
    document.getElementById("app")!.innerHTML=data["button"];
    */
}



/*

Example of a selector to change language. Later will be changed to accomodate the site's UI

const selector = document.getElementById("selector")! as HTMLSelectElement //get the language selector

selector.onchange = ():void=>{
    const selectedValue = selector.value
    setLanguage(selectedValue);
}

*/

setLanguage('pt');