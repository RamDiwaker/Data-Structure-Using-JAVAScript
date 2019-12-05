function CountMap() {
    this.hm = new Map();
}

CountMap.prototype.insert = function (key,) {
    if (this.hm.has(key)) {
        var cnt = this.hm.get(key);
        this.hm.set(key, cnt + 1);
    } else {
        this.hm.set(key, 1);
    }
};

CountMap.prototype.remove = function (key) {
    if (this.hm.has(key)) {
        if (this.hm.get(key) === 1)
            this.hm.delete(key);
        else {
            var cnt = this.hm.get(key);
            this.hm.set(key, cnt - 1);
        }
    }
};

CountMap.prototype.get = function (key) {
    if (this.hm.has(key))
        return this.hm.get(key);
    return 0;
};

CountMap.prototype.find = function (key) {
    return this.hm.has(key);
};

var cm = new CountMap();
cm.insert(2);
cm.insert(2);
cm.remove(2);
console.log("count is : " + cm.get(2));
cm.remove(2);
console.log("count is : " + cm.get(2));
console.log("count is : " + cm.get(3));