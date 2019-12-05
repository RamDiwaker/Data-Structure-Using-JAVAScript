function fun1(n) {
    var m = 0;
    for (var i = 0; i < n; i++) {
        m += 1;
    }
    return m;
};

function fun2(n) {
    var m = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            m += 1;
        }
    }
    return m;
};

function fun3(n) {
    var m = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < i; j++) {
            m += 1;
        }
    }
    return m;
};

function fun4(n) {
    var i = 1;
    var m = 0;
    while (i < n) {
        m += 1;
        i = i * 2;
    };
    return m;
};

function fun5(n) {
    var i = n;
    var m = 0;
    while (i > 0) {
        m += 1;
        i = Math.floor(i / 2);
    };
    return m;
};

function fun6(n) {
    var m = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                m += 1;
            }
        }
    }
    return m;
};

function fun7(n) {
    var i;
    var j;
    var k;
    var m = 0;
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            m += 1;
        }
    }
    for (i = 0; i < n; i++) {
        for (k = 0; k < n; k++) {
            m += 1;
        }
    }
    return m;
};

function fun8(n) {
    var m = 0;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < Math.sqrt(n); j++) {
            m += 1;
        }
    }
    return m;
};

function fun9(n) {
    var m = 0;
    for (var i = n; i >= 1; i /= 2) {
        for (var j = 0; j < i; j++) {
            m += 1;
        }
    }
    return m;
};

function fun10(n) {
    var m = 0;
    for (var i = 0; i < n; i++) {
        for (var j = i; j > 0; j--) {
            m += 1;
        }
    }
    return m;
};

function fun11(n) {
    var m = 0;
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            for (var k = j + 1; k < n; k++) {
                m += 1;
            }
        }
    }
    return m;
};

function fun12(n) {
    var j = 0;
    var m = 0;
    for (var i = 0; i < n; i++) {
        for (; j < n; j++) {
            m += 1;
        }
    }
    return m;
};

function fun13(n) {
    var m = 0;
    for (var i = 1; i <= n; i *= 2) {
        for (var j = 0; j <= i; j++) {
            m += 1;
        }
    }
    return m;
};

console.log("Number of instructions O(n):: " + fun1(100));
console.log("Number of instructions O(n^2):: " + fun2(100));
console.log("Number of instructions O(n^2):: " + fun3(100));
console.log("Number of instructions O(log(n)):: " + fun4(100));
console.log("Number of instructions O(log(n)):: " + fun5(100));
console.log("Number of instructions O(n^3):: " + fun6(100));
console.log("Number of instructions O(n^2):: " + fun7(100));
console.log("Number of instructions O(n^(3/2)):: " + fun8(100));
console.log("Number of instructions O(n):: " + fun9(100));
console.log("Number of instructions O(n^2):: " + fun10(100));
console.log("Number of instructions O(n^3):: " + fun11(100));
console.log("Number of instructions O(n):: " + fun12(100));
console.log("Number of instructions O(n):: " + fun13(100));

/*
Number of instructions O(n):: 100
Number of instructions O(n^2):: 10000
Number of instructions O(n^2):: 4950
Number of instructions O(log(n)):: 7
Number of instructions O(log(n)):: 7
Number of instructions O(n^3):: 1000000
Number of instructions O(n^2):: 20000
Number of instructions O(n^(3/2)):: 1000
Number of instructions O(n):: 201
Number of instructions O(n^2):: 4950
Number of instructions O(n^3):: 166650
Number of instructions O(n):: 100
Number of instructions O(n):: 134
*/