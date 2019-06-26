// for mirror pen tool;
export default function setTitleAttribute() {
  const mirrorPenTool = document.querySelector('.mirror-pen-tool');
  mirrorPenTool.setAttribute('title', 'vertical mirror pen [W]\n+ctrl - horizontal\n+shift - vertical and horizontal');
}
