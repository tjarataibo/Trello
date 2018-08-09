const assert = require('chai').assert;
global.window = global;
require('../validate.js'); // Enlaza el archivo

// Validar correo
describe('Validar ', () => { 
  describe('Debería verificar si existe el arroba', () => {
    it('Debería el correo tener sólo un arroba', () => { 
      assert.equal(validateEmail('qwerty@qwerty.com'), true);
      assert.equal(validateEmail('qwerty@@qwerty.com'), false);
      assert.equal(validateEmail('qwerty.com'), false);
    });
    it('Debería el correo tener un arroba antes del dominio', ()=>{
      assert.equal(validateEmail('tjarataibo@gmail.com'), true);
      assert.equal(validateEmail('.com@qwerty'), false);
    });
    it('Debería la contraseña ser sólo números', () => { 
      assert.equal(validatePass('12345678'), true); 
      assert.equal(validatePass('1234D678'), false);
    });
    it('Debería el correo tener sólo un arroba', ()=>{ // Caso de prueba
      assert.equal(validateEmail('qwerty#@qwerty.com'), false); // assert.equal verifica que el parámetro 1 sea igual al parámetro 2
      assert.equal(validateEmail('%qwerty@@qwerty.com'), false);
      assert.equal(validateEmail('qwerty&.com'), false);
    });
  });
});


// Validar tarjeta
describe('Validar tarjeta', () =>{
  describe('verificar que contenga máximo 10 caracteres numéricos y no contenga espacio en blanco', () =>{
    it('Debería tener máximo 10 carácteres', () =>{
      assert.equal(validateCard('0123456789'), true);
      assert.equal(validateCard('12345678'), true);
      assert.equal(validateCard('01234567891234'), false);
    });
    it('Debería tener sólo números', () =>{
      assert.equal(validateCard('1234567890'), true);
      assert.equal(validateCard('12a4g609jk'), false);
    });
    it('Debería no tener espacios', () =>{
      assert.equal(validateCard('1234567890'), true);
      assert.equal(validateCard('12 347'), false);
      assert.equal(validateCard('12 34787686'), false);
    });
  });
});
