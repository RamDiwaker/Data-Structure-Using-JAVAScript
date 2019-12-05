function main1() {
    var temp = 100;
    var temp2 = temp;
    temp2 = "Hello, World!";
    temp2 = true;

    console.log(typeof (temp));
    console.log(typeof (temp2));
}

function increment(value) {
    value++;
};

function main2() {
    var i = 10;
    console.log("Value of i before increment is :  " + i);
    increment(i);
    console.log("Value of i before increment is :  " + i);
}

function MyInt() {
    this.value = 0;
}

function increment2(data) {
    if (data != null && data instanceof MyInt) {
        (data.value)++;
    } else
        throw new Error('invalid overload');
};

function increment3(value) {
    value[0]++;
};

function main3() {
    var i = new MyInt;
    i.value = 10;
    console.log("Value of i before increment is :  " + i.value);
    increment2(i);
    console.log("Value of i before increment is :  " + i.value);

    var i = [10]
    console.log("Value of i before increment is :  " + i[0]);
    increment3(i)
    console.log("Value of i before increment is :  " + i[0]);
}

function printArray(arr) {
    console.log("Values are : " + arr);
};

function swap(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
};

function permutation(arr, i, length) {
    if (length === i) {
        console.log(arr);
        return;
    }

    var j = i;
    for (j = i; j < length; j++) {
        swap(arr, i, j);
        permutation(arr, i + 1, length);
        swap(arr, i, j);
    }
};

function main4() {
    var arr = new Array(5);
    for (var i = 0; i < 5; i++) {
        arr[i] = i;
    }
    permutation(arr, 0, 5);
};

function GCD(m, n) {
    if (m < n) {
        return (GCD(n, m));
    }
    if (m % n === 0) {
        return (n);
    }
    return (GCD(n, m % n));
};

function towerOfHanoi(num, src, dst, temp) {
    if (num < 1) {
        return;
    }
    towerOfHanoi(num - 1, src, temp, dst);
    console.log("Move " + num + " disk  from peg " + src + " to peg " + dst);
    towerOfHanoi(num - 1, temp, dst, src);
};

function main5() {
    var num = 4;
    console
        .info("The sequence of moves involved in the Tower of Hanoi are :\n");
    towerOfHanoi(num, 'A', 'C', 'B');
    return 0;
};

function function2() {
    console.log("fun2 line 1");
};
function function1() {
    console.log("fun1 line 1");
    function2();
    console.log("fun1 line 2");
};
function main6() {
    console.log("main line 1");
    function1();
    console.log("main line 2");
};

function maxSubArraySum(a) {
    var size = a.length;
    var maxSoFar = 0;
    var maxEndingHere = 0;

    for (var i = 0; i < size; i++) {
        maxEndingHere = maxEndingHere + a[i];
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
        }
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
        }
    }
    return maxSoFar;
};

function main7() {
    var arr = [1, -2, 3, 4, -4, 6, -4, 8, 2];
    console.log(maxSubArraySum(arr));
}

function variableExample() {
    var var1 = 100;
    var var2 = 200;
    var var3 = var1 + var2;
    console.log("Adding " + var1 + " and " + var2 + " will give " + var3);
};

function main8() {
    arrayExample();
}

function arrayExample() {
    var arr = new Array(10);
    for (var i = 0; i < 10; i++) {
        arr[i] = i;
    }
    console.log(arr);
};

function printArray1(arr) {
    console.log("Array Values : " + arr);
};

function twoDArrayExample() {
    var rows = 10, columns = 10;
    var arr = new Array(rows);
    for (var i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }

    var count = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            arr[i][j] = count++;
        }
    }

    print2DArray(arr);
};

function print2DArray(arr) {
    var row = arr.length;
    for (var i = 0; i < row; i++) {
        console.log(arr[i]);
    }
};

function main9() {
    twoDArrayExample();
}

function SumArray(arr) {
    var size = arr.length;
    var total = 0;
    for (var index = 0; index < size; index++) {
        total = total + arr[index];
    }
    return total;
};

function main10() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var sum = SumArray(numbers);
    console.log("Sum is :: " + sum);
}

function SequentialSearch(arr, value) {
    var size = arr.length;
    for (var i = 0; i < size; i++) {
        if (value === arr[i]) {
            return i;
        }
    }
    return -1;
};

