export default function renderLighten() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="lighten" title="lighten [O]"><span class="far fa-lightbulb"></span></button>');
}
