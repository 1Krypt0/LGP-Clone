import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { currentLanguage } from "../../languages";

export class PopUp extends CSS2DObject {
  constructor(title, titulo, street, text, texto, imageUrl) {
    const element = createPopUp(title, titulo, street, text, texto, imageUrl);
    super(element);
  }
}

function createPopUp(title, titulo, street, text, texto, imageUrl) {
  const modalcontent = document.createElement('div');
  modalcontent.className = 'modal-content';

  const close = document.createElement('button');
  close.className = 'close';
  const closeImage = document.createElement('img');
  closeImage.src = '/src/assets/ui/close-button.png';
  close.appendChild(closeImage);
  modalcontent.appendChild(close);

  if (imageUrl) {
    const modalImage = document.createElement('img');
    modalImage.className = 'modal-image';
    modalImage.src = imageUrl;
    modalcontent.appendChild(modalImage);
  }
  
  const modalText = document.createElement('div');
  modalText.className = 'modal-text';

  const popupTitle = document.createElement('h2');
  if (currentLanguage === 'en') {
    popupTitle.textContent = title;
  } else {
    popupTitle.textContent = titulo;
  }
  modalText.appendChild(popupTitle);

  const popupStreet = document.createElement('p');
  popupStreet.className = 'street-text';
  popupStreet.textContent = street;
  popupStreet.style.marginBottom = '5px';
  modalText.appendChild(popupStreet);

  const popupText = document.createElement('p');
  if (currentLanguage === 'en') {
    popupText.textContent = text;
  } else {
    popupText.textContent = texto;
  }
  modalText.appendChild(popupText);
  modalcontent.appendChild(modalText);

  return modalcontent;
}