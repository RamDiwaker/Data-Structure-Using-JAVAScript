function Trie() {
    function Node(c) {
        this.child = new Array(Trie.CharCount).fill(null);
        this.isLastChar = false;
        this.ch = c;
    }

    Trie.Node = Node;
    Trie.CharCount = 26;
    this.root = new Trie.Node(' ');
}

Trie.prototype.Insert = function(str) {
    if (str == null) {
        return this.root;
    }
    var temp = str.toString().toLowerCase();
    return this.InsertUtil(this.root, temp, 0);
};

Trie.prototype.InsertUtil = function(curr, str, index) {
    if (curr == null) {
        curr = new Trie.Node(this, str[index - 1]);
    }
    if (str.length === index) {
        curr.isLastChar = true;
    }
    else {
        curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)] = this.InsertUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
    }
    return curr;
};

Trie.prototype.Remove = function(str) {
    if (str == null) {
        return;
    }
    str = str.toLowerCase();
    this.RemoveUtil(this.root, str, 0);
};

Trie.prototype.RemoveUtil = function(curr, str, index) {
    if (curr == null) {
        return;
    }
    if (str.length === index) {
        if (curr.isLastChar) {
            curr.isLastChar = false;
        }
        return;
    }
    this.RemoveUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
};

Trie.prototype.Find = function(str) {
    if (str == null) {
        return false;
    }
    str = str.toLowerCase();
    return this.FindUtil(this.root, str, 0);
};

Trie.prototype.FindUtil = function(curr, str, index) {
    if (curr == null) {
        return false;
    }
    if (str.length === index) {
        return curr.isLastChar;
    }
    return this.FindUtil(curr.child[str[index].charCodeAt(0) - 'a'.charCodeAt(0)], str, index + 1);
};

var t = new Trie();
var a = "hemant";
var b = "heman";
var c = "hemantjain";
var d = "jain";
t.Insert(a);
t.Insert(d);
console.log(t.Find(a));
t.Remove(a);
t.Remove(d);
console.log(t.Find(a));
console.log(t.Find(c));
console.log(t.Find(d));