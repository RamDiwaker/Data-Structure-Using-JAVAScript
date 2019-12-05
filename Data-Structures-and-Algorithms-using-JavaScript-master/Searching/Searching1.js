const MIN_VALUE = -999999
const MAX_VALUE = 999999

function linearSearchUnsorted(arr, value) {
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
};

function linearSearchSorted(arr, value) {
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        if (value === arr[i]) {
            return true;
        }
        else if (value < arr[i]) {
            return false;
        }
    }
    return false;
};

function Binarysearch(arr, value) {
    var low = 0;
    var high = arr.length - 1;
    var mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return true;
        }
        else if (arr[mid] < value) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    };
    return false;
};

function BinarySearchRecursive(arr, value) {
    return BinarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}

function BinarySearchRecursiveUtil(arr, low, high, value) {
    if (low > high) {
        return false;
    }
    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
        return true;
    }
    else if (arr[mid] < value) {
        return BinarySearchRecursiveUtil(arr, mid + 1, high, value);
    }
    else {
        return BinarySearchRecursiveUtil(arr, low, mid - 1, value);
    }
};

function main1() {
    var first = [1, 3, 5, 7, 6, 4, 2];
    var second = [2, 4, 6, 8, 10, 12, 14, 16, 21, 23, 24];
    console.log(linearSearchUnsorted(first, 7));
    console.log(linearSearchUnsorted(first, 9));
    console.log(linearSearchSorted(second, 8));
    console.log(linearSearchSorted(second, 9));
    console.log(Binarysearch(second, 10));
    console.log(BinarySearchRecursive(second, 10));
};

