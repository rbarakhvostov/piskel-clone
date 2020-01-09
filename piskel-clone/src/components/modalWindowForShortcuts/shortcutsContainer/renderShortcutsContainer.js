import './shortcutsContainer.css';

export default function renderShortcutsContainer() {
  const shortcutsModalWindow = document.querySelector('.shortcuts-modal-window');
  shortcutsModalWindow.insertAdjacentHTML('beforeEnd',
    `<div class="shortcuts-container">
      <div class="pen-hotkey-container">
        <input class="hotkey" maxlength="1" id="pen-hotkey" type="text" value="Q">
        <label for="pen-hotkey">pen tool</label>
      </div>
      <div class="mirror-pen-hotkey-container">
        <input class="hotkey" maxlength="1" id="mirror-pen-hotkey" type="text" value="W">
        <label for="mirror-pen-hotkey">mirror pen tool</label>
      </div>
      <div class="eraser-hotkey-container">
        <input class="hotkey" maxlength="1" id="eraser-hotkey" type="text" value="E">
        <label for="eraser-hotkey">eraser tool</label>
      </div>
      <div class="paint-bucket-hotkey-container">
        <input class="hotkey" maxlength="1" id="paint-bucket-hotkey" type="text" value="R">
        <label for="paint-bucket-hotkey">paint bucket tool</label>
      </div>
      <div class="lighten-hotkey-container">
        <input class="hotkey" maxlength="1" id="lighten-hotkey" type="text" value="O">
        <label for="lighten-hotkey">lighten tool</label>
      </div>
      <div class="darken-hotkey-container">
        <input class="hotkey" maxlength="1" id="darken-hotkey" type="text" value="P">
        <label for="darken-hotkey">darken tool</label>
      </div>
      <div class="dithering-tool-hotkey-container">
        <input class="hotkey" maxlength="1" id="dithering-tool-hotkey" type="text" value="Y">
        <label for="dithering-tool-hotkey">dithering tool</label>
      </div>
      <div class="inversion-tool-hotkey-container">
        <input class="hotkey" maxlength="1"  id="inversion-tool-hotkey" type="text" value="U">
        <label for="inversion-tool-hotkey">inversion tool</label>
      </div>
      <div class="color-picker-hotkey-container">
        <input class="hotkey" maxlength="1" id="color-picker-hotkey" type="text" value="T">
        <label for="color-picker-hotkey">color picker</label>
      </div>
      <div class="rectangle-hotkey-container">
        <input class="hotkey" maxlength="1" id="rectangle-hotkey" type="text" value="I">
        <label for="rectangle-hotkey">rectangle tool</label>
      </div>
      <div class="magic-paint-hotkey-container">
        <input class="hotkey" maxlength="1" id="magic-paint-hotkey" type="text" value="A">
        <label for="magic-paint-hotkey">magic paint tool</label>
      </div>
      <div class="swap-colors-hotkey-container">
        <input class="hotkey" maxlength="1" id="swap-colors-hotkey" type="text" value="Z">
        <label for="swap-colors-hotkey">swap colors</label>
      </div>
      <div class="create-frame-hotkey-container">
        <input class="hotkey" maxlength="1" id="create-frame-hotkey" type="text" value="N">
        <label for="create-frame-hotkey">create new frame</label>
      </div>
      <div class="duplicate-frame-hotkey-container">
        <input class="hotkey" maxlength="1" id="duplicate-frame-hotkey" type="text" value="D">
        <label for="duplicate-frame-hotkey">duplicate selected frame</label>
      </div>
      <div class="delete-frame-hotkey-container">
        <input class="hotkey" maxlength="1" id="delete-frame-hotkey" type="text" value="X">
        <label for="delete-frame-hotkey">delete selected frame</label>
      </div>
      <div class="start-animation-hotkey-container">
        <input class="hotkey" maxlength="1" id="start-animation-hotkey" type="text" value="S">
        <label for="start-animation-hotkey">start animation</label>
      </div>
      <div class="fullscreen-hotkey-container">
        <input class="hotkey" maxlength="1" id="fullscreen-hotkey" type="text" value="F">
        <label for="fullscreen-hotkey">fullscreen</label>
      </div>
      <div class="next-frame-hotkey-container">
        <input class="hotkey" maxlength="1" id="next-frame-hotkey" type="text" value="J">
        <label for="next-frame-hotkey">select next frame</label>
      </div>
      <div class="previous-frame-hotkey-container">
        <input class="hotkey" maxlength="1" id="previous-frame-hotkey" type="text" value="H">
        <label for="previous-frame-hotkey">select previous frame</label>
      </div>
      <div class="increase-size-hotkey-container">
        <input class="hotkey" maxlength="1" id="increase-size-hotkey" type="text" value="L">
        <label for="increase-size-hotkey">increase tool size</label>
      </div>
      <div class="decrease-size-hotkey-container">
        <input class="hotkey" maxlength="1" id="decrease-size-hotkey" type="text" value="K">
        <label for="decrease-size-hotkey">decrease tool size</label>
      </div>
      <div class="export-gif-hotkey-container">
        <input class="hotkey" maxlength="1" id="export-gif-hotkey" type="text" value="C">
        <label for="export-gif-hotkey">export gif</label>
      </div>
      <div class="export-apng-hotkey-container">
        <input class="hotkey" maxlength="1" id="export-apng-hotkey" type="text" value="V">
        <label for="export-apng-hotkey">export apng</label>
      </div>
      <div class="export-rmn-hotkey-container">
        <input class="hotkey" maxlength="1" id="export-rmn-hotkey" type="text" value="G">
        <label for="export-rmn-hotkey">export rmn</label>
      </div>
    </div>`);
}
