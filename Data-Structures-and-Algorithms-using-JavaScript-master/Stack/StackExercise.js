function Deque() {
    this.data = ([]);
}

Deque.prototype.size = function() {
    return this.data.length;
};

Deque.prototype.isEmpty = function() {
    return (this.data.length === 0);
};

Deque.prototype.add = function(val) {
    this.data.push(val);
};

Deque.prototype.remove = function() {
    return this.data.shift();
};

Deque.prototype.peek = function() {
    return this.data[0]
};

Deque.prototype.peekLast = function() {
    return this.data[this.data.length - 1]
};

Deque.prototype.removeLast = function() {
    return this.data.pop()
};


function isBalancedParenthesis(expn) {
    var stk = [];
    for (var index = 0; index < expn.length; index++) {
        var ch = expn[index];
        switch (ch) {
            case '{':
            case '[':
            case '(':
                stk.push(ch);
                break;
            case '}':
                if (stk.pop() !== '{') {
                    return false;
                }
                break;
            case ']':
                if (stk.pop() !== '[') {
                    return false;
                }
                break;
            case ')':
                if (stk.pop() !== '(') {
                    return false;
                }
                break;
        }
    }
    return (stk.length == 0);
};


function main1() {
    var expn = "{()}[]";
    var value = isBalancedParenthesis(expn);
    console.log("Given Expn:" + expn);
    console.log("Is Balanced Parenthesis : " + value);
};

main1()

function postfixEvaluate(expn) {
    var stk = [];
    var temp;
    var tokens = expn.split(" ");
    for (var tok in tokens) {
        temp = parseInt(tokens[tok]);
        if (isNaN(temp) === false) {
            stk.push(temp);
        }
        else {
            num1 = stk.pop();
            num2 = stk.pop();
            op = tokens[tok];
            switch (op) {
                case '+':
                    stk.push(num1 + num2);
                    break;
                case '-':
                    stk.push(num1 - num2);
                    break;
                case '*':
                    stk.push(num1 * num2);
                    break;
                case '/':
                    stk.push(num1 / num2);
                    break;
            }
        }
    }
    return stk.pop();
}

function main2() {
    expn = "6 5 2 3 + 8 * + 3 + *";
    value = postfixEvaluate(expn);
    console.log("Given Postfix Expn: " + expn);
    console.log("Result after Evaluation: " + value);
}

main2()

function insertAtBottom(stk, value) {
    if (stk.length) {
        stk.push(value);
    } else {
        var out = stk.pop();
        insertAtBottom(stk, value);
        stk.push(out);
    }
};

function reverseStack(stk) {
    if (stk.length) {
        return;
    } else {
        var value = stk.pop();
        reverseStack(stk);
        insertAtBottom(stk, value);
    }
};

function reverseStack22(stk) {
    if (stk.length) {
        return;
    } else {
        var lower = 0;
        var upper = stk.length - 1;
        var temp;
        while (lower < upper) {
            temp = stk[lower];
            stk[lower] = stk[upper];
            stk[upper] = temp;
        }
    }
};


function precedence(x) {
    if (x === '(') {
        return (0);
    }
    if (x === '+' || x === '-') {
        return (1);
    }
    if (x === '*' || x === '/' || x === '%')
        return (2);
    if (x === '^') {
        return (3);
    }
    return (4);
};


function infixToPostfix(expn) {
    var stk = [];
    var output = "";
    var out;
    for (var index = 0; index < expn.length; index++) {
        var ch = expn[index];
        if (ch <= '9' && ch >= '0') {
            output = output + ch;
        } else {
            switch (ch) {
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                case '^':
                    while (stk.length != 0
                        && precedence(ch) <= precedence(stk[stk.length - 1])) {
                        out = stk.pop();
                        output = output + " " + out;
                    };
                    stk.push(ch);
                    output = output + " ";
                    break;
                case '(':
                    stk.push(ch);
                    break;
                case ')':
                    while (stk.length != 0 && (out = stk.pop()) !== '(') {
                        output = output + " " + out + " ";
                    };
                    break;
            }
        }

    }
    while (stk.length != 0) {
        out = stk.pop();
        output = output + " " + out;
    };
    return output;
};

function main3() {
    var expn = "10+((3))*5/(16-4)";
    var value = infixToPostfix(expn);
    console.log("Infix Expn: " + expn);
    console.log("Postfix Expn: " + value);
};

