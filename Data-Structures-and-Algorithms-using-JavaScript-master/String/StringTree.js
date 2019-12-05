function StringTree() {
    this.root = null;

    function Node() {
        this.count = 0;
        this.lChild = null;
        this.rChild = null;
    }

    StringTree.Node = Node
}

StringTree.prototype.print = function() {
    this.printUtil(this.root);
};

StringTree.prototype.printUtil = function(curr) {
    if (curr != null) {
        console.log(" value is ::" + curr.value);
        console.log(" count is :: " + curr.count);
        this.printUtil(curr.lChild);
        this.printUtil(curr.rChild);
    }
};

StringTree.prototype.insert = function(value) {
    this.root = this.insertUtil(value, this.root);
};

StringTree.prototype.insertUtil = function(value, curr) {
    var compare;
    if (curr == null) {
        curr = new StringTree.Node(this);
        curr.value = value;
        curr.lChild = curr.rChild = null;
        curr.count = 1;
    }
    else {
        compare = curr.value.localeCompare(value);
        if (compare === 0)
            curr.count++;
        else if (compare === 1)
            curr.lChild = this.insertUtil(value, curr.lChild);
        else
            curr.rChild = this.insertUtil(value, curr.rChild);
    }
    return curr;
};

StringTree.prototype.freeTree = function() {
    this.root = null;
};

StringTree.prototype.find = function(value) {
    var ret = this.findUtil(this.root, value);
    console.log("Find " + value + " Return " + ret);
    return ret;
};

StringTree.prototype.findUtil = function(curr, value) {
    var compare;
    if (curr == null)
        return false;

    compare = curr.value.localeCompare(value);
    if (compare === 0)
        return true;
    else {
        if (compare === 1)
            return this.findUtil(curr.lChild, value);
        else
            return this.findUtil(curr.rChild, value);
    }
};

StringTree.prototype.frequency = function(value) {
    return this.frequencyUtil(this.root, value);
};

StringTree.prototype.frequencyUtil = function(curr, value) {
    var compare;
    if (curr == null)
        return 0;
    
    compare = curr.value.localeCompare(value);
    if (compare === 0)
        return curr.count;
    else {
        if (compare > 0)
            return this.frequencyUtil(curr.lChild, value);
        else
            return this.frequencyUtil(curr.rChild, value);
    }
};

var tt = new StringTree();
tt.insert("banana");
tt.insert("apple");
tt.insert("mango");

console.log("\nSearch results for apple, banana, grapes and mango :\n");
tt.find("apple");
tt.find("banana");
tt.find("banan");
tt.find("grapes");
tt.find("mango");