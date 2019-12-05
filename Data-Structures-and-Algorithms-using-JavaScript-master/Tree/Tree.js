
function Queue() {
    this.stk1 = [];
    this.stk2 = [];
}

Queue.prototype.add = function(value) {
    this.stk1.push(value);
};

Queue.prototype.remove = function() {
    var value;
    if (this.stk2.length > 0) {
        return this.stk2.pop();
    }
    while (this.stk1.length > 0) {
        value = this.stk1.pop();
        this.stk2.push(value);
    };
    return this.stk2.pop();
};

Queue.prototype.isEmpty = function() {
    if (this.stk2.length === 0 && this.stk1.length === 0) {
        return true;
    }
    return false;
};

Queue.prototype.length = function() {
    return this.stk1.length + this.stk2.length;
};

const MAX_INT = 2147483647;
const MIN_INT = -2147483647;

function Tree() {
    this.root = null;

    function Node(data, left = null, right = null) {
        this.value = data;
        this.lChild = left;
        this.rChild = right;
    }

    Tree.Node = Node
}

Tree.prototype.levelOrderBinaryTree = function(arr) {
    this.root = this.levelOrderBinaryTreeUtil(arr, 0);
};


Tree.prototype.levelOrderBinaryTreeUtil = function(arr, start) {
    var size = arr.length;
    var curr = new Tree.Node(arr[start]);
    var left = 2 * start + 1;
    var right = 2 * start + 2;

    if (left < size)
        curr.lChild = this.levelOrderBinaryTreeUtil(arr, left);
    if (right < size)
        curr.rChild = this.levelOrderBinaryTreeUtil(arr, right);

    return curr;
};

Tree.prototype.InsertNode = function(value) {
    this.root = this.InsertNodeUtil(this.root, value);
};

Tree.prototype.InsertNodeUtil = function(node, value) {
    if (node == null) {
        node = new Tree.Node(value, null, null);
    }
    else {
        if (node.value > value) {
            node.lChild = this.InsertNodeUtil(node.lChild, value);
        }
        else {
            node.rChild = this.InsertNodeUtil(node.rChild, value);
        }
    }
    return node;
};

Tree.prototype.PrintPreOrder = function() {
    process.stdout.write("Pre Order Tree: ");
    this.PrintPreOrderUtil(this.root);
    process.stdout.write("\n")
};

Tree.prototype.PrintPreOrderUtil = function(node) {
    if (node != null) {
        process.stdout.write(node.value + " ");
        this.PrintPreOrderUtil(node.lChild);
        this.PrintPreOrderUtil(node.rChild);
    }
};

Tree.prototype.NthPreOrder = function(index) {
    var counter = [0];
    this.NthPreOrderUtil(this.root, index, counter);
};

Tree.prototype.NthPreOrderUtil = function(node, index, counter) {
    if (node != null) {
        counter[0]++;
        if (counter[0] === index) {
            console.info("Nth node is :: " + node.value);
        }
        this.NthPreOrderUtil(node.lChild, index, counter);
        this.NthPreOrderUtil(node.rChild, index, counter);
    }
};

Tree.prototype.PrintPostOrder = function() {
    process.stdout.write("Post Order Tree: ");
    this.PrintPostOrderUtil(this.root);
    process.stdout.write("\n");
};

Tree.prototype.PrintPostOrderUtil = function(node) {
    if (node != null) {
        this.PrintPostOrderUtil(node.lChild);
        this.PrintPostOrderUtil(node.rChild);
        process.stdout.write(node.value + " ");
    }
};

Tree.prototype.NthPostOrder = function(index) {
    var counter = [0];
    this.NthPostOrderUtil(this.root, index, counter);
};

Tree.prototype.NthPostOrderUtil = function(node, index, counter) {
    if (node != null) {
        this.NthPostOrderUtil(node.lChild, index, counter);
        this.NthPostOrderUtil(node.rChild, index, counter);
        counter[0]++;
        if (counter[0] === index) {
            console.info(" Nth Post order : " + node.value);
        }
    }
};

