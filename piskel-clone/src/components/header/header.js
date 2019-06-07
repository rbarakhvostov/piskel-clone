import './header.css';

export default function renderHeader() {
  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterBegin', '<header class="header"><nav class="navigation"><span class="fas fa-bars burger-menu"></span><h1 class="title"><a href="#">Piskel Clone</a></h1><span class="fas fa-ellipsis-v ellipsis"></span></nav></header>');
}
