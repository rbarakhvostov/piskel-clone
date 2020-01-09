import replaceCanvas from './replaceCanvas';

export default function applyTool(e) {
  const { target } = e;
  if (target !== this) replaceCanvas();
}
