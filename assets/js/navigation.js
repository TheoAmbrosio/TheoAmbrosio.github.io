document.querySelectorAll('.nav-dropdown details').forEach((details) => {
  const trigger = details.querySelector('summary');
  const container = details.closest('.nav-dropdown');
  const hoverEnabled = () => window.matchMedia('(hover: hover) and (min-width: 768px)').matches;

  container.addEventListener('pointerenter', () => {
    if (hoverEnabled()) details.open = true;
  });
  container.addEventListener('pointerleave', () => {
    if (hoverEnabled() && !container.contains(document.activeElement)) details.open = false;
  });
  details.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && details.open) {
      event.preventDefault();
      details.open = false;
      trigger.focus();
    }
  });
  details.addEventListener('focusout', (event) => {
    if (!details.contains(event.relatedTarget)) details.open = false;
  });
  document.addEventListener('click', (event) => {
    if (!container.contains(event.target)) details.open = false;
  });
});
