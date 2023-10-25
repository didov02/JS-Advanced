function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getDistance = function(p2) {
    return Math.sqrt(Math.pow((p2.y - this.y), 2) + Math.pow((p2.x - this.x), 2));
}

var p1 = new Point(1,2);
var p2 = new Point(3,4);
console.log(p1.getDistance(p2));