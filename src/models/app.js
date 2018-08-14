// Declaración de variables


// creación de listas
window.addL = function() {
  btnAddL.style.display = 'none';
  let write = document.getElementById('listInfinity');
  let listas = document.createElement('div');
  write.appendChild(listas);
  listas.id = 'trello';
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

};
// añadir listas
window.infinityList = function() {
 
};

window.addL2 = function() {
 
};

// creación de tarjetas
window.displayFormC = function() {
 
};
// añadir tarjetas
window.showCards = function() {

};
// guardar tarjetas en listas
window.printWrite = function() {

};

