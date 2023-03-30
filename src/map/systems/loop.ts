import { Camera, Clock, Mesh, Scene, WebGLRenderer } from "three";

class Loop {
  public updatables: Mesh[];
  private clock: Clock;

  constructor(
    private camera: Camera,
    private scene: Scene,
    private renderer: WebGLRenderer
  ) {
    this.updatables = [];
    this.clock = new Clock();
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();

      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = this.clock.getDelta();
    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
