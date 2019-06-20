import './penSizes.css';
import selectPenSize from '../../utilities/selectPenSize';

export default function renderPenSizes() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<form class="pen-sizes"><input class="pen-size" value="128" type="radio" name="pen-size" id="pen-size-1"><label class="pen-size-label pen-size-1-label" for="pen-size-1"><div></div></label><input class="pen-size" value="64" type="radio" name="pen-size" id="pen-size-2" checked><label class="pen-size-label pen-size-2-label" for="pen-size-2"><div></div></label><input class="pen-size" value="32" type="radio" name="pen-size" id="pen-size-3"><label class="pen-size-label pen-size-3-label" for="pen-size-3"><div></div></label></form>');
  document.querySelector('.pen-sizes').addEventListener('click', selectPenSize);
}
