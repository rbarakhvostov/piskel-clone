export default function renderLighten() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="lighten"><span class="far fa-lightbulb"></span></button>');
}
