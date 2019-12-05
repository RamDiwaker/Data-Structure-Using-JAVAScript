function Stack(capacity) {
    if (capacity === undefined) { capacity = 1000; }
    this.top = -1;
    this.data = new Array(capacity);
}

Stack.prototype.size = function() {
    return (this.top + 1);
};

Stack.prototype.isEmpty = function() {
    return (this.top === -1);
};

Stack.prototype.push = function(value) {
    this.top++;
    this.data[this.top] = value;
};

Stack.prototype.top = function() {
    if (this.isEmpty()) {
        throw new Error("StackEmptyException");
    }
    return this.data[this.top];
};

Stack.prototype.pop = function() {
    if (this.isEmpty()) {
        throw new Error("StackEmptyException");
    }
    var topVal = this.data[this.top];
    this.top--;
    return topVal;
};

Stack.prototype.print = function() {
    for (var i = this.top; i >= 0; i--) {
        console.log(this.data[i]);
    }
};

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.print();
console.info(s.pop());
console.info(s.pop());