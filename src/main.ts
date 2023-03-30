import { Map } from "./map/map";

const main = () => {
  const container = document.querySelector("#scene") || new Element();
  const map = new Map(container);

  map.start();
};

main();
