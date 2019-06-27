import './header.css';

export default function renderHeader() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterBegin', '<header class="header"><div class="header-container"><h1 class="title"><a href="#">Piskel Clone</a></h1></div></header>');
}