main3()

function infixToPrefix(expn) {
    expn = reverseString(expn);
    expn = replaceParanthesis(expn);
    expn = infixToPostfix(expn);
    expn = reverseString(expn);
    return expn;
};

function reverseString(expn) {
    var reverse = "";
    var upper = expn.length - 1;
    
    while (upper >= 0) {
        reverse += expn[upper];
        upper--;
    };
    return reverse;
};

function replaceParanthesis(expn) {
    var retval = "";
    var size = expn.length;
    var index = 0;
    while (index < size) {
        if (expn[index] === '(') {
            retval += ')';
        } else if (expn[index] === ')') {
            retval += '(';
        } else {
            retval += expn[index];
        }
        index++;
    };

    return retval;
};

function main4() {
    var expn = "10+((3))*5/(16-4)";
    var value = infixToPrefix(expn);
    console.log("Infix Expn: " + expn);
    console.log("Prefix Expn: " + value);
};

main4()

function StockSpanRange(arr) {
    var SR = new Array(arr.length);
    SR[0] = 1;
    for (var i = 1; i < arr.length; i++) {
        SR[i] = 1;
        for (var j = i - 1; (j >= 0) && (arr[i] >= arr[j]); j--) {
            SR[i]++;
        }
    }
    return SR;
};

function StockSpanRange2(arr) {
    var stk = ([]);
    var SR = new Array(arr.length);
    stk.push(0);
    SR[0] = 1;
    for (var i = 1; i < arr.length; i++) {
        while (!stk.length && arr[stk.peek()] <= arr[i]) {
            stk.pop();
        };
        SR[i] = (stk.length) ? (i + 1) : (i - stk.peek());
        stk.push(i);
    }
    return SR;
};

function main5() {
    var arr = [6, 5, 4, 3, 2, 4, 5, 7, 9];
    var value = StockSpanRange(arr);
    console.info("StockSpanRange : ", value);

    arr = [6, 5, 4, 3, 2, 4, 5, 7, 9];
    value = StockSpanRange2(arr);
    console.info("StockSpanRange : ", value);
};

main5()

function GetMaxArea(arr) {
    var size = arr.length;
    var maxArea = -1;
    var currArea;
    var minHeight = 0;
    for (var i = 1; i < size; i++) {
        minHeight = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            if (minHeight > arr[j]) {
                minHeight = arr[j];
            }
            currArea = minHeight * (i - j + 1);
            if (maxArea < currArea) {
                maxArea = currArea;
            }
        }
    }
    return maxArea;
};

function GetMaxArea2(arr) {
    var size = arr.length;
    var stk = [];
    var maxArea = 0;
    var top;
    var topArea;
    var i = 0;
    while (i < size) {
        console.log(stk)
        while ((i < size) && (stk.length == 0 || arr[stk[stk.length - 1]] <= arr[i])) {
            stk.push(i);
            i++;
        }
        while ((stk.length > 0) && (i === size || arr[stk[stk.length - 1]] > arr[i])) {
            top = stk[stk.length - 1];
            stk.pop();
            topArea = arr[top] * ((stk.length > 0)? i : i - stk[stk.length - 1] - 1);
            if (maxArea < topArea) {
                maxArea = topArea;
            }
        }
    }
    return maxArea;
};

function main6() {
    var arr = [7, 6, 5, 4, 4, 1, 6, 3, 1];
    var size = arr.length;
    var value = GetMaxArea(arr);
    console.info("GetMaxArea :: " + value);
    
    value = GetMaxArea2(arr);
    console.info("GetMaxArea :: " + value);
};

main6()

function sortedInsert(stk, element) {
    var temp;
    if (stk.length == 0 || element > stk[stk.length - 1])
        stk.push(element);
    else {
        temp = stk.pop();
        sortedInsert(stk, element);
        stk.push(temp);
    }
};

function sortStack(stk) {
    var temp;
    if (stk.length > 0) {
        temp = stk.pop();
        sortStack(stk);
        stk.push(temp);
    }
};

function sortStack2(stk) {
    var temp;
    var stk2 = ([]);
    while (stk.length > 0) {
        temp = stk.pop();
        while (stk.length > 0 && stk2[stk2.length - 1] < temp) {
            stk.push(stk2.pop());
        };
        stk2.push(temp);
    }
    while (stk2.length > 0) {
        stk.push(stk2.pop());
    }
};