Tree.prototype.PrintInOrder = function() {
    process.stdout.write("In Order Tree: ");
    this.PrintInOrderUtil(this.root);
    process.stdout.write("\n")
};

Tree.prototype.PrintInOrderUtil = function(node) {
    if (node != null) {
        this.PrintInOrderUtil(node.lChild);
        process.stdout.write(node.value + " ");
        this.PrintInOrderUtil(node.rChild);
    }
};

Tree.prototype.NthInOrder = function(index) {
    var counter = [0];
    this.NthInOrderUtil(this.root, index, counter);
};

Tree.prototype.NthInOrderUtil = function(node, index, counter) {
    if (node != null) {
        this.NthInOrderUtil(node.lChild, index, counter);
        counter[0]++;
        if (counter[0] === index) {
            console.log("Nth InOrder Node : " + node.value);
        }
        this.NthInOrderUtil(node.rChild, index, counter);
    }
};

Tree.prototype.PrintBredthFirst = function() {
    var que = new Queue();
    var temp;

    if (this.root != null)
        que.add(this.root);

    process.stdout.write("Breadth First : ");
    while (que.isEmpty() === false) {
        temp = que.remove();
        process.stdout.write(temp.value + " ");
        if (temp.lChild != null)
            que.add(temp.lChild);
        if (temp.rChild != null)
            que.add(temp.rChild);
    }
    process.stdout.write("\n");
};

Tree.prototype.PrintDepthFirst = function() {
    var stk = ([]);
    var temp;
    if (this.root != null)
        stk.push(this.root);

    process.stdout.write("Depth First : ");
    while (stk.isEmpty() === false) {
        temp = stk.pop();
        process.stdout.write(temp.value + " ");
        if (temp.lChild != null)
            stk.push(temp.lChild);
        if (temp.rChild != null)
            stk.push(temp.rChild);
    }
    process.stdout.write("\n");
};

Tree.prototype.PrintLevelOrderLineByLine = function() {
    var que1 = new Queue();
    var que2 = new Queue();
    var temp = null;
    if (this.root != null)
        que1.add(this.root);
    process.stdout.write("Level Order LineByLine : \n");
    while (que1.length() !== 0 || que2.length() !== 0) {
        while (que1.length() !== 0) {
            temp = que1.remove();
            process.stdout.write(" " + temp.value);
            if (temp.lChild != null)
                que2.add(temp.lChild);
            if (temp.rChild != null)
                que2.add(temp.rChild);
        }
        process.stdout.write("\n");

        while (que2.length() !== 0) {
            temp = que2.remove();
            process.stdout.write(" " + temp.value);
            if (temp.lChild != null)
                que1.add(temp.lChild);
            if (temp.rChild != null)
                que1.add(temp.rChild);
        }
        process.stdout.write("\n");
    }
};

Tree.prototype.PrintLevelOrderLineByLine2 = function() {
    var que = new Queue();
    var temp = null;
    var count = 0;
    if (this.root != null)
        que.add(this.root);

    process.stdout.write("Level Order LineByLine : \n");
    while (que.length() !== 0) {
        count = que.length();
        while (count > 0) {
            temp = que.remove();
            process.stdout.write(" " + temp.value);
            if (temp.lChild != null)
                que.add(temp.lChild);
            if (temp.rChild != null)
                que.add(temp.rChild);
            count -= 1;
        }
        process.stdout.write("\n");
    }
};

Tree.prototype.PrintSpiralTree = function() {
    var stk1 = ([]);
    var stk2 = ([]);
    var temp;
    if (this.root != null)
        stk1.push(this.root);

    process.stdout.write("Spiral Tree : \n");
    while (stk1.length !== 0 || stk2.length !== 0) {
        while (stk1.length !== 0) {
            temp = stk1.pop();
            process.stdout.write(" " + temp.value);
            if (temp.rChild != null)
                stk2.push(temp.rChild);
            if (temp.lChild != null)
                stk2.push(temp.lChild);
        }
        process.stdout.write("\n");
        while (stk2.length !== 0) {
            temp = stk2.pop();
            process.stdout.write(" " + temp.value);
            if (temp.lChild != null)
                stk1.push(temp.lChild);
            if (temp.rChild != null)
                stk1.push(temp.rChild);
        }
        process.stdout.write("\n");
    }
};

