import { PerspectiveCamera, Raycaster, Scene, WebGLRenderer, Vector2} from "three";
import { createCamera } from "./components/camera";
import { createPlane } from "./components/plane";
import { createScene } from "./components/scene";
import { MapScene } from "./mapscene";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/loop";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";
import * as data from "../scene_description.json";

class Map {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private loop: Loop;
  private mapScene : MapScene;
  private raycaster : Raycaster;
  private pointer : Vector2;

  constructor(container: Element) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.mapScene = new MapScene(this.scene);
    this.raycaster = new Raycaster();
    this.pointer = new Vector2();

    console.log(this.pointer);

    const controls = createControls(this.camera, this.renderer.domElement);
    this.loop.updatables.push(controls);

    container?.append(this.renderer.domElement);

    this.mapScene.parse(data);

    const plane = createPlane()

    this.scene.add(plane);

    const resizer = new Resizer(container, this.camera, this.renderer);

    document.addEventListener( 'pointerdown', (ev) =>{
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

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { Map };
