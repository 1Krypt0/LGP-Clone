import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";

export class PopUp extends CSS2DObject {
  constructor(title, street, text, imageUrl) {
    const element = createPopUp(title, street, text, imageUrl);
    super(element);
  }
}

function createPopUp(title, street, text, imageUrl) {
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
  popupTitle.textContent = title;
  modalText.appendChild(popupTitle);

  const popupStreet = document.createElement('p');
  popupStreet.className = 'street-text';
  popupStreet.textContent = street;
  popupStreet.style.marginBottom = '5px';
  modalText.appendChild(popupStreet);

  const popupText = document.createElement('p');
  popupText.textContent = text;
  modalText.appendChild(popupText);

  modalcontent.appendChild(modalText);

  return modalcontent;
}