Tree.prototype.Find = function(value) {
    var curr = this.root;
    while (curr != null) {
        if (curr.value === value) {
            return true;
        }
        else if (curr.value > value) {
            curr = curr.lChild;
        }
        else {
            curr = curr.rChild;
        }
    }
    return false;
};

Tree.prototype.Find2 = function(value) {
    var curr = this.root;
    while (curr != null && curr.value !== value) {
        curr = (curr.value > value) ? curr.lChild : curr.rChild;
    };
    return curr != null;
};

Tree.prototype.FindMin = function() {
    var node = this.root;
    if (node == null) {
        return MAX_INT;
    }
    while (node.lChild != null) {
        node = node.lChild;
    }
    return node.value;
};

Tree.prototype.FindMax = function() {
    var node = this.root;
    if (node == null) {
        return MIN_INT;
    }
    while (node.rChild != null) {
        node = node.rChild;
    }
    return node.value;
};

Tree.prototype.FindMaxNode = function(curr) {
    var node = curr;
    if (node == null) {
        return null;
    }

    while (node.rChild != null) {
        node = node.rChild;
    }

    return node;
};

Tree.prototype.FindMinNode = function(curr) {
    var node = curr;
    if (node == null) {
        return null;
    }

    while (node.lChild != null) {
        node = node.lChild;
    }

    return node;
};

Tree.prototype.Free = function() {
    this.root = null;
};

Tree.prototype.DeleteNode = function(value) {
    this.root = this.DeleteNodeUtil(this.root, value);
};

Tree.prototype.DeleteNodeUtil = function(node, value) {
    var temp = null;
    if (node != null) {
        if (node.value === value) {
            if (node.lChild == null && node.rChild == null) {
                return null;
            }
            else {
                if (node.lChild == null) {
                    temp = node.rChild;
                    return temp;
                }
                if (node.rChild == null) {
                    temp = node.lChild;
                    return temp;
                }
                var minNode = this.FindMinNode(node.rChild);
                var minValue = minNode.value;
                node.value = minValue;
                node.rChild = this.DeleteNodeUtil(node.rChild, minValue);
            }
        }
        else {
            if (node.value > value) {
                node.lChild = this.DeleteNodeUtil(node.lChild, value);
            }
            else {
                node.rChild = this.DeleteNodeUtil(node.rChild, value);
            }
        }
    }
    return node;
};


Tree.prototype.TreeDepth = function() {
    return this.TreeDepthUtil(this.root);
};

Tree.prototype.TreeDepthUtil = function(curr) {
    if (curr == null)
        return 0;
    else {
        var lDepth = this.TreeDepthUtil(curr.lChild);
        var rDepth = this.TreeDepthUtil(curr.rChild);

        if (lDepth > rDepth)
            return lDepth + 1;
        else
            return rDepth + 1;
    }
};

Tree.prototype.isEqual = function(T2) {
    return this.isEqualUtil(this.root, T2.root);
};

Tree.prototype.isEqualUtil = function(node1, node2) {
    if (node1 == null && node2 == null)
        return true;
    else if (node1 == null || node2 == null)
        return false;
    else
        return (this.isEqualUtil(node1.lChild, node2.lChild) && 
            this.isEqualUtil(node1.rChild, node2.rChild) && 
            (node1.value === node2.value));
};

Tree.prototype.Ancestor = function(first, second) {
    if (first > second) {
        var temp = first;
        first = second;
        second = temp;
    }
    return this.AncestorUtil(this.root, first, second);
};

