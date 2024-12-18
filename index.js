// import ColorPicker from './colorJoe/colorjoe.min.js';
// import colorjoe from './colorJoe/colorjoe.min.js';

class ColorPicker {
  constructor(root) {
    this.root = root;
    this.colorjoe = colorjoe.rgb(document.querySelector('.colorjoe'));
    this.colorjoe.show();
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