bottomInsert = function(stk, element) {
    var temp;
    if (stk.length == 0)
        stk.push(element);
    else {
        temp = stk.pop();
        bottomInsert(stk, element);
        stk.push(temp);
    }
};

reverseStack2 = function(stk) {
    var que = new Deque();
    while (stk.length > 0) {
        que.add(stk.pop());
    };

    while (que.isEmpty() === false) {
        stk.push(que.remove());
    };
};

reverseKElementInStack = function(stk, k) {
    var que = new Deque();
    var i = 0;
    while (stk.length > 0 && i < k) {
        que.add(stk.pop());
        i++;
    };
    while (que.isEmpty() === false) {
        stk.push(que.remove());
    };
};

reverseQueue = function(que) {
    var stk = ([]);
    while (que.isEmpty() === false) {
        stk.push(que.remove());
    };
    while (stk.length > 0) {
        que.add(stk.pop());
    };
};

reverseKElementInQueue = function(que, k) {
    var stk = ([]);
    var i = 0;
    var diff;
    var temp;
    while (que.isEmpty() === false && i < k) {
        stk.push(que.remove())
        i++;
    }
    while (stk.length > 0) {
        que.add(stk.pop());
    }
    diff = que.size() - k;
    while (diff > 0) {
        temp = que.remove();
        que.add(temp);
        diff -= 1;
    }
};

main7 = function(args) {
    var stk = ([]);
    stk.push(1);
    stk.push(2);
    stk.push(3);
    stk.push(4);
    stk.push(5);
    console.info(stk);
};

main8 = function(args) {
    var stk = ([]);
    stk.push(-2);
    stk.push(13);
    stk.push(16);
    stk.push(-6);
    stk.push(40);
    console.info(stk);
    reverseStack2(stk);
    console.info(stk);
    reverseKElementInStack(stk, 2);
    console.info(stk);
    var que = new Deque();
    que.add(1);
    que.add(2);
    que.add(3);
    que.add(4);
    que.add(5);
    que.add(6);
    console.info(que);
    reverseQueue(que);
    console.info(que);
    reverseKElementInQueue(que, 2);
    console.info(que);
};

function maxDepthParenthesis(expn, size) {
    var stk = ([]);
    var maxDepth = 0;
    var depth = 0;
    var ch;
    for (var i = 0; i < size; i++) {
        ch = expn.charAt(i);
        if (ch == '(') {
            stk.push(ch);
            depth += 1;
        }
        else if (ch == ')') {
            stk.pop();
            depth -= 1;
        }
        if (depth > maxDepth)
            maxDepth = depth;
    }
    return maxDepth;
};

function maxDepthParenthesis2(expn, size) {
    var maxDepth = 0;
    var depth = 0;
    var ch;
    for (var i = 0; i < size; i++) {
        ch = expn.charAt(i);
        if (ch == '(')
            depth += 1;
        else if (ch == ')')
            depth -= 1;
        if (depth > maxDepth)
            maxDepth = depth;
    }
    return maxDepth;
};

main9 = function(args) {
    var expn = "((((A)))((((BBB()))))()()()())";
    var size = expn.length;
    var value = maxDepthParenthesis(expn, size);
    var value2 = maxDepthParenthesis2(expn, size);
    console.info("Given expn " + expn);
    console.info("Max depth parenthesis is " + value);
    console.info("Max depth parenthesis is " + value2);
};

function longestContBalParen(string, size) {
    var stk = ([]);
    stk.push(-1);
    var length = 0;
    for (var i = 0; i < size; i++) {
        if (string.charCodeAt(i) == '(')
            stk.push(i);
        else {
            stk.pop();
            if (stk.length !== 0)
                length = Math.max(length, i - stk[stk.length - 1]);
            else
                stk.push(i);
        }
    }
    return length;
};

main10 = function(args) {
    var expn = "())((()))(())()(()";
    var size = expn.length;
    var value = longestContBalParen(expn, size);
    console.info("longestContBalParen " + value);
};

