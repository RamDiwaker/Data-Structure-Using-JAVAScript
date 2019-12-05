
merge = function(arr, tempArray, lowerIndex, middleIndex, upperIndex, compare) {
    var lowerStart = lowerIndex;
    var lowerStop = middleIndex;
    var upperStart = middleIndex + 1;
    var upperStop = upperIndex;
    var count = lowerIndex;
    while (lowerStart <= lowerStop && upperStart <= upperStop) {
        if (compare(arr[lowerStart], arr[upperStart])) {
            tempArray[count++] = arr[lowerStart++];
        }
        else {
            tempArray[count++] = arr[upperStart++];
        }
    };
    while (lowerStart <= lowerStop) {
        tempArray[count++] = arr[lowerStart++];
    };
    while (upperStart <= upperStop) {
        tempArray[count++] = arr[upperStart++];
    };
    for (var i = lowerIndex; i <= upperIndex; i++) {
        arr[i] = tempArray[i];
    }
};

mergeSortUtil = function(arr, tempArray, lowerIndex, upperIndex, compare) {
    if (lowerIndex >= upperIndex) {
        return;
    }
    var middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
    mergeSortUtil(arr, tempArray, lowerIndex, middleIndex, compare);
    mergeSortUtil(arr, tempArray, middleIndex + 1, upperIndex, compare);
    merge(arr, tempArray, lowerIndex, middleIndex, upperIndex, compare);
};

mergeSort = function(arr, compare) {
    var size = arr.length;
    var tempArray = new Array(size);
    mergeSortUtil(arr, tempArray, 0, size - 1, compare);
};

less = function(value1, value2) {
    return value1 < value2;
};

more = function(value1, value2) {
    return value1 > value2;
};

var array = [3, 4, 2, 1, 6, 5, 7, 8, 1, 1];
mergeSort(array, less);
console.log(array);