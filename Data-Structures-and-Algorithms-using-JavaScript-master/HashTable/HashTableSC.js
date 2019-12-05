function HashTable(cmp, hashFun) {
    if (cmp === undefined || cmp === null)
        cmp = this.DefaultCompare;
    
    this.comp = cmp;  

    if (hashFun === undefined || hashFun === null)
        hashFun = this.DefaultHashFun;

    this.HashFun = hashFun;

    this.tableSize = 512;
    this.listArray = new Array(this.tableSize).fill(null);

    function Node(k, v, n) {
        this.key = k;
        this.value = v;
        this.next = n;
    }
    
    HashTable.Node = Node;
}

HashTable.prototype.ComputeHash = function(key) {
    return this.HashFun(key) % this.tableSize;
};

HashTable.prototype.resolverFun = function(index) {
    return index;
};

HashTable.prototype.DefaultCompare = function(first, second) {
    return first - second;
}

HashTable.prototype.DefaultHashFun = function(key) {
    return key;
}

HashTable.prototype.add = function(key, value) {
    if (key === undefined || key === null)
        return false;

    if (value === undefined || value === null)
        value = key;

    var index = this.ComputeHash(key);
    this.listArray[index] = new HashTable.Node(key, value,
        this.listArray[index]);
};

HashTable.prototype.delete = function(key) {
    var index = this.ComputeHash(key);
    var nextNode;
    var head = this.listArray[index];
    if (head != null && head.key === key) {
        this.listArray[index] = head.next;
        return true;
    }

    while (head != null) {
        nextNode = head.next;
        if (nextNode != null && nextNode.key === key) {
            head.next = nextNode.next;
            return true;
        }
        else {
            head = nextNode;
        }
    };
    return false;
};

HashTable.prototype.print = function() {
    for (var i = 0; i < this.tableSize; i++) {
        var head = this.listArray[i];
        var data = ""

        while (head != null) {
            data += (head.value + " ")
            head = head.next;
        }

        if (data != "") {
            console.log("Index value :: " + i + " Data :: " + data);
        }
    }
};

HashTable.prototype.find = function(key) {
    var index = this.ComputeHash(key);
    var head = this.listArray[index];
    while (head != null) {
        if (head.key === key) {
            return true;
        }
        head = head.next;
    };
    return false;
};

HashTable.prototype.get = function(key) {
    var index = this.ComputeHash(key);
    var head = this.listArray[index];
    while (head != null) {
        if (head.key === key) {
            return head.value;
        }
        head = head.next;
    };
    return 0;
};


var ht = new HashTable();
for (var i = 1; i < 110; i++) {
    ht.add(i);
}
console.log("search 100 :: " + ht.find(100));
console.log("Value at key 100 :: " + ht.get(100));
console.log("Remove 100 :: " + ht.delete(100));
console.log("Search 100 :: " + ht.find(100));
console.log("Remove 100 :: " + ht.delete(100));

for (var i = 2; i < 190;) {
    ht.delete(i);
    i += 11
}
ht.print()