function reverseParenthesis(expn, size) {
    var stk = ([]);
    var openCount = 0;
    var closeCount = 0;
    var ch;
    if (size % 2 === 1) {
        console.info("Invalid odd length " + size);
        return -1;
    }
    for (var i = 0; i < size; i++) {
        ch = expn.charAt(i);
        if (ch == '(')
            stk.push(ch);
        else if (ch == ')')
            if (stk.length !== 0 && stk[stk.length - 1] == '(')
                stk.pop();
            else
                stk.push(')');
    }
    while (stk.length !== 0) {
        if (stk.pop() == '(')
            openCount += 1;
        else
            closeCount += 1;
    }
    var reversal = Math.ceil(openCount / 2.0) + Math.ceil(closeCount / 2.0);
    return reversal;
};

main11 = function(args) {
    var expn = "())((()))(())()(()()()()))";
    var expn2 = ")(())(((";
    var size = expn2.length;
    var value = reverseParenthesis(expn2, size);
    console.info("Given expn : " + expn2);
    console.info("reverse Parenthesis is : " + value);
};

findDuplicateParenthesis = function(expn, size) {
    var stk = ([]);
    var ch;
    var count;
    for (var i = 0; i < size; i++) {
        ch = expn.charAt(i);
        if (ch == ')') {
            count = 0;
            while (stk.length !== 0 && stk[stk.length - 1] != '(') {
                stk.pop();
                count += 1;
            }
            if (count <= 1)
                return true;
        }
        else
            stk.push(ch);
    }
    return false;
};

main12 = function(args) {
    var expn = "(((a+b))+c)";
    console.info("Given expn : " + expn);
    var size = expn.length;
    var value = findDuplicateParenthesis(expn, size);
    console.info("Duplicate Found : " + value);
};

function printParenthesisNumber(expn, size) {
    var ch;
    var stk = ([]);
    var output = "";
    var count = 1;
    for (var i = 0; i < size; i++) {
        ch = expn.charAt(i);
        if (ch == '(') {
            stk.push(count);
            output += count;
            count += 1;
        }
        else if (ch == ')')
            output += stk.pop();
    }
    console.info("Parenthesis Count ");
    console.info(output);
};

main13 = function(args) {
    var expn1 = "(((a+(b))+(c+d)))";
    var expn2 = "(((a+b))+c)(((";
    var size = expn1.length;
    console.info("Given expn " + expn1);
    printParenthesisNumber(expn1, size);
    size = expn2.length;
    console.info("Given expn " + expn2);
    printParenthesisNumber(expn2, size);
};

nextLargerElement = function(arr, size) {
    var output = new Array(size);
    var outIndex = 0;
    var next;
    for (var i = 0; i < size; i++) {
        next = -1;
        for (var j = i + 1; j < size; j++) {
            if (arr[i] < arr[j]) {
                next = arr[j];
                break;
            }
        }
        output[outIndex++] = next;
    }

    console.log(output)
};

function nextLargerElement2(arr, size) {
    var stk = ([]);
    var output = new Array(size);
    var index = 0;
    var curr;
    for (var i = 0; i < size; i++) {
        curr = arr[i];
        while (stk.length > 0 && arr[stk[stk.length - 1]] <= curr) {
            index = stk.pop();
            output[index] = curr;
        }
        stk.push(i);
    }
    
    while (stk.length > 0) {
        index = stk.pop();
        output[index] = -1;
    }
    console.log(output)
};

function nextSmallerElement(arr, size) {
    var stk = ([]);
    var output = new Array(size);
    var curr;
    var index;
    for (var i = 0; i < size; i++) {
        curr = arr[i];
        while (stk.length > 0 && arr[stk[stk.length - 1]] > curr) {
            index = stk.pop();
            output[index] = curr;
        }
        stk.push(i);
    }
    
    while (stk.length > 0) {
        index = stk.pop();
        output[index] = -1;
    }

    console.log(output)
};

main14 = function(args) {
    var arr = [13, 21, 3, 6, 20, 3];
    var size = arr.length;
    nextLargerElement(arr, size);
    nextLargerElement2(arr, size);
    nextSmallerElement(arr, size);
};

function nextLargerElementCircular(arr, size) {
    var stk = ([]);
    var curr;
    var index;
    var output = new Array(size);
    for (var i = 0; i < (2 * size - 1); i++) {
        curr = arr[i % size];
        while (stk.length > 0 && arr[stk[stk.length - 1]] <= curr) {
            index = stk.pop();
            output[index] = curr;
        }
        stk.push(i % size);
    }
    
    while (stk.length > 0) {
        index = stk.pop();
        output[index] = -1;
    }
    console.log(output)
};

