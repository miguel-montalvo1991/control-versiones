// Antes - lógica mezclada
function handleError(error) {
  if (error.status === 404) {
    console.log('No encontrado');
    return null;
  }
  if (error.status === 500) {
    console.log('Error del servidor');
    return null;
  }
  return null;
}

module.exports = { handleError };