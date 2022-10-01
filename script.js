var bgc = '#fff';
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient

var grd = ctx.createLinearGradient(0,200,200,0);
grd.addColorStop(0,"rgb(205, 51, 255)");
grd.addColorStop(.5,"rgb(255, 51, 52)");
grd.addColorStop(1,"rgb(255, 204, 51)");

var img = document.getElementById("img");
// Fill with gradient
ctx.fillStyle = grd;

ctx.beginPath();
ctx.arc(105, 105, 105, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(105, 105, 99, 0, 2 * Math.PI);
ctx.fillStyle = bgc;
ctx.fill();

ctx.save();
ctx.beginPath();
ctx.arc(105, 105, 95, 0, 2*Math.PI, false);
ctx.clip();
ctx.drawImage(img, 5, 0, 200, 218);
ctx.restore();


var c = document.getElementById("myCanvas0");
var ctx = c.getContext("2d");

// Create gradient

var grd = ctx.createLinearGradient(0,30,30,0);
grd.addColorStop(0,"rgb(205, 51, 255)");
grd.addColorStop(.5,"rgb(255, 51, 52)");
grd.addColorStop(1,"rgb(255, 204, 51)");

var img = document.getElementById("img");
// Fill with gradient
ctx.fillStyle = grd;

ctx.beginPath();
ctx.arc(30, 30, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(30, 30, 28, 0, 2 * Math.PI);
ctx.fillStyle = bgc;
ctx.fill();

ctx.save();
ctx.beginPath();
ctx.arc(30, 30, 26, 0, 2*Math.PI, false);
ctx.clip();
ctx.drawImage(img, 2, 0, 60, 65);
ctx.restore();


let theme = localStorage.getItem('theme');

if(theme == null){
  setTheme('light');
} else {
  setTheme(theme);
}
var bgc = '#fff';
let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++){
  themeDots[i].addEventListener('click', function(){
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}


function setTheme(mode){
  if(mode == 'light'){
    document.getElementById('theme-style').href = 'default.css';
    bgc = '#fff';
  }

  if(mode == 'blue'){
    document.getElementById('theme-style').href = 'blue.css';
    bgc = '#192734';
  }

  if(mode == 'green'){
    document.getElementById('theme-style').href = 'green.css';
    bgc = '#515a48'
  }

  if(mode == 'purple'){
    document.getElementById('theme-style').href = 'purple.css';
    bgc = '#382a3f'
  }

  localStorage.setItem('theme', mode)

}

function fun(){
  alert("I CAN DESIGN YOUR SITE UPTO NEXT LEVEL.")
}
