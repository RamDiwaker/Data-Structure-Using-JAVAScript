function less(x, y) {
    return (x - y) > 0;
};

function more(x, y) {
    return (y - x) > 0;
};

function PriorityQueue(array, cmp) {
    this.comp = (typeof cmp === 'function') ? cmp : less;

    if (array != null && array instanceof Array) {
        this.size = array.length;
        this.arr = array;
        for (var i = Math.floor(this.size / 2); i >= 0; i--) {
            this.proclateDown(i);
        }
    }
    else if (array === undefined || array === null) {
        this.size = 0;
        this.arr = [];
    }
    else
        throw new Error('invalid arguments');
}

PriorityQueue.prototype.proclateDown = function(parent) {
    var lChild = 2 * parent + 1;
    var rChild = lChild + 1;
    var child = -1;
    var temp;
    if (lChild <= this.size) {
        child = lChild;
    }
    if (rChild <= this.size && this.comp(this.arr[lChild], this.arr[rChild])) {
        child = rChild;
    }
    if (child !== -1 && this.comp(this.arr[parent], this.arr[child])) {
        temp = this.arr[parent];
        this.arr[parent] = this.arr[child];
        this.arr[child] = temp;
        this.proclateDown(child);
    }
};

PriorityQueue.prototype.proclateUp = function(child) {
    var parent = Math.floor((child - 1) / 2);
    if (parent < 0) {
        return;
    }
    if (this.comp(this.arr[parent], this.arr[child])) {
        var temp = this.arr[child];
        this.arr[child] = this.arr[parent];
        this.arr[parent] = temp;
        this.proclateUp(parent);
    }
};

PriorityQueue.prototype.add = function(value) {
    this.arr[this.size] = value;
    this.size++;
    this.proclateUp(this.size - 1);
};

PriorityQueue.prototype.remove = function() {
    if (this.isEmpty()) {
        throw new Error("IllegalStateException");
    }
    var value = this.arr[0];
    this.arr[0] = this.arr[this.size - 1];
    this.size--;
    this.proclateDown(0);
    return value;
};

PriorityQueue.prototype.print = function() {
    console.log(this.arr);
};

PriorityQueue.prototype.isEmpty = function() {
    return (this.size === 0);
};

PriorityQueue.prototype.length = function() {
    return this.size;
};

PriorityQueue.prototype.peek = function() {
    if (this.isEmpty()) {
        throw new Error("IllegalStateException");
    }
    return this.arr[0]
};

PriorityQueue.HeapSort = function(array, cmp) {
    var hp = new PriorityQueue(array, cmp);
    for (var i = 0; i < array.length; i++) {
        array[array.length - i - 1] = hp.remove();
    }
};

function isMinHeap(arr) {
    var size = arr.length;
    var mid = Math.floor((size - 2) / 2);

    for (i = 0; i <= mid; i++) {
        if (2 * i + 1 < size) {
            if (arr[i] > arr[2 * i + 1])
                return false;
        }
        if (2 * i + 2 < size) {
            if (arr[i] > arr[2 * i + 2])
                return false;
        }
    }
    return true;
}


function isMaxHeap(arr) {
    var size = arr.length;
    var mid = Math.floor((size - 2) / 2);

    for (i = 0; i <= mid; i++) {
        if (2 * i + 1 < size && arr[i] < arr[2 * i + 1])
            return false;

        if (2 * i + 2 < size && arr[i] < arr[2 * i + 2])
            return false;
    }
    return true;
}


main1 = function() {
    var a = [1, 9, 6, 7, 8, 0, 2, 4, 5, 3];
    var hp = new PriorityQueue(a); // Min Heap
    hp.print();

    var b = [1, 9, 6, 7, 8, 0, 2, 4, 5, 3];
    PriorityQueue.HeapSort(b, more); // Increasing Order
    console.log(b);

    var c = [1, 9, 6, 7, 8, 0, 2, 4, 5, 3];
    var hp2 = new PriorityQueue(b, more); // Max Heap
    hp2.print();
};

KthSmallest = function(arr, size, k) {
    arr = arr.sort();
    return arr[k - 1];
};

KthSmallest2 = function(arr, size, k) {
    var value = 0;
    var pq = new PriorityQueue(arr);
    var i = 0;
    while (i < size && i < k) {
        value = pq.remove();
        i += 1;
    }
    return value;
};

