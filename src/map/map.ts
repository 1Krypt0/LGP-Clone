import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { createCamera } from "./components/camera";
import { createCube } from "./components/cube";
import { createScene } from "./components/scene";
import { createControls } from "./systems/controls";
import { Loop } from "./systems/loop";
import { createRenderer } from "./systems/renderer";
import { Resizer } from "./systems/resizer";

class Map {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private loop: Loop;

  constructor(container: Element) {
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.loop = new Loop(this.camera, this.scene, this.renderer);

    const controls = createControls(this.camera, this.renderer.domElement);
    this.loop.updatables.push(controls);

    container?.append(this.renderer.domElement);

    const cube = createCube();

    this.scene.add(cube);

    const resizer = new Resizer(container, this.camera, this.renderer);
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
