// Declaración de variables
let input;
let Tlist;
let form;
let list;
let printT;
let textPrint;
let textArea;
let listado = [];
let buttonList;

// creación de listas
window.addL = function() {
  btnAddL.style.display = 'none';
  let write = document.getElementById('listInfinity');
  let listas = document.createElement('div');
  write.appendChild(listas);
  listas.id = 'trelloBoard';
  list = document.createElement('div');
  listas.appendChild(list);
  list.className = 'col';
  list.id = 'list';
  Tlist = document.createElement('div');
  list.appendChild(Tlist);
  Tlist.className = 'Tlist';
  Tlist.id = 'Tlist';
  form = document.createElement('form');
  list.appendChild(form);
  input = document.createElement('input');
  let inputbtn = document.createElement('input');
  let btnClear = document.createElement('button');
  form.appendChild(input);
  form.appendChild(inputbtn);
  form.appendChild(btnClear);
  input.type = 'text';
  input.className = 'inputTittleList';
  input.placeholder = 'Introduzca el título de la lista';
  inputbtn.value = 'Añadir lista';
  inputbtn.className = 'btn btn-success';
  inputbtn.type = 'button';
  btnClear.innerHTML = 'X';
  btnClear.className = 'btn btn-secondary';
  inputbtn.addEventListener('click', printTittleL);
};
// pintar título de lista
window.printTittleL = function() {
  let tittleL = input.value;
  Tlist.innerHTML = tittleL;
  Tlist.style.display = 'block';
  form.style.display = 'none';
  displayFormC(); 
  infinityList();
};
// añadir listas
window.infinityList = function() {
  let writeInf = document.getElementById('listInfinity');
  buttonList = document.createElement('button');
  buttonList.className = 'add-list-button';
  buttonList.innerHTML = '+Añada otra lista';
  writeInf.appendChild(buttonList);
  buttonList.addEventListener('click', addL2);

  return infinityList;
};

window.addL2 = function() {
  buttonList.style.display = 'none';
  addL();
};

// creación de tarjetas
window.displayFormC = function() {
  printT = document.createElement('div');
  printT.setAttribute('class', 'printT');
  list.appendChild(printT);
  formT = document.createElement('form');
  formT.className = 'tarjeta';
  formT.id = 'formTarjeta';
  printT.appendChild(formT);
  let tarjet = document.createElement('añade'); 
  let addTarjet = document.createTextNode('+ Añada una tarjeta');
  tarjet.setAttribute('class', 'agrega');
  tarjet.setAttribute('href', '#');
  tarjet.setAttribute('onclick', 'showCards()');
  tarjet.appendChild(addTarjet);
  formT.appendChild(tarjet);
};
// añadir tarjetas
window.showCards = function() {
  formT.style.display = 'none';
  textPrint = document.createElement('div');
  textPrint.style.display = 'none';
  printT.appendChild(textPrint);
  textArea = document.createElement('textarea');
  textArea.placeholder = 'Introduzca un título para esta tarjeta';
  textArea.className = 'txtArea';
  textArea.focus();
  printT.appendChild(textArea);
  let btnPrintTar = document.createElement('input');
  btnPrintTar.type = 'button';
  btnPrintTar.value = 'Añadir tarjeta';
  btnPrintTar.className = 'btn btn-success';
  btnPrintTar.addEventListener('click', printWrite);
  printT.appendChild(btnPrintTar);
};
// guardar tarjetas en listas
window.printWrite = function() {
  let parragr;
  let guardar = textArea.value;
  listado.push(guardar);
  for (let index = 0; index <= listado.length; index++) {
    if (listado[index] !== undefined) {
      parragr = document.createElement('p');
      parragr.className = 'cardsText';
      parragr.innerHTML = listado[index];
    }
  }
  textPrint.appendChild(parragr);
  textPrint.style.display = 'block';
  textArea.value = '';
};


module.exports = (infinityList, printTittleL, addL);