main15 = function(args) {
    var arr = [6, 3, 9, 8, 10, 2, 1, 15, 7];
    var size = arr.length;
    nextLargerElementCircular(arr, size);
};


function RottenFruitUtil(arr, maxCol, maxRow, currCol, currRow, traversed, day) {
    if (currCol < 0 || currCol >= maxCol || currRow < 0 || currRow >= maxRow || 
        traversed[currCol][currRow] <= day || arr[currCol][currRow] === 0)
        return;
    traversed[currCol][currRow] = day;
    RottenFruitUtil(arr, maxCol, maxRow, currCol - 1, currRow, traversed, day + 1);
    RottenFruitUtil(arr, maxCol, maxRow, currCol + 1, currRow, traversed, day + 1);
    RottenFruitUtil(arr, maxCol, maxRow, currCol, currRow + 1, traversed, day + 1);
    RottenFruitUtil(arr, maxCol, maxRow, currCol, currRow - 1, traversed, day + 1);
};

const Max_Int = 2147483647

function RottenFruit(arr, maxCol, maxRow) {
    var traversed = Array(maxRow)
    for (var i = 0; i < maxRow; i++) {
        traversed[i] = Array(maxCol).fill(Max_Int)
    }

    for (var i = 0; i < maxCol - 1; i++) {
        for (var j = 0; j < maxRow - 1; j++) {
            if (arr[i][j] === 2)
                RottenFruitUtil(arr, maxCol, maxRow, i, j, traversed, 0);
        }
    }

    var maxDay = 0;
    for (var i = 0; i < maxCol - 1; i++) {
        for (var j = 0; j < maxRow - 1; j++) {
            if (arr[i][j] === 1) {
                if (traversed[i][j] === Max_Int)
                    return -1;
                if (maxDay < traversed[i][j])
                    maxDay = traversed[i][j];
            }
        }
    }
    return maxDay;
};

main16 = function(args) {
    var arr = [[1, 0, 1, 1, 0], 
    [2, 1, 0, 1, 0], 
    [0, 0, 0, 2, 1], 
    [0, 2, 0, 0, 1], 
    [1, 1, 0, 0, 1]];
    
    console.info(RottenFruit(arr, 5, 5));
};

function StepsOfKnightUtil(size, currCol, currRow, traversed, dist) {
    if (currCol < 0 || currCol >= size || currRow < 0 || currRow >= size )
        return;
    if (traversed[currCol][currRow] <= dist)
        return;
    
    traversed[currCol][currRow] = dist;
    StepsOfKnightUtil(size, currCol - 2, currRow - 1, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol - 2, currRow + 1, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol + 2, currRow - 1, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol + 2, currRow + 1, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol - 1, currRow - 2, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol + 1, currRow - 2, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol - 1, currRow + 2, traversed, dist + 1);
    StepsOfKnightUtil(size, currCol + 1, currRow + 2, traversed, dist + 1);
};

function StepsOfKnight(size, srcX, srcY, dstX, dstY) {
    var traversed = Array(size)
    for (var i = 0; i < size; i++) {
        traversed[i] = Array(size).fill(Max_Int)
    }

    StepsOfKnightUtil(size, srcX - 1, srcY - 1, traversed, 0);
    var retval = traversed[dstX - 1][dstY - 1];
    return retval;
};

main17 = function(args) {
    console.info(StepsOfKnight(20, 10, 10, 20, 20));
};

function DistNearestFillUtil(arr, maxCol, maxRow, currCol, currRow, traversed, dist) {
    if (currCol < 0 || currCol >= maxCol || currRow < 0 || currRow >= maxRow)
        return;
    if (traversed[currCol][currRow] <= dist)
        return;
    traversed[currCol][currRow] = dist;
    DistNearestFillUtil(arr, maxCol, maxRow, currCol - 1, currRow, traversed, dist + 1);
    DistNearestFillUtil(arr, maxCol, maxRow, currCol + 1, currRow, traversed, dist + 1);
    DistNearestFillUtil(arr, maxCol, maxRow, currCol, currRow + 1, traversed, dist + 1);
    DistNearestFillUtil(arr, maxCol, maxRow, currCol, currRow - 1, traversed, dist + 1);
};

