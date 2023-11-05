function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getDistance = function(p2) {
    return Math.sqrt(Math.pow((p2.y - this.y), 2) + Math.pow((p2.x - this.x), 2));
}

function Rectangle(x, y, a, b) {
    Point.call(this, x, y);
    this.a = a;
    this.b = b;
}

Rectangle.prototype = Object.create(Point.prototype);

Rectangle.prototype.getPerimeter = function() {
    var P = 2 * (this.a + this.b);
    return P;
}

Rectangle.prototype.getArea = function() {
    var S = this.a * this.b;
    return S;
}

Rectangle.prototype.getLengthOfDiagonals = function() {
    return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
}

Rectangle.prototype.getBiggestCircle = function() {
    var diags = this.getLengthOfDiagonals();
    return new Circle(this.x + a/2, this.y + b/2, diags/2);
}