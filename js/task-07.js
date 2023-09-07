
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', syncFontSize);

function syncFontSize() {
  text.style.fontSize = `${fontSizeControl.value}px`;
}
syncFontSize();
console.log(fontSizeControl);
