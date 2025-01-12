// Öffnen des Modals mit einer bestimmten Nachricht
function showModal(message) {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
  modal.style.display = 'flex';

  // Das Modal nach 2 Sekunden wieder schließen
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000);
}

// Event Listener für den Home-Button
const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', () => {
  showModal('Hallo');  // Nachricht für den Home-Button Klick
});

// Event Listener für den Screen
const screen = document.querySelector('.screen');
screen.addEventListener('click', () => {
  showModal('Guten Tag');  // Nachricht für den Screen Klick
});
