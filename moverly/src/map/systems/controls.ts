import { Camera, MOUSE } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function createControls(camera: Camera, canvas: HTMLElement) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;
  controls.enableRotate = false;

  controls.minDistance = 5;
  controls.maxDistance = 15;

  controls.mouseButtons = {
    LEFT: MOUSE.PAN,
    MIDDLE: MOUSE.DOLLY,
    RIGHT: MOUSE.ROTATE,
  };

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
