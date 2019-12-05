function min(a, b) {
    return a > b ? b : a;
};

function max(a, b) {
    return a < b ? b : a;
};

function swap(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function BinarySearch01(arr) {
    var size = arr.length;
    if (size === 0) {
        return 0;
    }
    return BinarySearch01Util(arr, 0, size - 1);
};

function BinarySearch01Util(arr, start, end) {
    if (end < start) {
        return -1;
    }
    var mid = Math.floor((start + end) / 2);
    if ("1" === arr[mid] && "0" === arr[mid - 1]) {
        return mid;
    }
    if ("0" === arr[mid]) {
        return BinarySearch01Util(arr, mid + 1, end);
    }
    else {
        return BinarySearch01Util(arr, start, mid - 1);
    }
};

function main18() {
    var first = "00000000111"
    console.log("BinarySearch01 index is :: " + BinarySearch01(first));
}

RotationMaxUtil = function(arr, start, end) {
    if (end <= start) {
        return arr[start];
    }
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1])
        return arr[mid];
    if (arr[start] <= arr[mid])
        return RotationMaxUtil(arr, mid + 1, end);
    else
        return RotationMaxUtil(arr, start, mid - 1);
};

RotationMax = function(arr, size) {
    return RotationMaxUtil(arr, 0, size - 1);
};

FindRotationMaxUtil = function(arr, start, end) {
    if (end <= start)
        return start;
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1])
        return mid;
    if (arr[start] <= arr[mid])
        return FindRotationMaxUtil(arr, mid + 1, end);
    else
        return FindRotationMaxUtil(arr, start, mid - 1);
};

FindRotationMax = function(arr, size) {
    return FindRotationMaxUtil(arr, 0, size - 1);
};

CountRotation = function(arr, size) {
    var maxIndex = FindRotationMaxUtil(arr, 0, size - 1);
    return (maxIndex + 1) % size;
};

function BinarySearchRotateArray(arr, key) {
    var size = arr.length;
    return BinarySearchRotateArrayUtil(arr, 0, size - 1, key);
};

function BinarySearchRotateArrayUtil(arr, start, end, key) {
    if (end < start) {
        return -1;
    }
    var mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
        return mid;
    }
    if (arr[mid] > arr[start]) {
        if (arr[start] <= key && key < arr[mid]) {
            return BinarySearchRotateArrayUtil(arr, start, mid - 1, key);
        }
        else {
            return BinarySearchRotateArrayUtil(arr, mid + 1, end, key);
        }
    }
    else {
        if (arr[mid] < key && key <= arr[end]) {
            return BinarySearchRotateArrayUtil(arr, mid + 1, end, key);
        }
        else {
            return BinarySearchRotateArrayUtil(arr, start, mid - 1, key);
        }
    }
};

