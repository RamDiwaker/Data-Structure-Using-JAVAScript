function Stack() {
    this.head = null;
    this.length = 0;

    function Node(v, n) {
        this.value = v;
        this.next = n;
    }

    Stack.Node = Node

}

Stack.prototype.size = function() {
    return this.length;
};

Stack.prototype.isEmpty = function() {
    return this.length === 0;
};

Stack.prototype.peek = function() {
    if (this.isEmpty()) {
        throw new Error("StackEmptyError");
    }
    return this.head.value;
};

Stack.prototype.push = function(value) {
    this.head = new Stack.Node(value, this.head);
    this.length++;
};

Stack.prototype.pop = function() {
    if (this.isEmpty()) {
        throw new Error("StackEmptyError");
    }
    var value = this.head.value;
    this.head = this.head.next;
    this.length--;
    return value;
};

Stack.prototype.insertAtBottom = function(value) {
    if (this.isEmpty()) {
        this.push(value);
    }
    else {
        var temp = this.pop();
        this.insertAtBottom(value);
        this.push(temp);
    }
};

Stack.prototype.print = function() {
    var temp = this.head;
    while ((temp != null)) {
        console.log(temp.value);
        temp = temp.next;
    };
};

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.print();
console.info(s.pop());
console.info(s.pop());