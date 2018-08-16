window.validateWork = function(work) {
  if (!work.trim() === ' ') { // se verifica que no esté vacío
    return false;
  }
  return true;
};