function swap(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

function FirstRepeated(arr) {
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        for (var j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return 0;
};

function main2() {
    first = [7, 9, 3, 11, 3, 5, 7]
    console.log("FirstRepeated :: " + FirstRepeated(first));
}

function printRepeating(arr) {
    var size = arr.length;
    console.log(" Repeating elements are ");
    for (var i = 0; i < size; i++) {
        for (var j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                console.log(arr[i]);
            }
        }
    }
};

function printRepeating2(arr) {
    var size = arr.length;
    arr.sort()
    console.log(" Repeating elements are ");
    for (var i = 1; i < size; i++) {
        if (arr[i] === arr[i - 1]) {
            console.log(" " + arr[i]);
        }
    }
};


function printRepeating3(arr) {
    var hs = {};
    var size = arr.length;
    console.log(" Repeating elements are ");
    for (var i = 0; i < size; i++) {
        if (arr[i] in hs) {
            console.log(" " + arr[i]);
        }
        else {
            hs[arr[i]] = 1;
        }
    }
};


function printRepeating4(arr) {
    var count = new Array(size).fill(0);
    var size = arr.length;
    console.log(" Repeating elements are ");
    for (var i = 0; i < size; i++) {
        if (count[arr[i]] > 0) {
            console.log(" " + arr[i]);
        }
        else {
            count[arr[i]]++;
        }
    }
};

function main3() {
    var first = [1, 3, 5, 3, 1, 4, 2, 2, 3];
    printRepeating(first);
    printRepeating2(first);
    printRepeating3(first);
    printRepeating4(first);
};

function removeDuplicates(array) {
    var j = 0;
    var size = array.length;
    if (size === 0) {
        return [];
    }
    array.sort(function cmp(a, b) { return (a - b); });
    for (var i = 1; i < size; i++) {
        if (array[i] !== array[j]) {
            j++;
            array[j] = array[i];
        }
    }
    return array.slice(0, j + 1);
};

function main4() {
    first = [1, 2, 3, 1, 2, 3, 5, 6, 7, 7, 8, 9, 3, 4, 5]
    console.log(removeDuplicates(first));
}

function findMissingNumber(arr) {
    var size = arr.length;
    var found;
    for (var i = 1; i <= size; i++) {
        found = false;
        for (var j = 0; j < size; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }
        if (found === false) {
            return i;
        }
    }
    return MAX_VALUE;
};

function findMissingNumber2(arr, range) {
    if ((arr != null && arr instanceof Array) && (typeof range === 'number')) {
        var i;
        var size = arr.length;
        var xorSum = 0;
        for (i = 1; i <= range; i++) {
            xorSum ^= i;
        }
        for (i = 0; i < size; i++) {
            xorSum ^= arr[i];
        }
        return xorSum;
    }
    else
        throw new Error('invalid overload');
};

findMissingNumber3 = function(arr, upperRange) {
    var size = arr.length;
    var st = new Set();
    var i = 0;
    while (i <= size) {
        st.add(arr[i])
        i += 1;
    }
    i = 1;
    while (i <= upperRange) {
        if (st.has(i) === false)
            return i;
        i += 1;
    }
    console.info("NoNumberMissing");
    return -1;
};

function main5() {
    var first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    var i = 0;
    console.log(findMissingNumber(first));
    console.log(findMissingNumber2(first, 10));
    console.info(findMissingNumber3(first, 10));
};

function OddCount(arr, size) {
    var ctr = ({});
    var count = 0;
    var i;
    for (i = 0; i < size; i++) {
        if (ctr.has(arr[i]))
            ctr.set(arr[i], ctr.get(arr[i]) + 1);
        else
            ctr.set(arr[i], 1);
    }
    for (i = 0; i < size; i++) {
        if (ctr.has(arr[i]) && (ctr.get(arr[i]) % 2 == 1)) {
            console.info(arr[i]);
            count++;
        }
    }
    console.info("Odd count is :: " + count);
};

OddCount2 = function(arr, size) {
    var xorSum = 0;
    var first = 0;
    var second = 0;
    var setBit;
    for (var i = 0; i < size; i++) {
        xorSum = xorSum ^ arr[i];
    }
    setBit = xorSum & ~(xorSum - 1);
    for (var i = 0; i < size; i++) {
        if ((arr[i] & setBit) !== 0)
            first ^= arr[i];
        else
            second ^= arr[i];
    }
    console.info(first + second);
};

SumDistinct = function(arr, size) {
    var sum = 0;
    arr.sort();
    for (var i = 0; i < (size - 1); i++) {
        if (arr[i] !== arr[i + 1])
            sum += arr[i];
    }
    sum += arr[size - 1];
    console.info(sum);
};

function minabsSumPair(arr) {
    var size = arr.length;
    if (size < 2) {
        console.log("Invalid Input");
        return;
    }
    var minFirst = 0;
    var minSecond = 1;
    var sum;
    var minSum = Math.abs(arr[0] + arr[1]);
    for (var l = 0; l < size - 1; l++) {
        for (var r = l + 1; r < size; r++) {
            sum = Math.abs(arr[l] + arr[r]);
            if (sum < minSum) {
                minSum = sum;
                minFirst = l;
                minSecond = r;
            }
        }
    }
    console.log(" The two elements with minimum sum are : " + arr[minFirst] + " , " + arr[minSecond]);
};

function minabsSumPair2(arr) {
    var size = arr.length;
    if (size < 2) {
        console.log("Invalid Input");
        return;
    }
    arr.sort(function cmp(a, b) { return (a - b); });
    var minFirst = 0;
    var minSecond = size - 1;
    var minSum = Math.abs(arr[minFirst] + arr[minSecond]);
    var sum;
    for (var l = 0, r = size - 1; l < r;) {
        sum = (arr[l] + arr[r]);
        if (Math.abs(sum) < minSum) {
            minSum = Math.abs(sum);
            minFirst = l;
            minSecond = r;
        }
        if (sum < 0) {
            l++;
        }
        else if (sum > 0) {
            r--;
        }
        else {
            break;
        }
    }
    console.log(" The two elements with minimum sum are : " + arr[minFirst] + " , " + arr[minSecond]);
};

function main6() {
    var first = [1, 3, 5, 7, 2, 4, -12, 8, -9, 9, 10];
    minabsSumPair(first);
    minabsSumPair2(first);
}

function FindPair(arr, value) {
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        for (var j = i + 1; j < size; j++) {
            if ((arr[i] + arr[j]) === value) {
                console.log("The pair is : " + arr[i] + "," + arr[j]);
                return 1;
            }
        }
    }
    return 0;
};

function FindPair2(arr, value) {
    var first = 0;
    var size = arr.length;
    var second = size - 1;
    var curr;
    arr.sort(function cmp(a, b) { return (a - b); });
    while (first < second) {
        curr = arr[first] + arr[second];
        if (curr === value) {
            console.log("The pair is " + arr[first] + "," + arr[second]);
            return 1;
        }
        else if (curr < value) {
            first++;
        }
        else {
            second--;
        }
    };
    return 0;
};


function FindPair3(arr, value) {
    var hs = {};
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        if ((value - arr[i]) in hs) {
            console.log("The pair is : " + arr[i] + " , " + (value - arr[i]));
            return 1;
        }
        hs[arr[i]] = 1;
    }
    return 0;
};


