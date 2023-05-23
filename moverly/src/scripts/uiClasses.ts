import { buttonBlue, secondaryButtonBlue } from "./colors";
import { Route } from "../map/components/route";


class RouteUI{

    isOpen:boolean = false;
    routeButton:HTMLElement | null;
    route : Route;
  
    constructor(routeButton:HTMLElement | null, route:Route){
      if(routeButton == null){
        this.routeButton = null;
      }else{
        this.routeButton = routeButton;
        routeButton.addEventListener("click",()=>{
          this.setRouteOpen(!this.isOpen);
        })
      }
      this.route = route;
    }
  
    setRouteOpen(setOpen:boolean){
      console.log(this.route);
      if (this.routeButton == null){return};
      this.isOpen = setOpen;
      if(setOpen){
        this.route.showRoute();
        this.routeButton.style.background = secondaryButtonBlue;
        this.routeButton.style.color = "white";
  
        //OPEN RoUTE
  
      }else{
        this.route.hideRoute();
        this.routeButton.style.background = "transparent";
        this.routeButton.style.color = buttonBlue;
  
        //CLOSE ROUTE
  
      }
    }
  }

  export {RouteUI};