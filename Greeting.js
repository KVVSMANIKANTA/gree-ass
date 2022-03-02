const Greetings = [];
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function init() {
  const banner = document.getElementById("banner");
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight;
  for (let i = 0; i < 200; i++) {
    Greetings.push({
      x: Math.random(),
      y: Math.random(),
      size: Math.random(),
      change: 0.15,
    });
  }
}


function update() {
  for (const Greeting of Greetings) {
    star.x += 0.01;
    if (Greeting.x > 1) {
      Greeting.x = 0;
    }
    if (Greeting.size < 0.1) {
      star.change = 0.1;
    } else if (Greeting.size > 0.9) {
      Greeting.change = -0.1;
    }
    Greeting.size += Greeting.change;
  }
}
function render() {
  const { width, height } = canvas;
  context.clearRect(0, 0, width, height); 
  for (const Greeting of Greetings) {
    context.beginPath();
    context.arc(
      Greeting.x * width,
      Greeting.y * height,
      Greeting.size * 3,0,2 * Math.PI,false
    );
    context.fillStyle = "white";
    context.fill();
  }
}

function twinkle() {
  update();
  render();
}
setInterval(twinkle, 100);
init();

render(); 