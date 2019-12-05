function CountMap() {
    this.hm = new Map();
}

CountMap.prototype.insert = function(key, ) {
    if (this.hm.has(key)) {
        var cnt = this.hm.get(key);
        this.hm.set(key, cnt + 1);
    } else {
        this.hm.set(key, 1);
    }
};

CountMap.prototype.remove = function(key) {
    if (this.hm.has(key)) {
        if (this.hm.get(key) === 1)
            this.hm.delete(key);
        else {
            var cnt = this.hm.get(key);
            this.hm.set(key, cnt - 1);
        }
    }
};

CountMap.prototype.get = function(key) {
    if (this.hm.has(key))
        return this.hm.get(key);
    return 0;
};

CountMap.prototype.find = function(key) {
    return this.hm.has(key);
};

CountMap.prototype.size = function(key) {
    return this.hm.size;
};

isAnagram = function(str1, str2) {
    var size1 = str1.length;
    var size2 = str2.length;
    if (size1 !== size2)
        return false;

    var cm = new CountMap();
    for (var index = 0; index < str1.length; index++) {
        var ch = str1[index];
        cm.insert(ch);
    }
    for (var index = 0; index < str2.length; index++) {
        var ch = str2[index];
        cm.remove(ch);
    }
    return (cm.size() === 0);
};

removeDuplicate = function(str) {
    var str2 = ""
    var hs = new Set();
    for (var ind = 0; ind < str.length; ind++) {
        var ch = str[ind];
        if (hs.has(ch.charCodeAt(0)) === false) {
            str2 += ch;
            hs.add(ch.charCodeAt(0));
        }
    }
    return str2;
};

findMissing = function(arr, start, end) {
    var hs = new Set();
    for (var index = 0; index < arr.length; index++) {
        hs.add(arr[index]);
    }
    for (var curr = start; curr <= end; curr++) {
        if (hs.has(curr) === false)
            return curr;
    }
    return -1;
};

printRepeating = function(arr) {
    var hs = new Set();
    console.log("Repeating elements are:");
    for (var insert = 0; insert < arr.length; insert++) {
        var val = arr[insert];

        if (hs.has(val))
            console.log(val);
        else
            hs.add(val);
    }
};

printFirstRepeating = function(arr) {
    var size = arr.length;
    var hs = new CountMap();
    for (var i = 0; i < size; i++) {
        hs.insert(arr[i]);
    }
 for (var i = 0; i < size; i++) {
        hs.remove(arr[i]);
        if (hs.find(arr[i])) {
            console.log("First Repeating number is : " + arr[i]);
            return;
        }
    }
};

hornerHash = function(key, tableSize) {
    var size = key.length;
    var h = 0;
    for (var i = 0;  i < size; i++) {
        h = (32 * h + key[i]) % tableSize;
    }
    return h;
};


main = function() {
    var first = "hello";
    var second = "elloh";
    var third = "world";
    console.info("isAnagram : " + isAnagram(first, second));
    console.info("isAnagram : " + isAnagram(first, third));
    console.info(removeDuplicate(first));
    var arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    console.info(findMissing(arr, 1, 10));
    var arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 1];
    printRepeating(arr1);
    printFirstRepeating(arr1);
};


main();