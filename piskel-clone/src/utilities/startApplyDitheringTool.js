import applyDitheringTool from './applyDitheringTool';

export default function startApplyDitheringTool() {
  const ditheringTool = document.querySelector('.dithering-tool');
  if (ditheringTool.classList.contains('selected-tool')) {
    applyDitheringTool();
  }
}
