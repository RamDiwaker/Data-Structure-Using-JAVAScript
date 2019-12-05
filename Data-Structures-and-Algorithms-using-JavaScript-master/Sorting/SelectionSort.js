less = function(value1, value2) {
    return value1 < value2;
};

more = function(value1, value2) {
    return value1 > value2;
};

selectionSort = function(arr, compare) {
    var size = arr.length;
    var max;
    var temp;
    for (var i = 0; i < size - 1; i++) {
        max = 0;
        for (var j = 1; j < size - i; j++) {
            if (compare(arr[j], arr[max])) {
                max = j;
            }
        }
        temp = arr[size - 1 - i];
        arr[size - 1 - i] = arr[max];
        arr[max] = temp;
    }
};

selectionSort2 = function(arr, compare) {
    var size = arr.length;
    var min;
    var temp;
    for (var i = 0; i < size - 1; i++) {
        min = i;
        for (var j = i + 1; j < size; j++) {
            if (compare(arr[min], arr[j])) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
};

//var array = [9, 1, 8, 2, 7, 3, 6, 4, 5];
var array = [4, 5, 3, 2, 6, 7, 1, 8, 9, 10];

selectionSort(array, more);
console.log(array);

var array2 = [9, 1, 8, 2, 7, 3, 6, 4, 5];
selectionSort2(array2, less);
console.log(array2);