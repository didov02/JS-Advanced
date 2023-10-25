function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getDistance = function(p2) {
    return Math.sqrt(Math.pow((p2.y - this.y), 2) + Math.pow((p2.x - this.x), 2));
}

function Circle(x, y, r) {
    Point.call(this, x, y);
    this.r = r;
}

Circle.prototype = Object.create(Point.prototype);

Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.r;
}

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.r,2);
}

Circle.prototype.intersects = function(secondCircle) {
    var distance = this.getDistance(secondCircle);

    return distance <= this.r + secondCircle.r;
}

var c1 = new Circle(1, 2, 3);
var c2 = new Circle(4, 5, 6);

if(c1.intersects(c2)) {
    console.log("First circle intersects second circle.")
} else {
    console.log("First circle doesn't intersects second circle.")
}
