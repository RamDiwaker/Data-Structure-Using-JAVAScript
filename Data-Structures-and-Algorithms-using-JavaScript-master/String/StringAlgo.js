
function matchExpUtil(exp, str, i, j) {
    if (i === exp.length && j === str.length) {
        return true;
    }
    if ((i === exp.length && j !== str.length) ||
        (i !== exp.length && j === str.length)) {
        return false;
    }
    if (exp[i] === '?' || exp[i] === str[j]) {
        return matchExpUtil(exp, str, i + 1, j + 1);
    }
    if (exp[i] === '*') {
        return matchExpUtil(exp, str, i + 1, j)
            || matchExpUtil(exp, str, i, j + 1)
            || matchExpUtil(exp, str, i + 1, j + 1);
    }
    return false;
};

function matchExp(exp, str) {
    return matchExpUtil(exp, str, 0, 0);
};

main1 = function() {
    console.log("matchExp")
    console.log(matchExp("hello*", "helloworld"));
    console.log(matchExp("hello?d", "hellowd"));
    console.log(matchExp("hello*hemant", "helloworldfsdfsdfdsfhemant"));
    console.log()
};

function match(source, pattern) {
    var iSource = 0;
    var iPattern = 0;
    var sourceLen = source.length;
    var patternLen = pattern.length;
    for (iSource = 0; iSource < sourceLen; iSource++) {
        if (source[iSource] === pattern[iPattern]) {
            iPattern++;
        }
        if (iPattern === patternLen) {
            return true;
        }
    }
    return false;
};

main2 = function() {
    console.log("match")
    console.log(match("hellofskdlfjsdlfjsldjflksdworld", "helloworld"));
    console.log(match("hellod", "hellowd"));
    console.log(match("hello*xxxxxxxxxxhemantxxxxxxxxxxxx", "hellnt"));
    console.log()
};

function isPrime(n) {
    var answer = (n > 1) ? true : false;
    for (var i = 2; i * i < n; ++i) {
        if (n % i === 0) {
            answer = false;
            break;
        }
    }
    return answer;
};

main3 = function() {
    process.stdout.write("Prime numbers under 100 :: ");
    for (var i = 0; i < 100; i++) {
        if (isPrime(i))
            process.stdout.write(i + " ");
    }
    console.log()
};

function isUniqueChar(str) {
    var bitarr = new Array(26).fill(0);
    var index;
    var size = str.length;
    var small = "a".charCodeAt(0)
    var big = "A".charCodeAt(0)

    var size = str.length;
    for (var i = 0; i < size; i++) {
        var c = str.charCodeAt(i);
        if ((big <= c) && (big + 26 >= c)) {
            c = (c - big);
        } else if ((small <= c) && (small + 26 >= c)) {
            c = (c - small);
        } else {
            console.log("Unknown Char!");
            return false;
        }
        if (bitarr[c] !== 0) {
            console.log("Duplicate detected!");
            return false;
        }
        bitarr[c] = 1;
    }
    console.log("No duplicate detected!");
    return true;
};

main5 = function() {
    console.info("isUniqueChar", isUniqueChar("aple"));
    console.info("isUniqueChar", isUniqueChar("apple"));
};

function ToUpper(s) {
    if (s >= 97 && s <= (97 + 25)) {
        s = String.fromCharCode(s - 32);
    }
    return s;
};

function ToLower(s) {
    if (s >= 65 && s <= (65 + 25)) {
        s = String.fromCharCode(s + 32);
    }
    return s;
};

function LowerUpper(s) {
    if (s >= 97 && s <= (97 + 25)) {
        s = String.fromCharCode(s - 32);
    }
    else if (s >= 65 && s <= (65 + 25)) {
        s = String.fromCharCode(s + 32);
    }
    return s;
};

main6 = function() {
    console.info(ToLower('A'));
    console.info(ToUpper('a'));
    console.info(LowerUpper('s'));
    console.info(LowerUpper('S'));
};

function isPermutation(s1, s2) {
    var count = new Array(256).fill(0);
    var length = s1.length;
    if (s2.length !== length) {
        console.info("is permutation return false");
        return false;
    }

    for (var i = 0; i < length; i++) {
        count[s1.charCodeAt(i)]++;
        count[s2.charCodeAt(i)]--;
    }

    for (var i = 0; i < length; i++) {
        if (count[s1.charCodeAt(i)] !== 0) {
            console.info("is permutation return false");
            return false;
        }
    }

    console.info("is permutation return true");
    return true;
};

main7 = function() {
    console.info(isPermutation("apple", "plepa"));
    console.info(isPermutation("appleb", "plepaa"));
};

function isPalindrome(str) {
    var i = 0;
    var j = str.length - 1;
    while ((i < j) && (str[i] == str[j])) {
        i++;
        j--;
    }

    if (i < j) {
        console.info("String is not a Palindrome");
        return false;
    }
    else {
        console.info("String is a Palindrome");
        return true;
    }
};

