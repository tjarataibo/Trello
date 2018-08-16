window.ValidateWork = function() {
  if (!password.trim() === ' ') { // se verifica que no esté vacío
    return false;
  }
  return true;
};