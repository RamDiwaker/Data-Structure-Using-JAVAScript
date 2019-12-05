HashTable.EMPTY_VALUE = -1;
HashTable.DELETED_VALUE = -2;
HashTable.FILLED_VALUE = 0;

function HashTable(tSize, cmp, hashFun) {
    if (cmp === undefined || cmp === null)
        cmp = this.DefaultCompare;
    
    this.comp = cmp;

    if (hashFun === undefined || hashFun === null)
        hashFun = this.DefaultHashFun;
    
    this.HashFun = hashFun;
    
    this.tableSize = tSize;
    this.KeyArr = new Array(tSize + 1);
    this.DataArr = new Array(tSize + 1);
    this.FlagArr = new Array(tSize + 1).fill(HashTable.EMPTY_VALUE);
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

    var hashValue = this.ComputeHash(key);
    for (var i = 0; i < this.tableSize; i++) {
        if ((this.FlagArr[hashValue] === HashTable.EMPTY_VALUE) || 
            (this.FlagArr[hashValue] === HashTable.DELETED_VALUE))
        {
            this.DataArr[hashValue] = value;
            this.KeyArr[hashValue] = key;
            this.FlagArr[hashValue] = HashTable.FILLED_VALUE;
            return true;
        } 
        else if (this.FlagArr[hashValue] === HashTable.FILLED_VALUE && 
            this.KeyArr[hashValue] === key) 
        {
            this.DataArr[hashValue] = value;
            return true;
        }

        hashValue += this.resolverFun(i);
        hashValue %= this.tableSize;
    }
    return false;
};

HashTable.prototype.find = function(key) {
    if (key === undefined || key === null)
        return false;

    var hashValue = this.ComputeHash(key);
    for (var i = 0; i < this.tableSize; i++) {
        if (this.FlagArr[hashValue] === HashTable.EMPTY_VALUE) {
            return false;
        }
        if (this.FlagArr[hashValue] === HashTable.FILLED_VALUE
            && this.KeyArr[hashValue] === key) {
            return true;
        }
        hashValue += this.resolverFun(i);
        hashValue %= this.tableSize;
    }
    return false;
};

HashTable.prototype.get = function(key) {
    if (key === undefined || key === null)
        return false;

    var hashValue = this.ComputeHash(key);
    for (var i = 0; i < this.tableSize; i++) {
        if (this.FlagArr[hashValue] === HashTable.EMPTY_VALUE) {
            return 0;
        }
        if (this.FlagArr[hashValue] === HashTable.FILLED_VALUE
            && this.KeyArr[hashValue] === key) {
            return this.DataArr[hashValue];
        }
        hashValue += this.resolverFun(i);
        hashValue %= this.tableSize;
    }
    return 0;
};

HashTable.prototype.delete = function(key) {
    if (key === undefined || key === null)
        return false;

    var hashValue = this.ComputeHash(key);
    for (var i = 0; i < this.tableSize; i++) {
        if (this.FlagArr[hashValue] === HashTable.EMPTY_VALUE) {
            return false;
        }
        if (this.FlagArr[hashValue] === HashTable.FILLED_VALUE
            && this.KeyArr[hashValue] === key) {
            this.FlagArr[hashValue] = HashTable.DELETED_VALUE;
            return true;
        }
        hashValue += this.resolverFun(i);
        hashValue %= this.tableSize;
    }
    return false;
};

HashTable.prototype.print = function() {
    for (var i = 0; i < this.tableSize; i++) {
        if (this.FlagArr[i] === HashTable.FILLED_VALUE) {
            console.log("Node at index [" + i + " ] :: " + this.DataArr[i]);
        }
    }
};

var ht = new HashTable(1000);
ht.add(1);
ht.add(2, 10);
ht.add(3);
ht.print();
ht.find(2);
console.log(ht.get(2))
console.info(ht.delete(1));
console.info(ht.delete(4));
ht.print();