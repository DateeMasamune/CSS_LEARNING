const cssVariables = async () => {
  await import('./style.css');

  const rootElement = document.documentElement;
  const styles = getComputedStyle(rootElement);
  const mainColor = styles.getPropertyValue('--main-bg');
  console.log('==========>mainColor', mainColor);
  rootElement.style.setProperty('--main-bg', '#cdf');
};

export default cssVariables;
