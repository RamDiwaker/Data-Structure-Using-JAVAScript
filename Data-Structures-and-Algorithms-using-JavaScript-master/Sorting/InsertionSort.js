more = function (value1, value2) {
    return value1 > value2;
};

insertionSort = function (arr, compare) {
    var size = arr.length;
    var temp;
    for (var i = 1; i < size; i++) {
        temp = arr[i];
        for (var j = i; j > 0 && compare(arr[j - 1], temp); j--) {
            arr[j] = arr[j - 1];
        }
        arr[j] = temp;
    }
};

var array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
insertionSort(array, more);
console.log(array);