function BinarySearch(arr, value) {
    var size = arr.length;
    var mid;
    var low = 0;
    var high = size - 1;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return mid;
        } else {
            if (arr[mid] < value) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    };
    return -1;
};


function BinarySearchRecursive(arr, value) {
    return BinarySearchRecursiveUtil(arr, 0, arr.length - 1, value);
}

function BinarySearchRecursiveUtil(arr, low, high, value) {
    if (low > high)
        return -1;

    var mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) {
        return mid;
    }

    if (arr[mid] < value) {
        return BinarySearchRecursiveUtil(arr, mid + 1, high, value);
    } else {
        return BinarySearchRecursiveUtil(arr, low, mid - 1, value);
    }
};

function main11() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(SequentialSearch(numbers, 7));
    console.log(BinarySearch(numbers, 7));
    console.log(BinarySearchRecursive(numbers, 7));

    console.log(SequentialSearch(numbers, 11));
    console.log(BinarySearch(numbers, 11));
    console.log(BinarySearchRecursive(numbers, 11));
}

function rotateArray(a, n, k) {
    reverseArray(a, 0, k - 1);
    reverseArray(a, k, n - 1);
    reverseArray(a, 0, n - 1);
};

function reverseArray(a, start, end) {
    if ((a != null && a instanceof Array) && (typeof start === 'number')
        && (typeof end === 'number')) {
        for (var i = start, j = end; i < j; i++ , j--) {
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    } else
        throw new Error('invalid overload');
};

function reverseArray2(a) {
    var start = 0;
    var end = a.length - 1;
    for (var i = start, j = end; i < j; i++ , j--) {
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
};

function sum(num1, num2) {
    return num1 + num2;
};

function main12() {
    var x = 10;
    var y = 20;
    console.log("Sum is : " + sum(x, y));
    return 0;
};

function factorial(i) {
    if (i <= 1) {
        return 1;
    }
    return i * factorial(i - 1);
};

function printInt1(number) {
    var digit = String.fromCharCode(number % 10 + ('0').charCodeAt(0));
    number = Math.floor(number / 10);
    if (number !== 0) {
        printInt1(number);
    }
    console.log(digit);
};

function main13() {
    printInt1(50);
    for (var i = 0; i < 20; i++)
        console.log(printHaxInt(i, 16));
}

function printHaxInt(number, base) {
    var arr = new Array();
    printHaxIntUtil(number, base, arr);
    return arr.join("");
};

function printHaxIntUtil(number, base, arr) {
    var conversion = "0123456789ABCDEF";
    var digit = (number % base);
    number = Math.floor(number / base);
    if (number !== 0) {
        printHaxIntUtil(number, base, arr);
    }
    arr.push(conversion[digit]);
};

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

function fibonacci2(n) {
    var first = 0, second = 1;
    var temp, i;

    if (n === 0)
        return first;
    else if (n === 1)
        return second;

    for (i = 2; i <= n; i++) {
        temp = first + second;
        first = second;
        second = temp;
    }
    return temp;
}

function main14() {
    console.log(fibonacci(6));
    console.log(fibonacci2(6));
}

WaveArray2 = function(arr) {
    var size = arr.length;
    for (var i = 1; i < size; i += 2) {
        if ((i - 1) >= 0 && arr[i] > arr[i - 1]) {
            swap(arr, i, i - 1);
        }
        if ((i + 1) < size && arr[i] > arr[i + 1]) {
            swap(arr, i, i + 1);
        }
    }
};

WaveArray = function(arr) {
    var size = arr.length;
    arr.sort()
    for (var i = 0; i < size - 1; i += 2) {
        swap(arr, i, i + 1);
    }
};

main15 = function(args) {
    var arr = [8, 1, 2, 3, 4, 5, 6, 4, 2];
    WaveArray(arr);
    printArray(arr, arr.length);
    
    var arr2 = [8, 1, 2, 3, 4, 5, 6, 4, 2];
    WaveArray2(arr2);
    printArray(arr2, arr2.length);
};

indexArray = function(arr, size) {
    for (var i = 0; i < size; i++) {
        var curr = i;
        var value = -1;
    
        while (arr[curr] !== -1 && arr[curr] !== curr) {
            var temp = arr[curr];
            arr[curr] = value;
            value = curr = temp;
        }
    
        if (value !== -1) {
            arr[curr] = value;
        }
    }
};

indexArray2 = function(arr, size) {
    var temp;
    for (var i = 0; i < size; i++) {
        while (arr[i] !== -1 && arr[i] !== i) {
            temp = arr[i];
            arr[i] = arr[temp];
            arr[temp] = temp;
        }
    }
};

main16 = function(args) {
    var arr = [8, -1, 6, 1, 9, 3, 2, 7, 4, -1];
    var size = arr.length;
    indexArray2(arr, size);
    printArray(arr, size);

    var arr2 = [8, -1, 6, 1, 9, 3, 2, 7, 4, -1];
    size = arr2.length;
    indexArray(arr2, size);
    printArray(arr2, size);
};

Sort1toN = function(arr, size) {
    var curr;
    var value;
    var next;
    for (var i = 0; i < size; i++) {
        curr = i;
        value = -1;
    
        while (curr >= 0 && curr < size && arr[curr] !== curr + 1) {
            next = arr[curr];
            arr[curr] = value;
            value = next;
            curr = next - 1;
        }
    }
};

Sort1toN2 = function(arr, size) {
    var temp;
    for (var i = 0; i < size; i++) {
        while (arr[i] !== i + 1 && arr[i] > 1) {
            temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        }
    }
};

main17 = function(args) {
    var arr = [8, 5, 6, 1, 9, 3, 2, 7, 4, 10];
    var size = arr.length;
    Sort1toN2(arr, size);
    printArray(arr, size);

    var arr2 = [8, 5, 6, 1, 9, 3, 2, 7, 4, 10];
    size = arr2.length;
    Sort1toN(arr2, size);
    printArray(arr2, size);
};

SmallestPositiveMissingNumber = function(arr, size) {
    var found;
    for (var i = 1; i < size + 1; i++) {
        found = 0;
        for (var j = 0; j < size; j++) {
            if (arr[j] === i) {
                found = 1;
                break;
            }
        }
        if (found === 0) {
            return i;
        }
    }
    return -1;
};

SmallestPositiveMissingNumber2 = function(arr, size) {
    var hs = new Set();
    for (var i = 0; i < size; i++) {
        hs.add(arr[i]);
    }

    for (var i = 1; i < size + 1; i++) {
        if (hs.has(i) === false)
            return i;
    }
    return -1;
};

SmallestPositiveMissingNumber3 = function(arr, size) {
    var aux = new Array(size).fill(-1);

    for (var i = 0; i < size; i++) {
        if (arr[i] > 0 && arr[i] <= size) {
            aux[arr[i] - 1] = arr[i];
        }
    }
    
    for (var i = 0; i < size; i++) {
        if (aux[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
};

SmallestPositiveMissingNumber4 = function(arr, size) {
    var temp;
    for (var i = 0; i < size; i++) {
        while (arr[i] !== i + 1 && arr[i] > 0 && arr[i] <= size) {
            temp = arr[i];
            arr[i] = arr[temp - 1];
            arr[temp - 1] = temp;
        }
    }
    
    for (var i = 0; i < size; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
};

main18 = function(args) {
    var arr = [8, 5, 6, 1, 9, 11, 2, 7, 4, 10];
    var size = arr.length;
    console.info("Smallest Positive Missing Number :" + SmallestPositiveMissingNumber(arr, size));
    console.info("Smallest Positive Missing Number :" + SmallestPositiveMissingNumber2(arr, size));
    console.info("Smallest Positive Missing Number :" + SmallestPositiveMissingNumber3(arr, size));
    console.info("Smallest Positive Missing Number :" + SmallestPositiveMissingNumber4(arr, size));
};

MaxMinArr = function(arr, size) {
    var aux = arr.slice(0, size);
    var start = 0;
    var stop = size - 1;
    for (var i = 0; i < size; i++) {
        if (i % 2 === 0) {
            arr[i] = aux[stop];
            stop -= 1;
        }
        else {
            arr[i] = aux[start];
            start += 1;
        }
    }
};

ReverseArr = function(arr, start, stop) {
    while (start < stop) {
        swap(arr, start, stop);
        start += 1;
        stop -= 1;
    }
};

MaxMinArr2 = function(arr, size) {
    for (var i = 0; i < (size - 1); i++) {
        ReverseArr(arr, i, size - 1);
    }
};

main19 = function(args) {
    var arr = [1, 2, 3, 4, 5, 6, 7];
    var size = arr.length;
    MaxMinArr(arr, size);
    printArray(arr, size);

    var arr2 = [1, 2, 3, 4, 5, 6, 7];
    var size2 = arr.length;
    MaxMinArr2(arr2, size2);
    printArray(arr2, size2);
};

maxCircularSum = function(arr, size) {
    var sumAll = 0;
    var currVal = 0;
    var maxVal;
    for (var i = 0; i < size; i++) {
        sumAll += arr[i];
        currVal += (i * arr[i]);
    }
    
    maxVal = currVal;
    for (var i = 1; i < size; i++) {
        currVal = (currVal + sumAll) - (size * arr[size - i]);
        if (currVal > maxVal) {
            maxVal = currVal;
        }
    }
    return maxVal;
};

main20 = function(args) {
    var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    console.info("Max Circulr Sum: " + maxCircularSum(arr, arr.length));
};

ArrayIndexMaxDiff = function(arr, size) {
    var maxDiff = -1;
    var j;
    for (var i = 0; i < size; i++) {
        j = size - 1;
        while (j > i) {
            if (arr[j] > arr[i]) {
                maxDiff = Math.max(maxDiff, j - i);
                break;
            }
            j -= 1;
        }
    }
    return maxDiff;
};

ArrayIndexMaxDiff2 = function(arr, size) {
    var leftMin = new Array(size)
    var rightMax = new Array(size)
    leftMin[0] = arr[0];
    var i;
    var j;
    var maxDiff;

    for (i = 1; i < size; i++) {
        if (leftMin[i - 1] < arr[i]) {
            leftMin[i] = leftMin[i - 1];
        }
        else {
            leftMin[i] = arr[i];
        }
    }

    rightMax[size - 1] = arr[size - 1];
    for (i = size - 2; i >= 0; i--) {
        if (rightMax[i + 1] > arr[i]) {
            rightMax[i] = rightMax[i + 1];
        }
        else {
            rightMax[i] = arr[i];
        }
    }
    i = 0;
    j = 0;
    maxDiff = -1;
    while (j < size && i < size) {
        if (leftMin[i] < rightMax[j]) {
            maxDiff = Math.max(maxDiff, j - i);
            j = j + 1;
        }
        else {
            i = i + 1;
        }
    }
    return maxDiff;
};

main21 = function(args) {
    var arr = [33, 9, 10, 3, 2, 60, 30, 33, 1];
    console.info("ArrayIndexMaxDiff : " + ArrayIndexMaxDiff(arr, arr.length));
    console.info("ArrayIndexMaxDiff : " + ArrayIndexMaxDiff2(arr, arr.length));
};

maxPathSum = function(arr1, size1, arr2, size2) {
    var i = 0;
    var j = 0;
    var result = 0;
    var sum1 = 0;
    var sum2 = 0;
    while (i < size1 && j < size2) {
        if (arr1[i] < arr2[j]) {
            sum1 += arr1[i];
            i += 1;
        }
        else if (arr1[i] > arr2[j]) {
            sum2 += arr2[j];
            j += 1;
        }
        else {
            result += Math.max(sum1, sum2);
            result = result + arr1[i];
            sum1 = 0;
            sum2 = 0;
            i += 1;
            j += 1;
        }
    }
    while (i < size1) {
        sum1 += arr1[i];
        i += 1;
    }
    while (j < size2) {
        sum2 += arr2[j];
        j += 1;
    }
    result += Math.max(sum1, sum2);
    return result;
};

main22 = function(args) {
    var arr1 = [12, 13, 18, 20, 22, 26, 70];
    var arr2 = [11, 15, 18, 19, 20, 26, 30, 31];
    console.info("Max Path Sum :: " + maxPathSum(arr1, arr1.length, arr2, arr2.length));
};

function main() {
    main1()
    main2()
    main3()
    main4()
    main5()
    main6()
    main7()
    main8()
    main9()
    main10()
    main11()
    main12()
    main13()
    main14()
    main15()
    main16()
    main17()
    main18()
    main19()
    main20()
    main21()
    main22()
}

main();