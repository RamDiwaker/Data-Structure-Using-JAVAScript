function swap(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
    return;
};

function Partition01(arr, size) {
    var left = 0;
    var right = size - 1;
    var count = 0;
    while (left < right) {
        while (arr[left] === 0) {
            left += 1;
        }

        while (arr[right] === 1) {
            right -= 1;
        }
        if (left < right) {
            swap(arr, left, right);
            count += 1;
        }
    }
    return count;
};

function Partition012(arr, size) {
    var left = 0;
    var right = size - 1;
    var i = 0;
    while (i <= right) {
        if (arr[i] === 0) {
            swap(arr, i, left);
            i += 1;
            left += 1;
        }
        else if (arr[i] === 2) {
            swap(arr, i, right);
            right -= 1;
        }
        else {
            i += 1;
        }
    }
};

main1 = function() {
    var arr = [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1];
    Partition01(arr, arr.length);
    console.log(arr);
    var arr2 = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
    Partition012(arr2, arr2.length);
    console.log(arr2);
};

function RangePartition(arr, size, lower, higher) {
    var start = 0;
    var end = size - 1;
    var i = 0;
    while (i <= end) {
        if (arr[i] < lower) {
            swap(arr, i, start);
            i += 1;
            start += 1;
        }
        else if (arr[i] > higher) {
            swap(arr, i, end);
            end -= 1;
        }
        else {
            i += 1;
        }
    }
};

main2 = function() {
    var arr = [1, 21, 2, 20, 3, 19, 4, 18, 5, 17, 6, 16, 7, 15, 8, 14, 9, 13, 10, 12, 11];
    RangePartition(arr, arr.length, 9, 12);
    console.log(arr);
};

function minSwaps(arr, size, val) {
    var swapCount = 0;
    var first = 0;
    var second = size - 1;
    var temp;
    while (first < second) {
        if (arr[first] <= val)
            first += 1;
        else if (arr[second] > val)
            second -= 1;
        else {
            temp = arr[first];
            arr[first] = arr[second];
            arr[second] = temp;
            swapCount += 1;
        }
    }
    return swapCount;
};

function seperateEvenAndOdd(data, size) {
    var left = 0;
    var right = size - 1;
    while (left < right) {
        if (data[left] % 2 === 0)
            left++;
        else if (data[right] % 2 === 1)
            right--;
        else {
            swap(data, left, right);
            left++;
            right--;
        }
    }
};

function AbsMore(value1, value2, ref) {
    return (Math.abs(value1 - ref) > Math.abs(value2 - ref));
};

function AbsBubbleSort(arr, size, ref) {
    for (var i = 0; i < (size - 1); i++) {
        for (var j = 0; j < (size - i - 1); j++) {
            if (AbsMore(arr[j], arr[j + 1], ref)) {
                swap(arr, j, j + 1);
            }
        }
    }
};

main3 = function() {
    var array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
    var ref = 5;
    AbsBubbleSort(array, array.length, ref);
    console.log(array);
};

function EqMore(value1, value2, A) {
    value1 = A * value1 * value1;
    value2 = A * value2 * value2;
    return value1 > value2;
};

function ArrayReduction(arr, size) {
    arr.sort(function cmp(a, b) { return (a - b); });
    var count = 1;
    var reduction = arr[0];
    for (var i = 0; i < size; i++) {
        if (arr[i] - reduction > 0) {
            console.info(size - i);
            reduction = arr[i];
            count += 1;
        }
    }
    console.info("Total number of reductions " + count);
};

main4 = function() {
    var arr = [5, 1, 1, 1, 2, 3, 5];
    ArrayReduction(arr, arr.length);
};