Tree.prototype.AncestorUtil = function(curr, first, second) {
    if (curr == null) {
        return null;
    }
    if (curr.value > first && curr.value > second) {
        return this.AncestorUtil(curr.lChild, first, second);
    }
    if (curr.value < first && curr.value < second) {
        return this.AncestorUtil(curr.rChild, first, second);
    }
    return curr;
};

Tree.prototype.CopyTree = function() {
    var tree2 = new Tree();
    tree2.root = this.CopyTreeUtil(this.root);
    return tree2;
};

Tree.prototype.CopyTreeUtil = function(curr) {
    if (curr != null) {
        var temp = new Tree.Node(curr.value);
        temp.lChild = this.CopyTreeUtil(curr.lChild);
        temp.rChild = this.CopyTreeUtil(curr.rChild);
        return temp;
    }
    else
        return null;
};

Tree.prototype.CopyMirrorTree = function() {
    var tree2 = new Tree();
    tree2.root = this.CopyMirrorTreeUtil(this.root);
    return tree2;
};

Tree.prototype.CopyMirrorTreeUtil = function(curr) {
    if (curr != null) {
        var temp = new Tree.Node(curr.value);
        temp.rChild = this.CopyMirrorTreeUtil(curr.lChild);
        temp.lChild = this.CopyMirrorTreeUtil(curr.rChild);
        return temp;
    }
    else
        return null;
};


Tree.prototype.numNodes = function() {
    return this.numNodesUtil(this.root);
};

Tree.prototype.numNodesUtil = function(curr) {
    if (curr == null)
        return 0;
    else
        return (1 + this.numNodesUtil(curr.rChild) + this.numNodesUtil(curr.lChild));
};

Tree.prototype.numFullNodesBT = function() {
    return this.numFullNodesBTUtil(this.root);
};

Tree.prototype.numFullNodesBTUtil = function(curr) {
    var count;
    if (curr == null)
        return 0;
    count = this.numFullNodesBTUtil(curr.rChild) + this.numFullNodesBTUtil(curr.lChild);
    if (curr.rChild != null && curr.lChild != null)
        count++;
    return count;
};

Tree.prototype.maxLengthPathBT = function() {
    return this.maxLengthPathBTUtil(this.root);
};

Tree.prototype.maxLengthPathBTUtil = function(curr) {
    if (curr == null)
        return 0;

    var leftPath = this.TreeDepthUtil(curr.lChild);
    var rightPath = this.TreeDepthUtil(curr.rChild);
    var max = leftPath + rightPath + 1;

    var leftMax = this.maxLengthPathBTUtil(curr.lChild);
    var rightMax = this.maxLengthPathBTUtil(curr.rChild);

    if (leftMax > max)
        max = leftMax;

    if (rightMax > max)
        max = rightMax;

    return max;
};

Tree.prototype.numLeafNodes = function() {
    return this.numLeafNodesUtil(this.root);
};

Tree.prototype.numLeafNodesUtil = function(curr) {
    if (curr == null)
        return 0;

    if (curr.lChild == null && curr.rChild == null)
        return 1;
    else
        return (this.numLeafNodesUtil(curr.rChild) + this.numLeafNodesUtil(curr.lChild));
};

Tree.prototype.sumAllBT = function() {
    return this.sumAllBTUtil(this.root);
};

Tree.prototype.sumAllBTUtil = function(curr) {
    if (curr == null)
        return 0;
    return (curr.value + this.sumAllBTUtil(curr.lChild) + this.sumAllBTUtil(curr.lChild));
};

Tree.prototype.iterativePreOrder = function() {
    var stk = ([]);
    var curr;

    if (this.root != null)
        stk.push(this.root);

    process.stdout.write("Iterative Pre Order : ");
    while (stk.length > 0) {
        curr = stk.pop();
        process.stdout.write(" " + curr.value);
        if (curr.rChild != null)
            stk.push(curr.rChild);
        if (curr.lChild != null)
            stk.push(curr.lChild);
    }
    process.stdout.write("\n");
};

