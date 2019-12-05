

function CircularLinkedList() {
    this.length = 0;
    this.tail = null;

    function Node(v, n) {
        this.value = v;
        this.next = n;
    }
    CircularLinkedList.Node = Node
}

CircularLinkedList.prototype.size = function() {
    return this.length;
};

CircularLinkedList.prototype.isEmpty = function() {
    return this.length === 0;
};

CircularLinkedList.prototype.peek = function() {
    if (this.isEmpty())
        throw new Error("EmptyListException");
    return this.tail.next.value;
};

CircularLinkedList.prototype.addTail = function(value) {
    var temp = new CircularLinkedList.Node(value, null);
    if (this.isEmpty()) {
        this.tail = temp;
        temp.next = temp;
    }
    else {
        temp.next = this.tail.next;
        this.tail.next = temp;
        this.tail = temp;
    }
    this.length++;
};

CircularLinkedList.prototype.addHead = function(value) {
    var temp = new CircularLinkedList.Node(value, null);
    if (this.isEmpty()) {
        this.tail = temp;
        temp.next = temp;
    }
    else {
        temp.next = this.tail.next;
        this.tail.next = temp;
    }
    this.length++;
};

CircularLinkedList.prototype.removeHead = function() {
    if (this.isEmpty()) {
        throw new Error("EmptyListException");
    }

    var value = this.tail.next.value;
    if (this.tail === this.tail.next)
        this.tail = null;
    else
        this.tail.next = this.tail.next.next;
    this.length--;
    return value;
};

CircularLinkedList.prototype.removeNode = function(key) {
    if (this.isEmpty()) {
        return false;
    }

    var prev = this.tail;
    var curr = this.tail.next;
    var head = this.tail.next;
    if (curr.value === key) {
        if (curr === curr.next)
            this.tail = null;
        else
            this.tail.next = this.tail.next.next;
        return true;
    }
    prev = curr;
    curr = curr.next;
    while (curr !== head) {
        if (curr.value === key) {
            if (curr === this.tail)
                this.tail = prev;
            prev.next = curr.next;
            return true;
        }
        prev = curr;
        curr = curr.next;
    };
    return false;
};

CircularLinkedList.prototype.copyListReversed = function() {
    var cl = new CircularLinkedList();
    var curr = this.tail.next;
    var head = curr;

    if (curr != null) {
        cl.addHead(curr.value);
        curr = curr.next;
    }
    while (curr !== head) {
        cl.addHead(curr.value);
        curr = curr.next;
    };
    return cl;
};

CircularLinkedList.prototype.copyList = function() {
    var cl = new CircularLinkedList();
    var curr = this.tail.next;
    var head = curr;

    if (curr != null) {
        cl.addTail(curr.value);
        curr = curr.next;
    }
    while (curr !== head) {
        cl.addTail(curr.value);
        curr = curr.next;
    };
    return cl;
};

CircularLinkedList.prototype.find = function(data) {
    var temp = this.tail;
    for (var i = 0; i < this.length; i++) {
        if (temp.value === data)
            return true;
        temp = temp.next;
    }
    return false;
};

CircularLinkedList.prototype.freeList = function() {
    this.tail = null;
    this.length = 0;
};

CircularLinkedList.prototype.print = function() {
    if (this.isEmpty()) {
        return;
    }
    var temp = this.tail.next;
    while (temp !== this.tail) {
        process.stdout.write(temp.value + " ");
        temp = temp.next;
    };
    process.stdout.write(temp.value + "\n");
};

CircularLinkedList.prototype.isPresent = function(data) {
    var temp = this.tail;
    var size = this.size();
    for (var i = 0; i < size; i++) {
        if (temp.value === data)
            return true;
        temp = temp.next;
    }
    return false;
}


main = function(args) {
    var ll = new CircularLinkedList();
    ll.addHead(1);
    ll.addHead(2);
    ll.addHead(3);
    ll.print();
};

main(null);