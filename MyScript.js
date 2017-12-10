var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var myvar;
var mass;
mass = [canvas.width][canvas.height];
ctx.fillStyle = "green"; // color cell

function calc(){
    alert(myvar);
}
var x=10, y=10;

c1.onclick = function (ev) {
    var q = ev.offsetX;
    var w = ev.offsetY;

    console.log(q, " ", w);

    ctx.fillRect(q-(x/2),w-(y/2),x,y); // select cell alive
    mass [x]= {}
}

function resetPole() {
    ctx.clearRect(0,0,canvas.width,canvas.height); // reset game pole
   // console.log(canvas.width);
}

function setPole(x,y) {
    for(var i = 0; i<10; i++){
        ctx.fillRect(x*i,y*i,x,y);

    }
}