function main7() {
    var first = [1, 3, 5, 7, 2, 4, 8, 9, 10];
    console.log(FindPair(first, 9));
    console.log(FindPair2(first, 9));
    console.log(FindPair3(first, 9));
}

FindDifference = function(arr, size, value) {
    for (var i = 0; i < size; i++) {
        for (var j = i + 1; j < size; j++) {
            if (Math.abs(arr[i] - arr[j]) === value) {
                console.info("The pair is:: " + arr[i] + " & " + arr[j]);
                return true;
            }
        }
    }
    return false;
};

FindDifference2 = function(arr, size, value) {
    var first = 0;
    var second = 0;
    var diff;
    arr.sort();
    while (first < size && second < size) {
        diff = Math.abs(arr[first] - arr[second]);
        if (diff === value) {
            console.info("The pair is::" + arr[first] + " & " + arr[second]);
            return true;
        }
        else if (diff > value)
            first += 1;
        else
            second += 1;
    }
    return false;
};

findMinDiff = function(arr, size) {
    arr.sort();
    var diff = 9999999;
    for (var i = 0; i < (size - 1); i++) {
        if ((arr[i + 1] - arr[i]) < diff)
            diff = arr[i + 1] - arr[i];
    }
    return diff;
};

MinDiffPair = function(arr1, size1, arr2, size2) {
    var minDiff = 9999999;
    var first = 0;
    var second = 0;
    var out1 = 0;
    var out2 = 0;
    var diff;
    arr1.sort();
    arr2.sort();
    while (first < size1 && second < size2) {
        diff = Math.abs(arr1[first] - arr2[second]);
        if (minDiff > diff) {
            minDiff = diff;
            out1 = arr1[first];
            out2 = arr2[second];
        }
        if (arr1[first] < arr2[second])
            first += 1;
        else
            second += 1;
    }
    console.info("The pair is :: " + out1 + out2);
    console.info("Minimum difference is :: " + minDiff);
    return minDiff;
};

main8 = function() {
    var first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    console.info(FindDifference(first, first.length, 6));
    console.info(FindDifference2(first, first.length, 6));
    console.info(findMinDiff(first, first.length));
    console.info(MinDiffPair(first, first.length, first, first.length));
};

ClosestPair = function(arr, size, value) {
    var diff = 999999;
    var first = -1;
    var second = -1;
    var curr;
    for (var i = 0; i < size; i++) {
        for (var j = i + 1; j < size; j++) {
            curr = Math.abs(value - (arr[i] + arr[j]));
            if (curr < diff) {
                diff = curr;
                first = arr[i];
                second = arr[j];
            }
        }
    }
    console.info("closest pair is ::" + first + second);
};

ClosestPair2 = function(arr, size, value) {
    var first = 0;
    var second = 0;
    var start = 0;
    var stop = size - 1;
    var diff;
    var curr;
    arr.sort()
    diff = 9999999;
    while (start < stop) {
        curr = (value - (arr[start] + arr[stop]));
        if (Math.abs(curr) < diff) {
            diff = Math.abs(curr);
            first = arr[start];
            second = arr[stop];
        }
        if (curr === 0) {
            break;
        }
        else if (curr > 0) {
            start += 1;
        }
        else {
            stop -= 1;
        }
    }
    console.info("closest pair is :: " + first + second);
};

main9 = function() {
    var first = [1, 5, 4, 3, 2, 7, 8, 9, 6];
    ClosestPair(first, first.length, 6);
    ClosestPair2(first, first.length, 6);
};

SumPairRestArray = function(arr, size) {
    var total;
    var curr;
    arr.sort();
    var total = 0;
    for (var i = 0; i < size; i++) {
        total += arr[i];
    }
    value = Math.floor(total / 2);
    var low = 0;
    var high = size - 1;
    while (low < high) {
        curr = arr[low] + arr[high];
        if (curr === value) {
            console.info("Pair is :: " + arr[low] + arr[high]);
            return true;
        }
        else if (curr < value)
            low += 1;
        else
            high -= 1;
    }
    return false;
};

ZeroSumTriplets = function(arr, size) {
    for (var i = 0; i < (size - 2); i++) {
        for (var j = i + 1; j < (size - 1); j++) {
            for (var k = j + 1; k < size; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                    console.info("Triplet :: " + arr[i] + arr[j] + arr[k]);
            }
        }
    }
};