main8 = function() {
    console.info(isPalindrome("hello"));
    console.info(isPalindrome("eoloe"));
};

function pow(x, n) {
    var value;
    if (n === 0) {
        return (1);
    }
    else if (n % 2 === 0) {
        value = pow(x, Math.floor(n / 2));
        return (value * value);
    }
    else {
        value = pow(x, Math.floor(n / 2));
        return (x * value * value);
    }
};

main9 = function() {
    console.info(pow(5, 2));
};

function myStrcmp(a, b) {
    var index = 0;
    var len1 = a.length;
    var len2 = b.length;
    var minlen = len1;

    if (len1 > len2) {
        minlen = len2;
    }
    while ((index < minlen) && (a[index] === b[index])) {
        index++;
    }
    if (index === len1 && index === len2) {
        return 0;
    }
    else if (len1 === index) {
        return -1;
    }
    else if (len2 === index) {
        return 1;
    }
    else {
        return (a.charCodeAt(index) - b.charCodeAt(index));
    }
};

main10 = function() {
    console.info(myStrcmp("aba", "abs"));
};

function reverseString(str) {
    var a = (str).split('');
    reverseStringUtil(a);
    var expn = a.join('');
    return expn;
};

function reverseStringUtil(a) {
    var lower = 0;
    var upper = a.length - 1;
    var tempChar;

    while (lower < upper) {
        tempChar = a[lower];
        a[lower] = a[upper];
        a[upper] = tempChar;
        lower++;
        upper--;
    }
};

function reverseStringUtil2(a, lower, upper) {
    var tempChar;

    while (lower < upper) {
        tempChar = a[lower];
        a[lower] = a[upper];
        a[upper] = tempChar;
        lower++;
        upper--;
    }
};


function reverseWords(str) {
    var a = str.split("");
    var length = a.length;
    var lower;
    var upper = -1;
    lower = 0;
    for (var i = 0; i <= length; i++) {
        if (a[i] === ' ') {
            reverseStringUtil2(a, lower, upper);
            lower = i + 1;
            upper = i;
        } else {
            upper++;
        }
    }
    reverseStringUtil2(a, lower, upper - 1);
    reverseStringUtil2(a, 0, length - 1);
    return a.join("");
};


main11 = function() {
    console.info(reverseString("apple"));
    console.info(reverseWords("hello world"));
};

function printAnagram(str) {
    var a = str.split('');
    var n = a.length;
    printAnagramUtil(a, n, n);
};

function printAnagramUtil(a, max, n) {
    if (max === 1) {
        console.info(a);
    }
    var temp;
    for (var i = -1; i < max - 1; i++) {
        if (i !== -1) {
            temp = a[i];
            a[i] = a[max - 1];
            a[max - 1] = temp;
        }
        printAnagramUtil(a, max - 1, n);
        if (i !== -1) {
            temp = a[i];
            a[i] = a[max - 1];
            a[max - 1] = temp;
        }
    }
};

main12 = function() {
    printAnagram("123");
};

shuffle = function(str) {
    var ar = str.split('');
    var n = Math.floor(ar.length / 2);
    var count = 0;
    var k = 1;
    var temp;
    var temp2;
    for (var i = 1; i < n; i = i + 2) {
        temp = ar[i];
        k = i;
        do {
            k = (2 * k) % (2 * n - 1);
            temp2 = temp;
            temp = ar[k];
            ar[k] = temp2;
            count++;
        } while (i !== k);

        if (count === (2 * n - 2)) {
            break;
        }
    }
    return ar.join("")
};

main13 = function() {
    console.log(shuffle("ABCDE12345"));
};

addBinary = function(first, second) {
    var size1 = first.length;
    var size2 = second.length;
    var totalIndex;
    var total;
    if (size1 > size2) {
        total = new Array(size1 + 2).fill(null);
        totalIndex = size1;
    }
    else {
        total = new Array(size2 + 2).fill(null);
        totalIndex = size2;
    }
    total[totalIndex + 1] = '';
    var carry = 0;
    size1--;
    size2--;
    while (size1 >= 0 || size2 >= 0) {
        var firstValue = (size1 < 0) ? 0 : first[size1] - '0';
        var secondValue = (size2 < 0) ? 0 : second[size2] - '0';
        var sum = firstValue + secondValue + carry;
        carry = sum >> 1;
        sum = sum & 1;
        total[totalIndex] = (sum === 0) ? '0' : '1';
        totalIndex--;
        size1--;
        size2--;
    }
    total[totalIndex] = (carry === 0) ? '0' : '1';
    return total.join("");
};

main14 = function() {
    console.info(addBinary("1000", "11111111"));
};

main = function() {
    main1();
    main2();
    main3();
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
};

main();