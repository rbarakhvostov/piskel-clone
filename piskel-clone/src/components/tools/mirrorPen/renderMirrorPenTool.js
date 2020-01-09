import setMirrorPenAttribute from '../../../utilities/setMirrorPenAttribute';

export default function renderMirrorPenTool() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd',
    `<button class="mirror-pen-tool">
      <span class="fas fa-grip-lines-vertical"></span>
    </button>`);
  setMirrorPenAttribute();
}
