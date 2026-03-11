// Funciones auxiliares del proyecto control-versiones
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = { capitalize };
