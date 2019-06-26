import './toolSizes.css';
import selectToolSize from '../../utilities/selectToolSize';

export default function renderToolSizes() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<form class="tool-sizes" title="tool sizes (1,2,4)"><input class="tool-size" value="128" type="radio" name="tool-size" id="tool-size-1"><label class="tool-size-label tool-size-label-1" for="tool-size-1"><div></div></label><input class="tool-size" value="64" type="radio" name="tool-size" id="tool-size-2" checked><label class="tool-size-label tool-size-label-2 selected-size" for="tool-size-2"><div></div></label><input class="tool-size" value="32" type="radio" name="tool-size" id="tool-size-3"><label class="tool-size-label tool-size-label-3" for="tool-size-3"><div></div></label></form>');
  document.querySelector('.tool-sizes').addEventListener('click', selectToolSize);
}