ZeroSumTriplets2 = function(arr, size) {
    var start;
    var stop;
    arr.sort();
    for (var i = 0; i < (size - 2); i++) {
        start = i + 1;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] + arr[start] + arr[stop] === 0) {
                console.info("Triplet :: " + arr[i] + arr[start] + arr[stop]);
                start += 1;
                stop -= 1;
            }
            else if (arr[i] + arr[start] + arr[stop] > 0)
                stop -= 1;
            else
                start += 1;
        }
    }
};

findTriplet = function(arr, size, value) {
    for (var i = 0; i < (size - 2); i++) {
        for (var j = i + 1; j < (size - 1); j++) {
            for (var k = j + 1; k < size; k++) {
                {
                    if ((arr[i] + arr[j] + arr[k]) === value)
                        console.info("Triplet :: " + arr[i] + arr[j] + arr[k]);
                };
            };
        };
    }
};

findTriplet2 = function(arr, size, value) {
    var start;
    var stop;
    arr.sort();
    for (var i = 0; i < size - 2; i++) {
        start = i + 1;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] + arr[start] + arr[stop] === value) {
                console.info("Triplet ::" + arr[i] + arr[start] + arr[stop]);
                start += 1;
                stop -= 1;
            }
            else if (arr[i] + arr[start] + arr[stop] > value)
                stop -= 1;
            else
                start += 1;
        }
    }
};

ABCTriplet = function(arr, size) {
    var start;
    var stop;
    arr.sort();
    for (var i = 0; i < (size - 2); i++) {
        start = i + 1;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] === arr[start] + arr[stop]) {
                console.info("Triplet ::%d, %d, %d" + arr[i] + arr[start] + arr[stop]);
                start += 1;
                stop -= 1;
            }
            else if (arr[i] > arr[start] + arr[stop])
                stop -= 1;
            else
                start += 1;
        }
    }
};
SmallerThenTripletCount = function(arr, size, value) {
    var start;
    var stop;
    var count = 0;
    arr.sort();
    for (var i = 0; i < (size - 2); i++) {
        start = i + 1;
        stop = size - 1;
        while (start < stop) {
            if (arr[i] + arr[start] + arr[stop] >= value)
                stop -= 1;
            else {
                count += stop - start;
                start += 1;
            }
        }
    }
    console.info(count);
};

APTriplets = function(arr, size) {
    var j;
    var k;
    for (var i = 1; i < size - 1; i++) {
        j = i - 1;
        k = i + 1;
        while (j >= 0 && k < size) {
            if (arr[j] + arr[k] === 2 * arr[i]) {
                console.info("Triplet ::" + arr[j] + arr[i] + arr[k]);
                k += 1;
                j -= 1;
            }
            else if (arr[j] + arr[k] < 2 * arr[i])
                k += 1;
            else
                j -= 1;
        }
    }
};

GPTriplets = function(arr, size) {
    var j;
    var k;
    for (var i = 1; i < size - 1; i++) {
        j = i - 1;
        k = i + 1;
        while (j >= 0 && k < size) {
            if (arr[j] * arr[k] === arr[i] * arr[i]) {
                console.info("Triplet is :: " + arr[j] + arr[i] + arr[k]);
                k += 1;
                j -= 1;
            }
            else if (arr[j] + arr[k] < 2 * arr[i])
                k += 1;
            else
                j -= 1;
        }
    }
};

numberOfTriangles = function(arr, size) {
    var count = 0;
    for (var i = 0; i < (size - 2); i++) {
        for (var j = i + 1; j < (size - 1); j++) {
            for (var k = j + 1; k < size; k++) {
                if (arr[i] + arr[j] > arr[k])
                    count += 1;
            }
        }
    }
    return count;
};

numberOfTriangles2 = function(arr, size) {
    var k;
    var count = 0;
    arr.sort();
    for (var i = 0; i < (size - 2); i++) {
        k = i + 2;
        for (var j = i + 1; j < (size - 1); j++) {
            while (k < size && arr[i] + arr[j] > arr[k]) {
                k += 1;
            };
            count += k - j - 1;
        }
    }
    return count;
};

function getMax(arr) {
    var max = arr[0];
    var size = arr.length;
    var count = 1;
    var maxCount = 1;
    for (var i = 0; i < size; i++) {
        count = 1;
        for (var j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            max = arr[i];
            maxCount = count;
        }
    }
    return max;
};

