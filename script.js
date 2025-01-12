function openApp(appName) {
  const modal = document.getElementById('app-modal');
  const appContent = document.getElementById('app-content');

  // Apps simulieren
  if (appName === 'photos') {
    appContent.innerHTML = `
      <h2>Fotos</h2>
      <p>Hier sind deine Fotos.</p>
      <img src="example-photo.jpg" alt="Beispielfoto" style="width: 100%; max-width: 300px;">
    `;
  } else if (appName === 'weather') {
    appContent.innerHTML = `
      <h2>Wetter</h2>
      <p>Es ist sonnig mit 25°C.</p>
    `;
  }

  modal.style.display = 'flex';
}

function closeApp() {
  const modal = document.getElementById('app-modal');
  modal.style.display = 'none';
}
