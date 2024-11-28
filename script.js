// Seleccionar la imagen por su ID
const mainImage = document.getElementById('main-image');

// Agregar evento de "mouseover" para reducir el tamaño de la imagen
mainImage.addEventListener('mouseover', () => {
  mainImage.style.transform = 'scale(0.95)'; // Reducir al 90% del tamaño original
});

// Agregar evento de "mouseout" para restaurar el tamaño original
mainImage.addEventListener('mouseout', () => {
  mainImage.style.transform = 'scale(1)'; // Restaurar al tamaño original
});

// Seleccionar el botón pero sin agregarle funcionalidad
const changeImageButton = document.getElementById('change-image-btn');
changeImageButton.addEventListener('click', () => {
  // No realiza ninguna acción, solo queda como un botón interactivo
});