function getMax2(arr) {
    var max = arr[0];
    var size = arr.length;
    var maxCount = 1;
    var curr = arr[0];
    var currCount = 1;
    arr.sort(function cmp(a, b) { return (a - b); });
    for (var i = 1; i < size; i++) {
        if (arr[i] === arr[i - 1]) {
            currCount++;
        }
        else {
            currCount = 1;
            curr = arr[i];
        }
        if (currCount > maxCount) {
            maxCount = currCount;
            max = curr;
        }
    }
    return max;
};

function getMax3(arr, range) {
    var max = arr[0];
    var size = arr.length;
    var maxCount = 1;
    var count = new Array(range).fill(0);
    for (var i = 0; i < size; i++) {
        count[arr[i]]++;
        if (count[arr[i]] > maxCount) {
            maxCount = count[arr[i]];
            max = arr[i];
        }
    }
    return max;
};

function main10() {
    var first = [1, 3, 5, 3, 1, 2, 4, 2, 2];
    console.log(getMax(first));
    console.log(getMax2(first));
    console.log(getMax3(first, 10));
};

function getMajority(arr) {
    var size = arr.length;
    var max = 0;
    var count = 0;
    var maxCount = 0;
    for (var i = 0; i < size; i++) {
        count = 1;
        for (var j = i + 1; j < size; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            max = arr[i];
            maxCount = count;
        }
    }
    if (maxCount > Math.floor(size / 2)) {
        return max;
    }
    else {
        return 0;
    }
};

function getMajority2(arr) {
    var size = arr.length;
    var majIndex = Math.floor(size / 2);
    var count = 0;
    var i;
    var candidate;
    arr.sort(function cmp(a, b) { return (a - b); });
    candidate = arr[majIndex];
    for (i = 0; i < size; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }
    if (count > Math.floor(size / 2)) {
        return arr[majIndex];
    }
    else {
        return 0;
    }
};

function getMajority3(arr) {
    var size = arr.length;
    var majIndex = 0;
    var count = 1;
    var i;
    var candidate;
    for (i = 1; i < size; i++) {
        if (arr[majIndex] === arr[i]) {
            count++;
        }
        else {
            count--;
        }
        if (count === 0) {
            majIndex = i;
            count = 1;
        }
    }
    candidate = arr[majIndex];
    count = 0;
    for (i = 0; i < size; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }
    if (count > Math.floor(size / 2)) {
        return arr[majIndex];
    }
    else {
        return 0;
    }
};

function main11() {
    var first = [1, 3, 5, 3, 1, 2, 4, 2, 2, 2, 2, 2, 2];
    console.log(getMajority(first));
    console.log(getMajority2(first));
    console.log(getMajority3(first, 10));
}

function SearchBotinicArrayMax(arr) {
    var size = arr.length;
    var start = 0;
    var end = size - 1;
    var mid = Math.floor((start + end) / 2);
    var maximaFound = 0;
    if (size < 3) {
        console.log("error");
        return 0;
    }
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            maximaFound = 1;
            break;
        }
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        }
        else {
            break;
        }
    };
    if (maximaFound === 0) {
        console.log("error");
        return 0;
    }
    return arr[mid];
};

function main12() {
    var first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(SearchBotinicArrayMax(first));
}

function SearchBitonicArray(arr, key) {
    var size = arr.length;
    var max = FindMaxBitonicArray(arr);
    var k = BinarySearch(arr, 0, max, key, true);
    if (k !== -1) {
        return true;
    }
    k = BinarySearch(arr, max + 1, size - 1, key, false);
    if (k !== -1) {
        return true;
    }
    return false;
};


function FindMaxBitonicArray(arr) {
    var size = arr.length;
    var start = 0;
    var end = size - 1;
    var mid;
    if (size < 3) {
        console.log("error");
        return -1;
    }
    while ((start <= end)) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
            return mid;
        }
        else if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        }
        else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            end = mid - 1;
        }
        else {
            break;
        }
    };
    console.log("error");
    return -1;
};

function BinarySearch(arr, start, end, key, isInc) {
    var mid;
    if (end < start) {
        return -1;
    }
    mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
        return mid;
    }
    if (isInc !== false && key < arr[mid] || isInc === false && key > arr[mid]) {
        return BinarySearch(arr, start, mid - 1, key, isInc);
    }
    else {
        return BinarySearch(arr, mid + 1, end, key, isInc);
    }
};

function main13() {
    var first = [1, 3, 5, 7, 9, 11, 12, 8, 5, 3, 1];
    console.log(SearchBitonicArray(first, 8));
    console.log(SearchBitonicArray(first, 7));
    console.log(SearchBitonicArray(first, 12));
}


