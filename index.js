// import ColorPicker from './colorJoe/colorjoe.min.js';
// import colorjoe from './colorJoe/colorjoe.min.js';

class ColorPicker {
  constructor(root) {
    this.root = root;
    this.colorjoe = colorjoe.rgb(document.querySelector('.colorjoe'));
    this.selectedColor = null;
    this.savedColors = this.getSavedColors();

    this.colorjoe.show();
    this.setSelectedColor("#009578");

    this.colorjoe.on('change', color => {
      this.setSelectedColor(color.hex(), true);
    });

    this.root.querySelectorAll('.saved-color').forEach((el, i) => {
      this.showSavedColor( el, this.savedColors[i]);

      el.addEventListener('mouseup', e => {
        console.log("E BUTTON: ", e.button);
        if (e.button == 2) {
          this.saveColor(this.selectedColor, i );
          this.showSavedColor(el, this.selectedColor);
        }

        this.setSelectedColor(el.dataset.color)
      });
    });
    
  }

  setSelectedColor(color, skipCjUpdate = false) {
    this.selectedColor = color;
    this.root.querySelector('.selected-color-text').textContent = color;
    this.root.querySelector('.selected-color').style.background = color;

    if (!skipCjUpdate) {
      this.colorjoe.set(color);
    }
  }

  getSavedColors() {
    const saved = JSON.parse(localStorage.getItem('colorpicker-saved') || "[]")

    console.log('Saved: ', saved)

    return new Array(5).fill('#ffffff').map((defaultColor, i) => {
      return saved[i] || defaultColor;
    })
  }

  showSavedColor(element, color) {
    element.style.background = color;
    element.dataset.color = color;
  }

  saveColor(color, i ) {
    this.savedColors[i] = color;
    localStorage.setItem('colorpicker-saved', JSON.stringify(this.savedColors))
  }
}

const cp = new ColorPicker(document.querySelector('.container'));

// cp.show();

// console.log('CP: ', cp);

// const cj = colorjoe.rgb(document.querySelector('.colorjoe'));
// cj.show();

// Deprecated
/* <script>
// const cj = colorjoe.rgb(document.querySelector(".colorjoe"));

// cj.show();
</script>  */
