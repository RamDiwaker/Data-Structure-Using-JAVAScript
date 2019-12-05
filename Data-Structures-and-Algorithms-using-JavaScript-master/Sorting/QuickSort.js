
less = function(value1, value2) {
    return value1 < value2;
};

more = function(value1, value2) {
    return value1 > value2;
};

swap = function(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

quickSortUtil = function(arr, lower, upper) {
    if (upper <= lower)
        return;

    var pivot = arr[lower];
    var start = lower;
    var stop = upper;
    while (lower < upper) {
        while (arr[lower] <= pivot && lower < upper) {
            lower++;
        };
        while (arr[upper] > pivot && lower <= upper) {
            upper--;
        };
        if (lower < upper) {
            swap(arr, upper, lower);
        }
    };
    swap(arr, upper, start);
    quickSortUtil(arr, start, upper - 1);
    quickSortUtil(arr, upper + 1, stop);
};

quickSort = function(arr) {
    var size = arr.length;
    quickSortUtil(arr, 0, size - 1);
};

var array = [3, 4, 2, 1, 6, 5, 7, 8, 1, 1];
quickSort(array);
console.log(array);