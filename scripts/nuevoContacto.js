document.getElementById('newContactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.querySelector('input[type="text"]').value;
  const correo = document.querySelector('input[type="email"]').value;
  const telefono = document.querySelectorAll('input[type="text"]')[1].value;
  const direccion = document.querySelectorAll('input[type="text"]')[2].value;
  const notas = document.querySelector('textarea').value;
  alert('Contacto guardado (visual):\nNombre: ' + nombre + '\nCorreo: ' + correo + '\nTeléfono: ' + telefono + '\nDirección: ' + direccion + '\nNotas: ' + notas);
});