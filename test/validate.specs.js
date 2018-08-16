const assert = require('chai').assert;
global.window = global;
require('validate.js');

describe('Validar que exista una tarea', () => {
  describe('Validar que una tarea contenga escritos', () => {
    it('Debería tener letras, números y/o signos', () => {
      assert.equal(ValidateWork(' '), false);
    });
  });
}); 

// describe('Validar que se ', () => {
//     describe('Validar que ', () => {
//       it('Debería tener letras, números y/o signos', () => {
//         assert.equal(ValidateWork(' ')), false);
//       });
//     });
//   }; 