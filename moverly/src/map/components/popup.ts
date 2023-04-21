import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";

export class PopUp extends CSS2DObject{
  constructor(title: string, text: string){
    const element = createPopUp(title, text);
    super(element);
  }

}

function  createPopUp(title : string, text : string){
  const modalcontent = document.createElement('div');
  modalcontent.className = 'modal-content';

  const close = document.createElement('span' );
  close.className = 'close';
  close.innerHTML = "&times";
  modalcontent.appendChild(close);

  const popupTitle = document.createElement( 'h2' );
  popupTitle.textContent = title;
  popupTitle.style.textAlign = 'center';
  popupTitle.style.borderRadius = '10px 10px 0 0';
  popupTitle.style.padding = '10px';
  popupTitle.style.margin = '0';
  modalcontent.appendChild(popupTitle);

  const popuptext = document.createElement( 'p' );
  popuptext.textContent = text;
  popuptext.style.margin = '10px';
  modalcontent.appendChild(popuptext);

  return modalcontent;
}