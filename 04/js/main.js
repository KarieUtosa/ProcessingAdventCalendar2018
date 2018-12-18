/// <reference path="p5.global-mode.d.ts" />
var accel; // 加速度の値を格納する
var shakedAccel; // 端末を振ったときの加速度
function setup() {
    accel = new p5.Vector();
    shakedAccel = new p5.Vector();
    // ジャイロセンサの値を取得する
    window.addEventListener("devicemotion", function (event) {
        accel.x = event.acceleration.x;
        accel.y = event.acceleration.y;
        accel.z = event.acceleration.z;
        if (accel.mag() > 20) {
            this.console.log(accel);
            shakedAccel.set(accel);
        }
    });
    createCanvas(windowWidth, windowHeight);
    background(0);
    colorMode(HSB, 360, 100, 100, 100);
}
function draw() {
    blendMode(BLEND);
    background(0, 5);
    blendMode(ADD);
    translate(windowWidth / 2, windowHeight / 2);
    stroke(shakedAccel.z, 85, 10);
    strokeWeight(3);
    // ジャイロセンサの値を元せ線の位置を指定する
    var startPos = new p5.Vector(0, 0);
    var endPos = new p5.Vector(shakedAccel.y / 90 * width, -shakedAccel.x / 90 * height);
    for (var i = 0; i < 25; i++) {
        var startRandVec = p5.Vector.random2D().mult(random(0, 10));
        var endRandVec = p5.Vector.random2D().mult(random(0, 10));
        line(startPos.x + startRandVec.x, startPos.y + startRandVec.y, endPos.x + endRandVec.x, endPos.y + endRandVec.y);
    }
}
//# sourceMappingURL=main.js.map