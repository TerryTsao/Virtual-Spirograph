function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var canvas = new fabric.StaticCanvas("canvas");

var wafer = new fabric.Circle({
    radius : 60,
    fill: 'blue',
    originX : "center",
    originY : "center",
    left : 100,
    top : 100,
});

wafer.setGradient('fill', {
    x1: -wafer.width / 2,
    y1: 0,
    x2: wafer.width / 2,
    y2: 0,
    colorStops: {
        0: 'rgba(214, 53, 21, 0.5)',
        0.2: 'rgba(191, 131, 13, 0.5)',
        0.4: 'rgba(195, 232, 30, 0.5)',
        0.6: 'rgba(30, 232, 60, 0.5)',
        0.8: 'rgba(30, 228, 232, 0.5)',
        1: 'rgba(209, 66, 244, 0.5)',
    }
});

var pencilPoint = new fabric.Circle({
    radius : 2,
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
    originX : "center",
    originY : "center",
    left: 300,
    top: 300,
    radius: 250,
    strokeWidth: 3,
    fill: 'rgba(255, 255, 255, 0)',
    stroke: 'cyan'
})

function setAngle(flakeAngle) {
    angle = flakeAngle * drawFlake.item(0).radius / frame.radius;
    // set drawFlake 
    // set center
    distToFrameCenter = frame.radius - drawFlake.item(0).radius;
    drawFlake.left = frame.left - distToFrameCenter * Math.sin(angle);
    drawFlake.top = frame.top + distToFrameCenter * Math.cos(angle);

    // set angle
    drawFlake.angle -= flakeAngle;

//    canvas.renderAll();
    drawFlake.render(canvas.getContext());

    /*
    newDot = new fabric.Circle();
    newDot.set({
        radius: pencilPoint.radius,
        fill: pencilPoint.fill,
        originX: 'center',
        originY: 'center',
        left : pencilPoint.left,
        top: pencilPoint.top,
    });
    
    canvas.add(newDot);
    */
}

setAngle(Math.PI);

canvas.add(drawFlake);
canvas.add(frame);

setAngle(0);

async function drawSth() {
    var angle = 0;
    while (angle < 400000 * Math.PI) {
        setAngle(angle);
        angle += Math.PI / 1000;
        
        await sleep(25);
    }
}

drawSth();



/*
drawFlake.set('angle', 0);
drawFlake.animate({ 'angle': '+=10000', 'left': '0', 'top': '0' }, {
    onChange: canvas.renderAll.bind(canvas),
    duration: 20000,
});
*/

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


ctx.save();
drawSth();
*/
