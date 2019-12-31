function detachStylesheets() {
  Array.from(document.querySelectorAll('link[rel="stylesheet"]')).forEach(style => {
    style.parentNode.removeChild(style);
  });
}

function insertStylesheet(isRTL) {
  const link = document.createElement('link');
  link.href = `${process.env.PUBLIC_URL}/css/theme${isRTL ? '-rtl' : ''}.css`;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  document.getElementsByTagName('head')[0].appendChild(link);
  document.getElementsByTagName('html')[0].setAttribute('dir', `${isRTL ? 'rtl' : 'ltr'}`);
}

export default isRTL => {
  detachStylesheets();
  insertStylesheet(isRTL);
};
