// main
function showMain() {
    document.getElementById("main").style.display = "block";
  }

// layout - bar
let layout = document.getElementById("layout");



// bars
let i = 0;
function progressBarFirst() {
    
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("progress__bar");
    let width = 1;
    let id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        layout.style.display = "none";
        elem.style.display = "none";
        showMain();
      } else {
        width++;
        elem.style.width = width + "%";

      }
    }
  }
}

let j = 0;
function progressBarsecondary() {
  if (j == 0) {
    j = 1;
    let elem = document.getElementById("progress__bar--secondary");
    let width = 1;
    let id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        j = 0;
        layout.style.display = "none";
        elem.style.display = "none";
      } else {
        width++;
        elem.style.width = width + "%";

      }
    }
  }
}


progressBarFirst();
progressBarsecondary();
