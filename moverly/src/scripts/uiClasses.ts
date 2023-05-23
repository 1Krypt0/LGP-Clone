import { buttonBlue, secondaryButtonBlue } from "./colors";

class RouteUI{

    isOpen:boolean = false;
    routeButton:HTMLElement | null;
  
  
    constructor(routeButton:HTMLElement | null){
      if(routeButton == null){
        this.routeButton = null;
      }else{
        this.routeButton = routeButton;
        routeButton.addEventListener("click",()=>{
          this.setRouteOpen(!this.isOpen);
        })
      }
    }
  
    setRouteOpen(setOpen:boolean){
      if (this.routeButton == null){return};
      this.isOpen = setOpen;
      if(setOpen){
        this.routeButton.style.background = secondaryButtonBlue;
        this.routeButton.style.color = "white";
  
        //OPEN RoUTE
  
      }else{
        this.routeButton.style.background = "transparent";
        this.routeButton.style.color = buttonBlue;
  
        //CLOSE ROUTE
  
      }
    }
  }

  export {RouteUI};