function SortByOrder(arr, size, arr2, size2) {
    var ht = new Map();
    var ret = new Array(size);
    var retIndex = 0;

    var value;
    for (var i = 0; i < size; i++) {
        if (ht.has(arr[i])) {
            value = ht.get(arr[i]);
            ht.set(arr[i], value + 1);
        } else {
            ht.set(arr[i], 1);
        }
    }
    for (var j = 0; j < size2; j++) {
        if (ht.has(arr2[j])) {
            value = ht.get(arr2[j]);
            for (var k = 0; k < value; k++) {
                ret[retIndex++] = arr2[j];
            }
            ht.delete(arr2[j]);
        }
    }

    for (var i = 0; i < size; i++) {
        if (ht.has(arr[i])) {
            value = ht.get(arr[i]);
            for (var k = 0; k < value; k++) {
                ret[retIndex++] = arr[i];
            }
            ht.delete(arr[i]);
        }
    }
    for (var i = 0; i < size; i++) {
        arr[i] = ret[i];
    }
};


main5 = function() {
    var arr = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8];
    var arr2 = [2, 1, 8, 3];
    SortByOrder(arr, arr.length, arr2, arr2.length);
    console.log("SortByOrder", arr)
};

function merge(arr1, size1, arr2, size2) {
    var index = 0;
    var temp;
    while (index < size1) {
        if (arr1[index] <= arr2[0]) {
            index += 1;
        }
        else {
            temp = arr1[index]
            arr1[index] = arr2[0];
            arr2[0] = temp;

            index += 1;
            for (var i = 0; i < (size2 - 1); i++) {
                if (arr2[i] < arr2[i + 1])
                    break;

                temp = arr2[i]
                arr2[i] = arr2[i + 1];
                arr2[i + 1] = temp;

            }
        }
    }
};

main6 = function() {
    var arr1 = [1, 5, 9, 10, 15, 20];
    var arr2 = [2, 3, 8, 13];
    merge(arr1, arr1.length, arr2, arr2.length);
    console.log(arr1);
    console.log(arr2);
};

function checkReverse(arr, size) {
    var start = -1;
    var stop = -1;
    for (var i = 0; i < (size - 1); i++) {
        if (arr[i] > arr[i + 1]) {
            start = i;
            break;
        }
    }
    if (start === -1)
        return true;

    for (var i = start; i < (size - 1); i++) {
        if (arr[i] < arr[i + 1]) {
            stop = i;
            break;
        }
    }
    if (stop === -1)
        return true;
    if (arr[start - 1] > arr[stop] || arr[stop + 1] < arr[start])
        return false;

    for (var i = stop + 1; i < size - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};

function min(X, Y) {
    if (X < Y) {
        return X;
    }
    return Y;
};

function UnionIntersectionSorted(arr1, size1, arr2, size2) {
    var first = 0;
    var second = 0;
    var unionArr = new Array(size1 + size2);
    var interArr = new Array(min(size1, size2));
    var uIndex = 0;
    var iIndex = 0;

    while (first < size1 && second < size2) {
        if (arr1[first] === arr2[second]) {
            unionArr[uIndex++] = arr1[first];
            interArr[iIndex++] = arr1[first];
            first += 1;
            second += 1;
        }
        else if (arr1[first] < arr2[second]) {
            unionArr[uIndex++] = arr1[first];
            first += 1;
        }
        else {
            unionArr[uIndex++] = arr2[second];
            second += 1;
        }
    }
    while (first < size1) {
        unionArr[uIndex++] = arr1[first];
        first += 1;
    }
    while (second < size2) {
        unionArr[uIndex++] = arr2[second];
        second += 1;
    }
    console.log(unionArr);
    console.log(interArr);
};

function UnionIntersectionUnsorted(arr1, size1, arr2, size2) {
    arr1.sort(function cmp(a, b) { return (a - b); });
    arr2.sort(function cmp(a, b) { return (a - b); });
   
    UnionIntersectionSorted(arr1, size1, arr2, size2);
};

main7 = function() {
    var arr1 = [1, 11, 2, 3, 14, 5, 6, 8, 9];
    var arr2 = [2, 4, 5, 12, 7, 8, 13, 10];
    UnionIntersectionUnsorted(arr1, arr1.length, arr2, arr2.length);
};

main = function() {
    main1();
    main2();
    main3();
    main4();
    main5();
    main6();
    main7();
};

main();