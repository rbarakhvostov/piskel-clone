export default function renderDarken() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="darken"><span class="fas fa-lightbulb"></span></button>');
}