function main19() {
    first = [7, 9, 10, 11, 3, 5, 7]
    console.log("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 8));
    console.log("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 7));
    console.log("BinarySearchRotateArray index is :: " + BinarySearchRotateArray(first, 6));
}

minAbsDiffAdjCircular = function(arr, size) {
    if (size < 2)
        return -1;
    var diff = 9999999;

    for (var i = 0; i < size; i++) {
        diff = Math.min(diff, Math.abs(arr[i] - arr[(i + 1) % size]));
    }
    return diff;
};

main666 = function(str) {
    var arr = [5, 29, 18, 51, 11];
    console.info(minAbsDiffAdjCircular(arr, arr.length));
};

swapch = function(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function transformArrayAB(str) {
    arr = str.split("");
    var size = str.length;
    var N = Math.floor(size / 2);
    for (var i = 1; i < N; i++) {
        for (var j = 0; j < i; j++) {
            swap(arr, N - i + 2 * j, N - i + 2 * j + 1);
        }
    }
    return arr.join("");
};

function main20() {
    first = "aaaabbbb"
    console.log(transformArrayAB(first));
}

function checkPermutation(array1, array2) {
    var size1 = array1.length;
    var size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }
    console.log(array1)
    array1.sort();
    array2.sort();
    console.log(array1)
    for (var i = 0; i < size1; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
};

function checkPermutation2(array1, array2) {
    var size1 = array1.length;
    var size2 = array2.length;
    if (size1 !== size2) {
        return false;
    }
    var ht = {};
    var i;
    for (i = 0; i < size1; i++) {
        if (array1[i] in ht) {
            ht[array1[i]] += 1
        } else {
            ht[array1[i]] = 1
        }
    }
    for (i = 0; i < size2; i++) {
        if (array2[i] in ht === false) {
            return false;
        } else {
            ht[array1[i]] -= 1
            if (ht[array1[i]] == 0) {
                delete ht[array2[i]]
            }
        }
    }
    return true;
};


main21 = function() {
    var first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5]
    var second = [1, 2, 4, 5, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3]

    console.log("checkPermutation " + checkPermutation(first, second))
    console.log("checkPermutation2 " + checkPermutation2(first, second))
};

function FindElementIn2DArray(arr, r, c, value) {
    var row = 0;
    var column = c - 1;
    while (row < r && column >= 0) {
        if (arr[row][column] === value) {
            return true;
        }
        else if (arr[row][column] > value) {
            column--;
        }
        else {
            row++;
        }
    };
    return false;
};

function main22() {
    var f = new Array(10);
    var count = 0;
    for (var i = 0; i < 10; i++) {
        f[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            f[i][j] = count++;
        }
    }

    console.log(FindElementIn2DArray(f, 10, 10, 21));
    console.log(FindElementIn2DArray(f, 10, 10, 121));
}

isAP = function(arr, size) {
    if (size <= 1)
        return true;
    arr.sort();
    var diff = arr[1] - arr[0];
    for (var i = 2; i < size; i++) {
        if (arr[i] - arr[i - 1] !== diff)
            return false;
    }
    return true;
};

isAP2 = function(arr, size) {
    var first = 9999999;
    var second = 9999999;
    var value;
    var diff;
    var hs = new Set();
    for (var i = 0; i < size; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        } else if (arr[i] < second)
            second = arr[i];
    }
    diff = second - first;

    for (var i = 0; i < size; i++) {
        if (hs.has(arr[i]))
            return false;
        hs.add(arr[i]);
    }

    for (var i = 0; i < size; i++) {
        value = first + i * diff;
        if (!hs.has(value))
            return false;
    }

    return true;
};

isAP3 = function(arr, size) {
    var first = 9999999;
    var second = 9999999;
    var count = new Array(size);
    var index = -1;
    for (var i = 0; i < size; i++) {
        if (arr[i] < first) {
            second = first;
            first = arr[i];
        }
        else if (arr[i] < second)
            second = arr[i];
    }
    var diff = second - first;
    for (var i = 0; i < size; i++) {
        index = ((arr[i] - first) / diff | 0);
    }
    if (index > size - 1 || count[index] !== 0)
        return false;
    count[index] = 1;
    for (var i = 0; i < size; i++) {
        if (count[i] !== 1)
            return false;
    }
    return true;
};

findBalancedPoint = function(arr, size) {
    var first = 0;
    var second = 0;
    for (var i = 1; i < size; i++) {
        second += arr[i];
    }
    for (var i = 0; i < size; i++) {
        if (first === second) {
            console.info(i);
            return i;
        }
        if (i < size - 1)
            first += arr[i];
        second -= arr[i + 1];
    }
    return -1;
};

main23 = function() {
    var arr = [-7, 1, 5, 2, -4, 3, 0];
    console.info(findBalancedPoint(arr, arr.length));
};

findFloor = function(arr, size, value) {
    var start = 0;
    var stop = size - 1;
    var mid;
    while (start <= stop) {
        mid = Math.floor((start + stop) / 2);
        if (arr[mid] === value || (arr[mid] < value && (mid === size - 1 || arr[mid + 1] > value)))
            return mid;
        else if (arr[mid] < value)
            start = mid + 1;
        else
            stop = mid - 1;
    }
    return -1;
};

findCeil = function(arr, size, value) {
    var start = 0;
    var stop = size - 1;
    var mid;
    while (start <= stop) {
        mid = Math.floor((start + stop) / 2);
        if (arr[mid] === value || (arr[mid] > value && (mid === 0 || arr[mid - 1] < value)))
            return mid;
        else if (arr[mid] < value)
            start = mid + 1;
        else
            stop = mid - 1;
    }
    return -1;
};

ClosestNumber = function(arr, size, num) {
    var start = 0;
    var stop = size - 1;
    var output = -1;
    var minDist = 9999;
    var mid;
    while (start <= stop) {
        mid = Math.floor((start + stop) / 2);
        if (minDist > Math.abs(arr[mid] - num)) {
            minDist = Math.abs(arr[mid] - num);
            output = arr[mid];
        }
        if (arr[mid] === num)
            break;
        else if (arr[mid] > num)
            stop = mid - 1;
        else
            start = mid + 1;
    }
    return output;
};

DuplicateKDistance = function(arr, size, k) {
    var hm = new Map();

    for (var i = 0; i < size; i++) {
        if (hm.has(arr[i]) && i - hm.get(arr[i]) <= k) {
            console.log("Value:" + arr[i] + " Index: " + hm.get(arr[i]) + " & " + i);
            return true;
        } else
            hm.set(arr[i], i);
    }
    return false;
};

main24 = function() {
    var arr = [1, 2, 3, 1, 4, 5];
    DuplicateKDistance(arr, arr.length, 3);
};

frequencyCounts = function(arr, size) {
    var index;
    for (var i = 0; i < size; i++) {
        while (arr[i] > 0) {
            index = arr[i] - 1;
            if (arr[index] > 0) {
                arr[i] = arr[index];
                arr[index] = -1;
            }
            else {
                arr[index] -= 1;
                arr[i] = 0;
            }
        }
    }
    for (var i = 0; i < size; i++) {
        console.info((i + 1) + Math.abs(arr[i]));
    }
};

KLargestElements = function(arrIn, size, k) {
    var arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = arrIn[i];
    }
    arr.sort();
    for (var i = 0; i < size; i++) {
        if (arrIn[i] >= arr[size - k]) {
            console.info(arrIn[i]);
            return arrIn[i];
        }
    }
    return -1;
};

