var canvas = new fabric.Canvas("canvas");

var wafer = new fabric.Circle({
    radius : 50,
    fill: 'blue',
    originX : "center",
    originY : "center",
    left : 100,
    top : 100,
});

var pencilPoint = new fabric.Circle({
    radius : 5,
    fill: 'red',
    originX : "center",
    originY : "center",
    left : 120,
    top : 120,
});

var drawFlake = new fabric.Group([wafer, pencilPoint]);
drawFlake.set({
    originX : "center",
    originY : "center",
    left: 400,
    top: 400,
});

var frame = new fabric.Circle({
    selectable: false,
    originX : "center",
    originY : "center",
    left: 300,
    top: 300,
    radius: 250,
    strokeWidth: 3,
    fill: 'rgba(255, 255, 255, 0)',
    stroke: 'cyan'
})

drawFlake.selectable = false;

canvas.add(drawFlake);
canvas.add(frame);

drawFlake.set('angle', 0);
drawFlake.animate({ 'angle': '+=10000', 'left': '0', 'top': '0' }, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 20000,
});

/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var x=50, y=50;

function drawCircle(cx, cy, radius, color) {
    ctx.save();

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, 2 * Math.PI, true);
    ctx.fill();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function drawSth() {
    while (x < 500) {
        if(x % 7 === 0) {
            ctx.restore();
        }
        drawDot();
        await sleep(50);
    }
}

ctx.save();
drawSth();
*/
