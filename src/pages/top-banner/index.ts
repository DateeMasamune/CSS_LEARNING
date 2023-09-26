const topBanner = async () => {
  await import('./style.css');

  const button = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');

  button?.addEventListener('click', (event) => {
    event.preventDefault();

    if (modal) {
      modal.style.display = 'block';
    }
  });

  close?.addEventListener('click', (event) => {
    event.preventDefault();

    if (modal) {
      modal.style.display = 'none';
    }
  });
};

export default topBanner;