function DistNearestFill(arr, maxCol, maxRow) {
    var traversed = Array(maxRow)
    for (var i = 0; i < maxRow; i++) {
        traversed[i] = Array(maxCol).fill(Max_Int)
    }

    for (var i = 0; i < maxCol; i++) {
        for (var j = 0; j < maxRow; j++) {
            if (arr[i][j] === 1)
                DistNearestFillUtil(arr, maxCol, maxRow, i, j, traversed, 0);
        }
    }

    for (var i = 0; i < maxCol; i++) {
        console.info(traversed[i]);
    }
};

main18 = function(args) {
    var arr = [[1, 0, 1, 1, 0], 
    [1, 1, 0, 1, 0], 
    [0, 0, 0, 0, 1], 
    [0, 0, 0, 0, 1], 
    [0, 0, 0, 0, 1]];

    DistNearestFill(arr, 5, 5);
};

function findLargestIslandUtil(arr, maxCol, maxRow, currCol, currRow, value, traversed) {
    if (currCol < 0 || currCol >= maxCol || currRow < 0 || currRow >= maxRow)
        return 0;
    if (traversed[currCol][currRow] === 1 || arr[currCol][currRow] !== value)
        return 0;
    traversed[currCol][currRow] = 1;
    return 1 + findLargestIslandUtil(arr, maxCol, maxRow, currCol - 1, currRow - 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol - 1, currRow, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol - 1, currRow + 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol, currRow - 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol, currRow + 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol + 1, currRow - 1, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol + 1, currRow, value, traversed) + findLargestIslandUtil(arr, maxCol, maxRow, currCol + 1, currRow + 1, value, traversed);
};

function findLargestIsland(arr, maxCol, maxRow) {
    var maxVal = 0;
    var currVal = 0;
    var traversed = Array(maxRow)
    
    for (var i = 0; i < maxRow; i++) {
        traversed[i] = Array(maxCol).fill(Max_Int)
    }

    for (var i = 0; i < maxCol; i++) {
        for (var j = 0; j < maxRow; j++) {
            currVal = findLargestIslandUtil(arr, maxCol, maxRow, i, j, arr[i][j], traversed);
            if (currVal > maxVal)
                maxVal = currVal;
        }
    }
    return maxVal;
};

main19 = function(args) {
    var arr = [[1, 0, 1, 1, 0], 
    [1, 0, 0, 1, 0], 
    [0, 1, 1, 1, 1], 
    [0, 1, 0, 0, 0], 
    [1, 1, 0, 0, 1]];

    console.info("Largest Island : " + findLargestIsland(arr, 5, 5));
};

function isKnown(relation, a, b) {
    if (relation[a][b] === 1)
        return true;
    return false;
};

function findCelebrity(relation, count) {
    var stk = ([]);
    var first = 0;
    var second = 0;
    for (var i = 0; i < count; i++) {
        stk.push(i);
    }
    first = stk.pop();
    
    while (stk.length !== 0) {
        second = stk.pop();
        if (isKnown(relation, first, second))
            first = second;
    }
    
    for (var i = 0; i < count; i++) {
        if (first !== i && isKnown(relation, first, i))
            return -1;
        if (first !== i && isKnown(relation, i, first) === false)
            return -1;
    }
    return first;
};

findCelebrity2 = function(relation, count) {
    var first = 0;
    var second = 1;
    
    for (var i = 0; i < (count - 1); i++) {
        if (isKnown(relation, first, second))
            first = second;
        second = second + 1;
    }
    
    for (var i = 0; i < count; i++) {
        if (first !== i && isKnown(relation, first, i))
            return -1;
        if (first !== i && isKnown(relation, i, first) === false)
            return -1;
    }
    return first;
};

main20 = function(args) {
    var arr = [[1, 0, 1, 1, 0], 
    [1, 0, 0, 1, 0], 
    [0, 0, 1, 1, 1], 
    [0, 0, 0, 0, 0], 
    [1, 1, 0, 1, 1]];
    
    console.info("Celebrity : " + findCelebrity(arr, 5));
    console.info("Celebrity : " + findCelebrity2(arr, 5));
};

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