main2 = function() {
    var arr = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info("Kth Smallest :: " + KthSmallest(arr, arr.length, 3));
    var arr2 = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info("Kth Smallest :: " + KthSmallest2(arr2, arr2.length, 3));
    var arr3 = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info("isMaxHeap :: " + isMaxHeap(arr3, arr3.length));
    var arr4 = [8, 7, 6, 5, 7, 5, 2, 1];
    arr4.sort();
    console.info("isMinHeap :: " + isMinHeap(arr4, arr4.length));
};

KSmallestProduct = function(arr, size, k) {
    arr = arr.sort();
    var product = 1;
    for (var i = 0; i < k; i++) {
        product *= arr[i];
    }
    return product;
};

swap = function(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

QuickSelectUtil = function(arr, lower, upper, k) {
    if (upper <= lower)
        return;
    var pivot = arr[lower];
    var start = lower;
    var stop = upper;
    
    while (lower < upper) {
        while (lower < upper && arr[lower] <= pivot) {
            lower++;
        }
        while (lower <= upper && arr[upper] > pivot) {
            upper--;
        }
        if (lower < upper) {
            swap(arr, upper, lower);
        }
    }
    
    swap(arr, upper, start);
    if (k < upper)
        QuickSelectUtil(arr, start, upper - 1, k);
    if (k > upper)
        QuickSelectUtil(arr, upper + 1, stop, k);
};

KSmallestProduct3 = function(arr, size, k) {
    QuickSelectUtil(arr, 0, size - 1, k);
    var product = 1;
    for (var i = 0; i < k; i++) {
        product *= arr[i];
    }
    return product;
};

KSmallestProduct2 = function(arr, size, k) {
    var pq = new PriorityQueue(arr);
    var i = 0;
    var product = 1;
    while (i < size && i < k) {
        product *= pq.remove();
        i += 1;
    }
    return product;
};

main3 = function() {
    var arr = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info("Kth Smallest product:: " + KSmallestProduct(arr, 8, 3));
    var arr2 = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info("Kth Smallest product:: " + KSmallestProduct2(arr2, 8, 3));
    var arr3 = [8, 7, 6, 5, 7, 5, 2, 1];
    console.info("Kth Smallest product:: " + KSmallestProduct3(arr3, 8, 3));
};

PrintLargerHalf = function(arr, size) {
    arr = arr.sort();
    for (var i = Math.floor(size / 2); i < size; i++) {
        process.stdout.write(arr[i] + " ");
    }
    console.info();
};

PrintLargerHalf2 = function(arr, size) {
    var pq = new PriorityQueue(arr);
    for (var i = 0; i < (size / 2); i++) {
        pq.remove();
    }
    while (pq.isEmpty() === false){
            process.stdout.write(pq.remove() + " ");
    }
};

PrintLargerHalf3 = function(arr, size) {
    QuickSelectUtil(arr, 0, size - 1, (size / 2));
    for (var i = (size / 2); i < size; i++) {
        process.stdout.write(arr[i] + " ");
    }
    console.info();
};

main4 = function() {
    var arr = [8, 7, 6, 5, 7, 5, 2, 1];
    PrintLargerHalf(arr, 8);
    var arr2 = [8, 7, 6, 5, 7, 5, 2, 1];
    PrintLargerHalf2(arr2, 8);
    var arr3 = [8, 7, 6, 5, 7, 5, 2, 1];
    PrintLargerHalf3(arr3, 8);
};

sortK = function(arr, size, k) {
    var pq = new PriorityQueue();
    var i = 0;
    for (i = 0; i < size; i++) {
        pq.add(arr[i]);
    };
    var output = new Array(size);
    var index = 0;
    for (i = k; i < size; i++) {
        output[index++] = pq.remove();
        pq.add(arr[i]);
    }

    while (pq.isEmpty() === false) {
        output[index++] = pq.remove();
    };
    for (i = 0; i < size; i++) {
        arr[i] = output[i];
    }
    console.info(output);
};

main5 = function() {
    var k = 3;
    var arr = [1, 5, 4, 10, 50, 9];
    var size = arr.length;
    sortK(arr, size, k);
};

ChotaBhim = function(cups, size) {
    var time = 60;
    var total = 0;
    var index;
    var temp;
    cups.sort();
    
    while (time > 0) {
        total += cups[0];
        cups[0] = Math.ceil(cups[0] / 2.0);
        index = 0;
        temp = cups[0];
        while (index < size - 1 && temp < cups[index + 1]) {
            cups[index] = cups[index + 1];
            index += 1;
        }
        cups[index] = temp;
        time -= 1;
    }
    console.info("Total :" + total);
    return total;
};

ChotaBhim2 = function(cups, size) {
    var time = 60;
    var total = 0;
    var i;
    var temp;
    cups.sort();

    while (time > 0) {
        total += cups[0];
        cups[0] = Math.ceil(cups[0] / 2.0);
        i = 0;
        while (i < size - 1) {
            if (cups[i] > cups[i + 1])
                break;
            temp = cups[i];
            cups[i] = cups[i + 1];
            cups[i + 1] = temp;
            i += 1;
        }
        time -= 1;
    }
    console.info("Total : " + total);
    return total;
};

ChotaBhim3 = function(cups, size) {
    var time = 60;
    var total = 0;
    var value;
    var pq = new PriorityQueue(cups, more);

    while (time > 0) {
        value = pq.remove();
        total += value;
        value = (Math.ceil(value / 2.0));
        pq.add(value);
        time -= 1;
    }
    console.info("Total : " + total);
    return total;
};

JoinRopes = function(ropes, size) {
    ropes.sort().reverse();
    var total = 0;
    var value = 0;
    var temp;
    var index;
    var length = size;

    while (length >= 2) {
        value = ropes[length - 1] + ropes[length - 2];
        total += value;
        index = length - 2;
        while (index > 0 && ropes[index - 1] < value) {
            ropes[index] = ropes[index - 1];
            index -= 1;
        }
        ropes[index] = value;
        length--;
    }
    console.info("Total : " + total);
    return total;
};

JoinRopes2 = function(ropes, size) {
    var pq = new PriorityQueue(ropes);
    var total = 0;
    var value = 0;

    while (pq.length() > 1) {
        value = pq.remove();
        value += pq.remove();
        pq.add(value);
        total += value;
    }
    console.info("Total : " + total);
    return total;
};

main6 = function() {
    var cups = [2, 1, 7, 4, 2];
    ChotaBhim(cups, cups.length);
    var cups2 = [2, 1, 7, 4, 2];
    ChotaBhim2(cups2, cups.length);
    var cups3 = [2, 1, 7, 4, 2];
    ChotaBhim3(cups3, cups.length);
    var ropes = [2, 1, 7, 4, 2];
    JoinRopes(ropes, ropes.length);
    var rope2 = [2, 1, 7, 4, 2];
    JoinRopes2(rope2, rope2.length);
};

function MedianHeap() {
    this.minHeap = new PriorityQueue([], less);
    this.maxHeap = new PriorityQueue([], more);
}

MedianHeap.prototype.insert = function (value) {
    if (this.maxHeap.isEmpty() === true || this.maxHeap.peek() >= value) {
        this.maxHeap.add(value);
    }
    else {
        this.minHeap.add(value);
    }
    if (this.maxHeap.length() > this.minHeap.length() + 1) {
        value = this.maxHeap.remove();
        this.minHeap.add(value);
    }
    if (this.minHeap.length() > this.maxHeap.length() + 1) {
        value = this.minHeap.remove();
        this.maxHeap.add(value);
    }
};

MedianHeap.prototype.getMedian = function () {
    if (this.maxHeap.isEmpty() === true && this.minHeap.isEmpty() === true)
        return MAX_VALUE;
    if (this.maxHeap.length() === this.minHeap.length())
        return ((this.maxHeap.peek() + this.minHeap.peek()) / 2 | 0);
    else if (this.maxHeap.length() > this.minHeap.length())
        return this.maxHeap.peek();
    else
        return this.minHeap.peek();
};

main7 = function (args) {
    var arr = [1, 9, 2, 8, 3, 7, 4, 6, 5, 1, 9, 2, 8, 3, 7, 4, 6, 5, 10, 10];
    var hp = new MedianHeap();
    for (var i = 0; i < 20; i++) {
        hp.insert(arr[i]);
        console.log("Median after insertion of " + arr[i] + " is  " + hp.getMedian());
    }
};

main = function() {
    main2()
    main3()
    main4()
    main5()
    main6()
    main7()
}

main();