Tree.prototype.iterativePostOrder = function() {
    var stk = ([]);
    var visited = ([]);
    var curr;
    var vtd;

    if (this.root != null) {
        stk.push(this.root);
        visited.push(0);
    }

    process.stdout.write("Iterative Post Order : ");
    while (stk.length > 0) {
        curr = stk.pop();
        vtd = visited.pop();
        if (vtd === 1) {
            process.stdout.write(" " + curr.value);
        }
        else {
            stk.push(curr);
            visited.push(1);
            if (curr.rChild != null) {
                stk.push(curr.rChild);
                visited.push(0);
            }
            if (curr.lChild != null) {
                stk.push(curr.lChild);
                visited.push(0);
            }
        }
    }
    process.stdout.write("\n");
};

Tree.prototype.iterativeInOrder = function() {
    var stk = ([]);
    var visited = ([]);
    var curr;
    var vtd;

    if (this.root != null) {
        stk.push(this.root);
        visited.push(0);
    }

    process.stdout.write("Iterative In Order : ");
    while (stk.length > 0) {
        curr = stk.pop();
        vtd = visited.pop();
        if (vtd === 1) {
            process.stdout.write(" " + curr.value);
        }
        else {
            if (curr.rChild != null) {
                stk.push(curr.rChild);
                visited.push(0);
            }
            stk.push(curr);
            visited.push(1);
            if (curr.lChild != null) {
                stk.push(curr.lChild);
                visited.push(0);
            }
        }
    }
    process.stdout.write("\n");
};

Tree.prototype.isBST3 = function(root) {
    if (root == null)
        return true;
    if (root.lChild != null && this.FindMaxNode(root.lChild).value > root.value)
        return false;
    if (root.rChild != null && this.FindMinNode(root.rChild).value <= root.value)
        return false;
    return (this.isBST3(root.lChild) && this.isBST3(root.rChild));
};

Tree.prototype.isBST = function() {
    return this.isBSTUtil(this.root, MIN_INT, MAX_INT);
};

Tree.prototype.isBSTUtil = function(curr, min, max) {
    if (curr == null)
        return true;
    if (curr.value < min || curr.value > max)
        return false;
    return this.isBSTUtil(curr.lChild, min, curr.value) && this.isBSTUtil(curr.rChild, curr.value, max);
};

Tree.prototype.isBST2 = function() {
    var count = [0];
    return this.isBST2Util(this.root, count);
};

Tree.prototype.isBST2Util = function(root, count) {
    var ret;
    if (root != null) {
        ret = this.isBST2Util(root.lChild, count);
        if (!ret)
            return false;
        if (count[0] > root.value)
            return false;

        count[0] = root.value;
        ret = this.isBST2Util(root.rChild, count);
        if (!ret)
            return false;
    }
    return true;
};

Tree.prototype.isCompleteTree = function() {
    var que = new Queue();
    var temp = null;
    var noChild = 0;
    if (this.root != null)
        que.add(this.root);

    while (que.length() !== 0) {
        temp = que.remove();
        if (temp.lChild != null) {
            if (noChild === 1)
                return false;
            que.add(temp.lChild);
        }
        else
            noChild = 1;

        if (temp.rChild != null) {
            if (noChild === 1)
                return false;
            que.add(temp.rChild);
        }
        else
            noChild = 1;
    }
    return true;
};

Tree.prototype.isCompleteTreeUtil = function(curr, index, count) {
    if (curr == null)
        return true;
    if (index > count)
        return false;
    return this.isCompleteTreeUtil(curr.lChild, index * 2 + 1, count) && this.isCompleteTreeUtil(curr.rChild, index * 2 + 2, count);
};

Tree.prototype.isCompleteTree2 = function() {
    var count = this.numNodes();
    return this.isCompleteTreeUtil(this.root, 0, count);
};

Tree.prototype.isHeapUtil = function(curr, parentValue) {
    if (curr == null)
        return true;
    if (curr.value < parentValue)
        return false;
    return (this.isHeapUtil(curr.lChild, curr.value) &&
        this.isHeapUtil(curr.rChild, curr.value));
};

