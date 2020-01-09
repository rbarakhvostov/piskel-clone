import './header.css';

export default function renderHeader() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterBegin',
    `<header class="header">
      <h1 class="title">Piskel Clone</h1>
    </header>`);
}
