import { PerspectiveCamera, Raycaster, Scene, WebGLRenderer, Vector2} from "three";
import { createCamera } from "./components/camera";
import { createPlane } from "./components/plane";
import { createScene } from "./components/scene";
import { POI } from "./components/poi";
import { MapScene } from "./mapscene";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/loop";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";
import { CSS2DRenderer} from 'three/examples/jsm/renderers/CSS2DRenderer';
import * as data from "../scene_description.json";

class Map {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private cssrenderer : CSS2DRenderer;
  private loop: Loop;
  private mapScene : MapScene;
  private raycaster : Raycaster;
  private pointer : Vector2;
  private poi : POI | null;

  constructor(container: Element) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    container?.append(this.renderer.domElement);
    this.mapScene = new MapScene(this.scene, this);
    this.raycaster = new Raycaster();
    this.pointer = new Vector2();
    this.poi = null;

    this.cssrenderer = new CSS2DRenderer();
    this.cssrenderer.setSize( window.innerWidth, window.innerHeight );
    this.cssrenderer.domElement.style.position = 'absolute';
    this.cssrenderer.domElement.style.top = '0px';
    container?.append(this.cssrenderer.domElement);

    this.loop = new Loop(this.camera, this.scene, this.renderer, this.cssrenderer);

    const controls = createControls(this.camera, this.cssrenderer.domElement);
    this.loop.updatables.push(controls);

    this.mapScene.parse(data);

    const plane = createPlane();

    this.scene.add(plane);

    const resizer = new Resizer(container, this.camera, this.renderer);

    document.addEventListener( 'pointerdown', (ev) =>{
      const close = document.querySelector('.close');

      if(ev.target == close){
        this.poi?.closePopup();
      }

      this.pointer.set( ( ev.clientX / window.innerWidth ) * 2 - 1, - ( ev.clientY / window.innerHeight ) * 2 + 1 );
		  this.raycaster.setFromCamera( this.pointer, this.camera );
		  const intersects = this.raycaster.intersectObjects( this.scene.children, false);
      for(const intersect of intersects) {
        if(intersect.object.onClick){
          intersect.object.onClick();
        }
      }

    } );
  }

  openPopUp(poi : POI){
    this.poi = poi;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
    this.cssrenderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { Map };
