document.addEventListener('DOMContentLoaded', () => {
  // Lógica de Saludo Interactivo
  const boton = document.getElementById('btn-saludo');
  const mensaje = document.getElementById('mensaje-saludo');

  if (boton && mensaje) {
    boton.addEventListener('click', () => {
      mensaje.textContent = '¡Hola! Gracias por visitar mi portafolio 👋';
      mensaje.style.opacity = '0';
      
      setTimeout(() => {
        mensaje.style.transition = 'opacity 0.4s ease';
        mensaje.style.opacity = '1';
      }, 50);
    });
  }

  // Lógica de Alternar Tema (Dark/Light)
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Iconos SVG para Sol (Modo Claro) y Luna (Modo Oscuro)
  const sunIcon = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
  const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

  // Comprobar preferencia guardada previamente
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.innerHTML = moonIcon;
  } else {
    themeIcon.innerHTML = sunIcon;
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');

    // Cambiar icono y guardar estado
    if (isLight) {
      themeIcon.innerHTML = moonIcon;
      localStorage.setItem('theme', 'light');
    } else {
      themeIcon.innerHTML = sunIcon;
      localStorage.setItem('theme', 'dark');
    }
  });
});