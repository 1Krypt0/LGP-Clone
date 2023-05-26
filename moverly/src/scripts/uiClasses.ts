import { buttonBlue, secondaryButtonBlue } from "./colors";

class RouteUI{

    isOpen:boolean = false;
    routeButton:HTMLElement | null;
    routeButtonMobile:HTMLElement | null;
  
  
    constructor(routeButton:HTMLElement | null, routeButtonMobile:HTMLElement | null){
      if(routeButton == null || routeButtonMobile == null){
        this.routeButton = null;
        this.routeButtonMobile = null;
      }else{
        this.routeButton = routeButton;
        this.routeButtonMobile = routeButtonMobile;
        routeButton.addEventListener("click",()=>{
          this.setRouteOpen(!this.isOpen);
        })
        routeButtonMobile.addEventListener("click",()=>{
          this.setRouteOpen(!this.isOpen);
        })
      }
    }
  
    setRouteOpen(setOpen:boolean){
      if (this.routeButton == null || this.routeButtonMobile == null){return};
      this.isOpen = setOpen;
      if(setOpen){
        this.routeButton.style.background = secondaryButtonBlue;
        this.routeButton.style.color = "white";
        this.routeButtonMobile.style.background = secondaryButtonBlue;
        this.routeButtonMobile.style.color = "white";
  
        //OPEN RoUTE
  
      }else{
        this.routeButton.style.background = "transparent";
        this.routeButton.style.color = buttonBlue;
        this.routeButtonMobile.style.background = "transparent";
        this.routeButtonMobile.style.color = buttonBlue;
  
        //CLOSE ROUTE
  
      }
    }
  }

  export {RouteUI};