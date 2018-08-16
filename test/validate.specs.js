const assert = require('chai').assert;
global.window = global;
require('validate.js');

describe('Validar formulario', () => {
  describe('Debería verificar que exista un formulario', () => {
    it('Debería mostrar el formulario', () => {
      assert.equal(validateFormulario(''), false);
    });
  });
}); 
