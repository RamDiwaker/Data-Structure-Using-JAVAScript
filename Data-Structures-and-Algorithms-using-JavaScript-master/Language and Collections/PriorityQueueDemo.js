function PriorityQueue(array, cmp) {
    this.comp = (typeof cmp === 'function' && cmp != null) ? cmp : defaultCmp;

    if (array != null && array instanceof Array) {
        this.length = array.length;
        this.arr = [0].concat(array);
        for (var i = Math.floor(this.length / 2); i > 0; i--) {
            this.proclateDown(i);
        }
    }
    else if (array === undefined || array === null) {
        this.length = 0;
        this.arr = [0];
    }
    else
        throw new Error('Invalid arguments');
}

PriorityQueue.prototype.proclateDown = function(position) {
    var lChild = 2 * position;
    var rChild = lChild + 1;
    var small = -1;
    var temp;
    if (lChild <= this.length) {
        small = lChild;
    }
    if (rChild <= this.length && this.comp(this.arr[rChild], this.arr[lChild]) < 0) {
        small = rChild;
    }
    if (small !== -1 && this.comp(this.arr[small], this.arr[position]) < 0) {
        temp = this.arr[position];
        this.arr[position] = this.arr[small];
        this.arr[small] = temp;
        this.proclateDown(small);
    }
};

PriorityQueue.prototype.proclateUp = function(position) {
    var parent = Math.floor(position / 2);
    var temp;
    if (parent === 0) {
        return;
    }
    if (this.comp(this.arr[parent], this.arr[position]) < 0) {
        temp = this.arr[position];
        this.arr[position] = this.arr[parent];
        this.arr[parent] = temp;
        this.proclateUp(parent);
    }
};

PriorityQueue.prototype.add = function(value) {
    this.length++;
    this.arr[this.length] = value;
    this.proclateUp(this.length);
};

PriorityQueue.prototype.remove = function() {
    if (this.isEmpty()) {
        throw new Error('Queue Empty');
    }
    var value = this.arr[1];
    this.arr[1] = this.arr[this.length];
    this.length--;
    this.proclateDown(1);
    return value;
};

PriorityQueue.prototype.print = function() {
    for (var i = 1; i <= this.length; i++) {
        console.log(" " + this.arr[i]);
    }
};

PriorityQueue.prototype.isEmpty = function() {
    return (this.length === 0);
};

PriorityQueue.prototype.size = function() {
    return this.length;
};

PriorityQueue.prototype.peek = function() {
    if (this.isEmpty()) {
        throw new Error('Queue Empty');
    }
    return this.arr[1];
};
