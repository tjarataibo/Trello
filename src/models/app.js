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
  input.className = 'inputTitleList';
  input.placeholder = 'Introduzca el título';
  inputbtn.value = 'Añadir lista';
  inputbtn.className = 'btn btn-success';
  inputbtn.type = 'button';
  btnClear.innerHTML = 'X';
  btnClear.className = 'btn btn-secondary';
  inputbtn.addEventListener('click', printTittleL);
};