Tree.prototype.isHeap = function() {
    var infi = MIN_INT;
    return (this.isCompleteTree() && this.isHeapUtil(this.root, infi));
};

Tree.prototype.isHeapUtil2 = function(curr, index, count, parentValue) {
    if (curr == null)
        return true;
    if (index > count)
        return false;
    if (curr.value < parentValue)
        return false;
    return this.isHeapUtil2(curr.lChild, index * 2 + 1, count, curr.value) && this.isHeapUtil2(curr.rChild, index * 2 + 2, count, curr.value);
};

Tree.prototype.isHeap2 = function() {
    var count = this.numNodes();
    var parentValue = MIN_INT;
    return this.isHeapUtil2(this.root, 0, count, parentValue);
};

Tree.prototype.treeToListRec = function() {
    var head = this.treeToListRecUtil(this.root);
    var temp = head;
    return temp;
};

Tree.prototype.treeToListRecUtil = function(curr) {
    var Head = null;
    var Tail = null;
    if (curr == null)
        return null;

    if (curr.lChild == null && curr.rChild == null) {
        curr.lChild = curr;
        curr.rChild = curr;
        return curr;
    }

    if (curr.lChild != null) {
        Head = this.treeToListRecUtil(curr.lChild);
        Tail = Head.lChild;
        curr.lChild = Tail;
        Tail.rChild = curr;
    }
    else
        Head = curr;

    if (curr.rChild != null) {
        var tempHead = this.treeToListRecUtil(curr.rChild);
        Tail = tempHead.lChild;
        curr.rChild = tempHead;
        tempHead.lChild = curr;
    }
    else
        Tail = curr;

    Head.lChild = Tail;
    Tail.rChild = Head;
    return Head;
};

Tree.prototype.printAllPath = function() {
    var stk = ([]);
    console.info("Print All Path : ");
    this.printAllPathUtil(this.root, stk);
};

Tree.prototype.printAllPathUtil = function(curr, stk) {
    if (curr == null)
        return;
    stk.push(curr.value);

    if (curr.lChild == null && curr.rChild == null) {
        console.info(stk);
        stk.pop();
        return;
    }

    this.printAllPathUtil(curr.rChild, stk);
    this.printAllPathUtil(curr.lChild, stk);
    stk.pop();
};

Tree.prototype.LCA = function(first, second) {
    var ans = this.LCAUtil(this.root, first, second);
    if (ans != null)
        return ans.value;
    else
        return MIN_INT;
};

Tree.prototype.LCAUtil = function(curr, first, second) {
    var left;
    var right;

    if (curr == null)
        return null;
    if (curr.value === first || curr.value === second)
        return curr;

    left = this.LCAUtil(curr.lChild, first, second);
    right = this.LCAUtil(curr.rChild, first, second);

    if (left != null && right != null)
        return curr;
    else if (left != null)
        return left;
    else
        return right;
};

Tree.prototype.LcaBST = function(first, second) {
    return this.LcaBSTUtil(this.root, first, second);
};

Tree.prototype.LcaBSTUtil = function(curr, first, second) {
    if (curr == null) {
        return MAX_INT;
    }
    if (curr.value > first && curr.value > second) {
        return this.LcaBSTUtil(curr.lChild, first, second);
    }
    if (curr.value < first && curr.value < second) {
        return this.LcaBSTUtil(curr.rChild, first, second);
    }
    return curr.value;
};

Tree.prototype.trimOutsideRange = function(min, max) {
    this.trimOutsideRangeUtil(this.root, min, max);
};

Tree.prototype.trimOutsideRangeUtil = function(curr, min, max) {
    if (curr == null)
        return null;

    curr.lChild = this.trimOutsideRangeUtil(curr.lChild, min, max);
    curr.rChild = this.trimOutsideRangeUtil(curr.rChild, min, max);

    if (curr.value < min) {
        return curr.rChild;
    }
    if (curr.value > max) {
        return curr.lChild;
    }
    return curr;
};

