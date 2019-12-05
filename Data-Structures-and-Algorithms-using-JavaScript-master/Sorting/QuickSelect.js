swap = function(arr, first, second) {
    var temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
};

quickSelectUtil = function(arr, lower, upper, k) {
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
    if (k < upper)
        quickSelectUtil(arr, start, upper - 1, k);
    if (k > upper)
        quickSelectUtil(arr, upper + 1, stop, k);
};

quickSelect = function(arr, k) {
    quickSelectUtil(arr, 0, arr.length - 1, k);
};

var array = [3, 4, 2, 1, 6, 5, 7, 8, 10, 9];
quickSelect(array, 5);
console.log("value at index 5 is : " + array[4]);