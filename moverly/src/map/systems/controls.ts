import { Camera, MOUSE } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera: Camera, canvas: HTMLElement) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableRotate = false;

  controls.minDistance = 0.1;
  controls.maxDistance = 0.88;

  controls.mouseButtons = {
    LEFT: MOUSE.PAN,
    MIDDLE: MOUSE.DOLLY,
    RIGHT: MOUSE.ROTATE,
  };

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