Tree.prototype.printInRange = function(min, max) {
    process.stdout.write("Print In Range : ");
    this.printInRangeUtil(this.root, min, max);
    process.stdout.write("\n");
};

Tree.prototype.printInRangeUtil = function(root, min, max) {
    if (root == null)
        return;
    this.printInRangeUtil(root.lChild, min, max);
    if (root.value >= min && root.value <= max)
        process.stdout.write(root.value + " ");
    this.printInRangeUtil(root.rChild, min, max);
};

Tree.prototype.FloorBST = function(val) {
    var curr = this.root;
    var floor = MAX_INT;
    while (curr != null) {
        if (curr.value === val) {
            floor = curr.value;
            break;
        }
        else if (curr.value > val) {
            curr = curr.lChild;
        }
        else {
            floor = curr.value;
            curr = curr.rChild;
        }
    }
    return floor;
};

Tree.prototype.CeilBST = function(val) {
    var curr = this.root;
    var ceil = MIN_INT;
    while (curr != null) {
        if (curr.value === val) {
            ceil = curr.value;
            break;
        }
        else if (curr.value > val) {
            ceil = curr.value;
            curr = curr.lChild;
        }
        else {
            curr = curr.rChild;
        }
    }
    return ceil;
};

Tree.prototype.findMaxBT = function() {
    var ans = this.findMaxBTUtil(this.root);
    return ans;
};

Tree.prototype.findMaxBTUtil = function(curr) {
    if (curr == null)
        return MIN_INT;

    var max = curr.value;
    var left = this.findMaxBTUtil(curr.lChild);
    var right = this.findMaxBTUtil(curr.rChild);

    if (left > max)
        max = left;
    if (right > max)
        max = right;
    return max;
};

Tree.prototype.findMaxBT = function(curr) {
    if ((curr != null && curr instanceof Tree.Node) ||
        curr === null) {
        return this.findMaxBTUtil(curr);
    }
    else if (curr === undefined) {
        return this.findMaxBT$();
    }
    else
        throw new Error('invalid input arguments');
};

Tree.prototype.searchBT = function(value) {
    return this.searchBTUtil(this.root, value);
};

Tree.prototype.searchBTUtil = function(curr, value) {
    if (curr == null)
        return false;

    if (curr.value === value)
        return true;

    var left = this.searchBTUtil(curr.lChild, value);

    if (left)
        return true;

    var right = this.searchBTUtil(curr.rChild, value);

    if (right)
        return true;

    return false;
};

Tree.prototype.CreateBinaryTree = function(arr) {
    this.root = this.CreateBinaryTreeUtil(arr, 0, arr.length - 1);
};

Tree.prototype.CreateBinaryTreeUtil = function(arr, start, end) {
    if (start > end)
        return null;

    var mid = Math.floor((start + end) / 2);
    var curr = new Tree.Node(arr[mid]);
    curr.lChild = this.CreateBinaryTreeUtil(arr, start, mid - 1);
    curr.rChild = this.CreateBinaryTreeUtil(arr, mid + 1, end);
    return curr;
};

Tree.prototype.isBSTArray = function(preorder, size) {
    var stk = ([]);
    var value;
    var root = MIN_INT;

    for (var i = 0; i < size; i++) {
        value = preorder[i];
        if (value < root)
            return false;
        while (stk.length > 0 && stk[stk.length - 1] < value) {
            root = stk.pop();
        };
        stk.push(value);
    }

    return true;
};

Tree.main = function(args) {
    var t = new Tree();
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    t.levelOrderBinaryTree(arr);
    console.info(t.isHeap());
    console.info(t.isHeap2());
    console.info(t.isCompleteTree());

    t.PrintPreOrder();
    t.NthPreOrder(4);
    t.PrintBredthFirst();
    t.PrintLevelOrderLineByLine();
    t.PrintLevelOrderLineByLine2();
    t.PrintSpiralTree();
    t.printAllPath();
    t.NthInOrder(4);
    t.NthPostOrder(4);
};

Tree.main(null);