// Antes - lógica mezclada
function handleError(error) {
  const mensajes = {
    404: 'No encontrado',
    500: 'Error del servidor',
  };
  const mensaje = mensajes[error.status];
  if (mensaje) console.log(mensaje);
  return null;
}

module.exports = { handleError };