QuickSelectUtil = function(arr, lower, upper, k) {
    if (upper <= lower)
        return;
    var pivot = arr[lower];
    var start = lower;
    var stop = upper;
    while (lower < upper) {
        while (arr[lower] <= pivot) {
            lower++;
        }
        while (arr[upper] > pivot) {
            {
                upper--;
            }
            if (lower < upper) {
                swap(arr, upper, lower);
            }
        }
    }
    swap(arr, upper, start);
    if (k < upper)
        QuickSelectUtil(arr, start, upper - 1, k);
    if (k > upper)
        QuickSelectUtil(arr, upper + 1, stop, k);
};

KLargestElements2 = function(arrIn, size, k) {
    var arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = arrIn[i];
    }
    QuickSelectUtil(arr, 0, size - 1, size - k);
    for (var i = 0; i < size; i++) {
        if (arrIn[i] >= arr[size - k]) {
            console.info(arrIn[i]);
            return arrIn[i];
        }
    }
    return -1;
};

FixPoint = function(arr, size) {
    for (var i = 0; i < size; i++) {
        if (arr[i] === i)
            return i;
    }
    return -1;
};

FixPoint2 = function(arr, size) {
    var low = 0;
    var high = size - 1;
    var mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === mid)
            return mid;
        else if (arr[mid] < mid)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return -1;
};

subArraySums = function(arr, size, value) {
    var first = 0;
    var second = 0;
    var sum = arr[first];
    while (second < size && first < size) {
        if (sum === value)
            console.info(first + second);
        if (sum < value) {
            second += 1;
            if (second < size)
                sum += arr[second];
        }
        else {
            sum -= arr[first];
            first += 1;
        }
    }
    return sum;
};

MaxConSub = function(arr, size) {
    var currMax = 0;
    var maximum = 0;
    for (var i = 0; i < size; i++) {
        currMax = Math.max(arr[i], currMax + arr[i]);
        if (currMax < 0)
            currMax = 0;
        if (maximum < currMax)
            maximum = currMax;
    }
    console.info(maximum);
    return maximum;
};

MaxConSubArr = function(A, sizeA, B, sizeB) {
    var currMax = 0;
    var maximum = 0;
    var hs = new Set();
    for (var i = 0; i < sizeB; i++)
        hs.add(B[i]);

    for (var i = 0; i < sizeA; i++)
        if (hs.has(A[i]))
            currMax = 0;
        else
            currMax = Math.max(A[i], currMax + A[i]);

    if (currMax < 0)
        currMax = 0;

    if (maximum < currMax)
        maximum = currMax;
    
    console.info(maximum);
    return maximum;
};

MaxConSubArr2 = function(A, sizeA, B, sizeB) {
    B.soret();
    var currMax = 0;
    var maximum = 0;
    for (var i = 0; i < sizeA; i++) {
        if (Binarysearch(B, sizeB, A[i]))
            currMax = 0;
        else {
            currMax = Math.max(A[i], currMax + A[i]);
            if (currMax < 0)
                currMax = 0;
            if (maximum < currMax)
                maximum = currMax;
        }
    }
    console.info(maximum);
    return maximum;
};

RainWater = function(arr, size) {
    var leftHigh = new Array(size);
    var rightHigh = new Array(size);
    var max = arr[0];
    leftHigh[0] = arr[0];
    
    for (var i = 1; i < size; i++) {
        if (max < arr[i])
            max = arr[i];
        leftHigh[i] = max;
    }
    max = arr[size - 1];
    rightHigh[size - 1] = arr[size - 1];
    for (var i = (size - 2); i >= 0; i--) {
        if (max < arr[i])
            max = arr[i];
        rightHigh[i] = max;
    }
    var water = 0;
    for (var i = 0; i < size; i++) {
        water += Math.min(leftHigh[i], rightHigh[i]) - arr[i];
    }
    console.info("Water : " + water);
    return water;
};

RainWater2 = function(arr, size) {
    var water = 0;
    var leftMax = 0;
    var rightMax = 0;
    var left = 0;
    var right = size - 1;
    
    while (left <= right) {
        if (arr[left] < arr[right]) {
            if (arr[left] > leftMax)
                leftMax = arr[left];
            else
                water += leftMax - arr[left];
            left += 1;
        }
        else {
            if (arr[right] > rightMax)
                rightMax = arr[right];
            else
                water += rightMax - arr[right];
            right -= 1;
        }
    }
    console.info("Water : " + water);
    return water;
};

function seperateEvenAndOdd(arr) {
    var size = arr.length;
    var left = 0;
    var right = size - 1;
    while (left < right) {
        if (arr[left] % 2 === 0) {
            left++;
        }
        else if (arr[right] % 2 === 1) {
            right--;
        }
        else {
            swap(arr, left, right);
            left++;
            right--;
        }
    };
};

function main25() {
    var first = [1, 0, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    seperateEvenAndOdd(first);
    console.log(first.toString());
}

main18();
main19();
main20();
main21();
main22();
main23();
main24();
main25();