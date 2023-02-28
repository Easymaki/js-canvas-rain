var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var drops = [];

function createDrop() {
    var x = Math.random() * canvas.width;
    var y = Math.random() * -canvas.height;
    var speed = Math.random() * 10 + 15;

    drops.push({
        x: x,
        y: y,
        speed: speed,
    });
}

function drawDrop(drop) {
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + 60);
    ctx.strokeStyle = "gray";
    ctx.stroke();
}

function updateDrop(drop) {
    drop.y += drop.speed;
    if (drop.y > canvas.height) {
        var index = drops.indexOf(drop);
        drops.splice(index, 1);
    }
}

function onResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function rain() {
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (Math.random() < 0.1) {
        createDrop();
    }

    drops.forEach(function (drop) {
        updateDrop(drop);
        drawDrop(drop);
    });

    requestAnimationFrame(rain);
}

window.addEventListener("resize", onResize);

rain();
