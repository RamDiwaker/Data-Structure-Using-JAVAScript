function Deque() {
    this.data = ([]);
}
Deque.prototype.size = function() {
    return this.data.length;
};
Deque.prototype.add = function(val) {
    this.data.push(val);
};

Deque.prototype.remove = function() {
    return this.data.shift();
};

Deque.prototype.peek = function() {
    return this.data[0]
};

Deque.prototype.peekLast = function() {
    return this.data[this.data.length - 1]
};

Deque.prototype.removeLast = function() {
    return this.data.pop()
};

function Queue() {
    this.frontIndex = 0;
    this.data = [];
}

Queue.prototype.add = function(value) {
    this.data.push(value);
};

Queue.prototype.remove = function() {
    var value = this.data[this.frontIndex];
    this.frontIndex++;
    if (this.data.length > 0 && this.frontIndex * 2 >= this.data.length) {
        this.data = this.data.slice(this.frontIndex);
        this.frontIndex = 0;
    }
    return value;
};

Queue.prototype.peek = function() {
    var value = this.data[this.frontIndex];
    return value;
};

Queue.prototype.isEmpty = function() {
    return (this.data.length - this.frontIndex) === 0;
};

Queue.prototype.size = function() {
    return (this.data.length - this.frontIndex);
};

Queue.prototype.peekLast = function() {
    return this.data[this.data.length - 1]
};

function CircularTour(arr, n) {
    var que = new Queue();
    var nextPump = 0;
    var prevPump;
    var count = 0;
    var petrol = 0;
    while (que.size() !== n) {
        while (petrol >= 0 && que.size() !== n) {
            que.add(nextPump);
            petrol += (arr[nextPump][0] - arr[nextPump][1]);
            nextPump = (nextPump + 1) % n;
        }
        while (petrol < 0 && que.size() > 0) {
            prevPump = que.remove();
            petrol -= (arr[prevPump][0] - arr[prevPump][1]);
        }
        count += 1;
        if (count === n)
            return -1;
    }
    if (petrol >= 0)
        return que.remove();
    else
        return -1;
};

main1 = function() {
    var tour = [[8, 6], [1, 4], [7, 6]];
    console.info("Circular Tour : " + CircularTour(tour, 3));
};

function convertXY(src, dst) {
    var que = new Queue();
    var arr = new Array(100);
    var steps = 0;
    var index = 0;
    var value;
    que.add(src);
    while (que.size() !== 0) {
        value = que.remove();
        arr[index++] = value;
        if (value === dst) {
            for (var i = 0; i < index; i++) {
                process.stdout.write(arr[i] + " ");
            }
            console.info("Steps countr :: " + steps);
            return steps;
        }
        steps++;
        if (value < dst)
            que.add(value * 2);
        else
            que.add(value - 1);
    }
    return -1;
};

main2 = function() {
    convertXY(2, 7);
};

function maxSlidingWindows(arr, size, k) {
    var que = new Deque();
    for (var i = 0; i < size; i++) {
        if (que.size() > 0 && que.peek() <= i - k)
            que.remove();
        while (que.size() > 0 && arr[que.peekLast()] <= arr[i]) {
            que.removeLast();
        };
        que.add(i);
        if (i >= (k - 1))
            process.stdout.write(arr[que.peek()] + " ");
    }
};

main3 = function() {
    var arr = [11, 2, 75, 92, 59, 90, 55];
    var k = 3;
    process.stdout.write("Max Sliding Windows : ")
    maxSlidingWindows(arr, 7, 3);
    console.log()
};

function minOfMaxSlidingWindows(arr, size, k) {
    var que = new Queue();
    var minVal = 999999;
    for (var i = 0; i < size; i++) {
        if (que.size() > 0 && que.peek() <= i - k)
            que.remove();
        while (que.size() > 0 && arr[que.peekLast()] <= arr[i]) {
            que.remove();
        };
        que.add(i);
        if (i >= (k - 1) && minVal > arr[que.peek()])
            minVal = arr[que.peek()];
    }
    console.info("Min of max is :: " + minVal);
    return minVal;
};

main4 = function() {
    var arr = [11, 2, 75, 92, 59, 90, 55];
    var k = 3;
    minOfMaxSlidingWindows(arr, 7, 3);
};

function maxOfMinSlidingWindows(arr, size, k) {
    var que = new Queue();
    var maxVal = -999999;
    for (var i = 0; i < size; i++) {
        if (que.size() > 0 && que.peek() <= i - k)
            que.remove();
        while (que.size() > 0 && arr[que.peekLast()] >= arr[i]) {
            que.remove();
        };
        que.add(i);
        if (i >= (k - 1) && maxVal < arr[que.peek()])
            maxVal = arr[que.peek()];
    }
    console.info("Max of min is :: " + maxVal);
};

main5 = function() {
    var arr = [11, 2, 75, 92, 59, 90, 55];
    var k = 3;
    maxOfMinSlidingWindows(arr, 7, 3);
};

function firstNegSlidingWindows(arr, size, k) {
    var que = new Queue();
    for (var i = 0; i < size; i++) {
        if (que.size() > 0 && que.peek() <= i - k)
            que.remove();
        if (arr[i] < 0)
            que.add(i);
        if (i >= (k - 1)) {
            if (que.size() > 0)
                process.stdout.write(arr[que.peek()] + " ");
            else
                process.stdout.write("NAN ");
        }
    }
};

main6 = function() {
    var arr = [3, -2, -6, 10, -14, 50, 14, 21, 11, -2, -11, 2, 3];
    var k = 3;
    firstNegSlidingWindows(arr, 13, 3);
}

main = function() {
    main1()
    main2()
    main3()
    main4()
    main5()
    main6()
};

main();