function findKeyCount(arr, key) {
    var size = arr.length;
    var count = 0;
    for (var i = 0; i < size; i++) {
        if (arr[i] === key) {
            count++;
        }
    }
    return count;
};

function findKeyCount2(arr, key) {
    var size = arr.length;
    var firstIndex = findFirstIndex(arr, 0, size - 1, key);
    var lastIndex = findLastIndex(arr, 0, size - 1, key);
    return (lastIndex - firstIndex + 1);
};

function findFirstIndex(arr, start, end, key) {
    if (end < start) {
        return -1;
    }
    var mid = Math.floor((start + end) / 2);
    if (key === arr[mid] && (mid === start || arr[mid - 1] !== key)) {
        return mid;
    }
    if (key <= arr[mid]) {
        return findFirstIndex(arr, start, mid - 1, key);
    }
    else {
        return findFirstIndex(arr, mid + 1, end, key);
    }
};

function findLastIndex(arr, start, end, key) {
    if (end < start) {
        return -1;
    }
    var mid = Math.floor((start + end) / 2);
    if (key === arr[mid] && (mid === end || arr[mid + 1] !== key)) {
        return mid;
    }
    if (key < arr[mid]) {
        return findLastIndex(arr, start, mid - 1, key);
    }
    else {
        return findLastIndex(arr, mid + 1, end, key);
    }
};

FirstIndex = function(arr, size, low, high, value) {
    var mid = 0;
    if (high >= low)
        mid = Math.floor((low + high) / 2 );
    if ((mid === 0 || arr[mid - 1] < value) && (arr[mid] === value))
        return mid;
    else if (arr[mid] < value)
        return FirstIndex(arr, size, mid + 1, high, value);
    else
        return FirstIndex(arr, size, low, mid - 1, value);
};

isMajority = function(arr, size) {
    var majority = arr[Math.floor(size / 2)];
    var i = FirstIndex(arr, size, 0, size - 1, majority);
    if (((i + Math.flooor(size / 2)) <= (size - 1)) && 
        arr[i + Math.floor(size / 2)] === majority)
        return true;
    else
        return false;
};

main14 = function() {
    var first = [1, 5, 10, 13, 20, 30, 8, 7, 6];
    console.info(findKeyCount(first, first.length, 6));
    console.info(findKeyCount2(first, first.length, 6));
};

function maxProfit(stocks) {
    var size = stocks.length;
    var buy = 0;
    var sell = 0;
    var curMin = 0;
    var currProfit = 0;
    var maxProfit = 0;

    for (var i = 0; i < size; i++) {
        if (stocks[i] < stocks[curMin]) {
            curMin = i;
        }
        currProfit = stocks[i] - stocks[curMin];
        if (currProfit > maxProfit) {
            buy = curMin;
            sell = i;
            maxProfit = currProfit;
        }
    }
    console.log("Purchase day is- " + buy + " at price " + stocks[buy]);
    console.log("Sell day is- " + sell + " at price " + stocks[sell]);
};

function main15() {
    var first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    maxProfit(first);
}

function getMedian(arr) {
    var size = arr.length;
    arr.sort(function cmp(a, b) { return (a - b); });
    var mid = Math.floor(size / 2);
    return arr[mid];
};

function main16() {
    var first = [10, 10, 5, 7, 9, 11, 12, 8, 5, 3, 10];
    console.log("median value is :: " + getMedian(first));
}

function findMedian(arrFirst, arrSecond) {
    var sizeFirst = arrFirst.length;
    var sizeSecond = arrSecond.length;
    var medianIndex = Math.ceil((sizeFirst + sizeSecond) / 2);
    var i = 0;
    var j = 0;
    var count = 0;
    while (count < medianIndex - 1) {
        if (i < sizeFirst - 1 && arrFirst[i] < arrSecond[j]) {
            i++;
        }
        else {
            j++;
        }
        count++;
    };
    if (arrFirst[i] < arrSecond[j]) {
        return arrFirst[i];
    }
    else {
        return arrSecond[j];
    }
};

function main17() {
    var first = [10, 10, 5, 7, 9, 11];
    var second = [12, 8, 5, 3, 10];
    first.sort(function cmp(a, b) { return (a - b); });
    second.sort(function cmp(a, b) { return (a - b); });
    console.log("median value is :: " + findMedian(first, second));
}

main1();
main2();
main3();
main4();
main5();
main6();
main7();
main8();
main9();
main10();
main11();
main12();
main13();
main14();
main15();
main16();
main17();