import applyMirrorPenTool from './applyMirrorPenTool';

export default function startApplyMirrorPenTool() {
  const mirrorPen = document.querySelector('.mirror-pen-tool');
  if (mirrorPen.classList.contains('selected-tool')) {
    applyMirrorPenTool();
  }
}
