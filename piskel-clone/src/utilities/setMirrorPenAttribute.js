// for mirror pen tool;
export default function setMirrorPenAttribute() {
  const mirrorPenTool = document.querySelector('.mirror-pen-tool');
  mirrorPenTool.setAttribute('title', 'vertical mirror pen\n+ctrl - horizontal\n+shift - vertical and horizontal');
}
