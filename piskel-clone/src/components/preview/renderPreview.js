import './preview.css';

export default function renderPreview() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="preview"></div>');
}
