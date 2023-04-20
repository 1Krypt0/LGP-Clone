import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";

export class PopUp extends CSS2DObject{
  constructor(text: string){
    const element = createPopUp(text);
    super(element);
  }

}

function  createPopUp(text : string){
  const modalcontent = document.createElement('div');
  modalcontent.className = 'modal-content';

  const close = document.createElement( 'span' );
  close.className = 'close';
  close.innerHTML = "&times";
  modalcontent.appendChild(close);

  const popuptext = document.createElement( 'p' );
  popuptext.textContent = text;
  modalcontent.appendChild(popuptext);

  return modalcontent;
}