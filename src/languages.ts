fetch("src/lang/pt.json")
.then((response)=>{
    console.log(response)
    return response.json()
})
.then(data=>init(data))
.catch(e=>console.error(e))

let init = (data:any):void =>{
    document.getElementById("app")!.innerHTML=data["button"];
}

const selector = document.getElementById("selector")! as HTMLSelectElement

selector.onchange = ():void=>{
    const selectedValue = selector.value
    console.log(`src/lang/${selectedValue}.json`)
    fetch(`src/lang/${selectedValue}.json`)
    .then(response=>response.json())
    .then(data=>init(data))
    .catch(e=>console.error(e))
}

export {}