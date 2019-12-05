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
    return (this.stk1.length + this.stk2.length) === 0
}

defaultCmp = function(x, y) {
    return x - y;
};

function PriorityQueue(array, cmp) {
    this.comp = (typeof cmp === 'function' && cmp != null) ? cmp : defaultCmp;

    if (array != null && array instanceof Array) {
        this.length = array.length;
        this.arr = [0].concat(array);
        for (var i = Math.floor(this.length / 2); i > 0; i--) {
            this.proclateDown(i);
        }
    }
    else if (array === undefined || array === null) {
        this.length = 0;
        this.arr = [0];
    }
    else
        throw new Error('Invalid arguments');
}

PriorityQueue.prototype.proclateDown = function(position) {
    var lChild = 2 * position;
    var rChild = lChild + 1;
    var small = -1;
    var temp;
    if (lChild <= this.length) {
        small = lChild;
    }
    if (rChild <= this.length && this.comp(this.arr[rChild], this.arr[lChild]) < 0) {
        small = rChild;
    }
    if (small !== -1 && this.comp(this.arr[small], this.arr[position]) < 0) {
        temp = this.arr[position];
        this.arr[position] = this.arr[small];
        this.arr[small] = temp;
        this.proclateDown(small);
    }
};

PriorityQueue.prototype.proclateUp = function(position) {
    var parent = Math.floor(position / 2);
    var temp;
    if (parent === 0) {
        return;
    }
    if (this.comp(this.arr[parent], this.arr[position]) < 0) {
        temp = this.arr[position];
        this.arr[position] = this.arr[parent];
        this.arr[parent] = temp;
        this.proclateUp(parent);
    }
};

PriorityQueue.prototype.add = function(value) {
    this.length++;
    this.arr[this.length] = value;
    this.proclateUp(this.length);
};

PriorityQueue.prototype.remove = function() {
    if (this.isEmpty()) {
        throw new Error('Queue Empty');
    }
    var value = this.arr[1];
    this.arr[1] = this.arr[this.length];
    this.length--;
    this.proclateDown(1);
    return value;
};

PriorityQueue.prototype.print = function() {
    for (var i = 1; i <= this.length; i++) {
        console.log(" " + this.arr[i]);
    }
};

PriorityQueue.prototype.isEmpty = function() {
    return (this.length === 0);
};

PriorityQueue.prototype.size = function() {
    return this.length;
};

PriorityQueue.prototype.peek = function() {
    if (this.isEmpty()) {
        throw new Error('Queue Empty');
    }
    return this.arr[1];
};


function Graph(cnt) {
    if (cnt === undefined)
        throw new Error('Invalid argument')

    this.count = cnt
    this.Adj = new Array()
 
    for (var i = 0; i < cnt; i++) {
        this.Adj[i] = new Array()
    }

    function Edge(dst, cst) {
        if (cst === undefined)
            cst = 1
        this.dest = dst
        this.cost = cst
    }

    Graph.Edge = Edge

    function EdgeComparator(x, y) {
        if (x.cost < y.cost) {
            return -1
        }
        if (x.cost > y.cost) {
            return 1
        }
        return 0
    }

    Graph.EdgeComparator = EdgeComparator
}

Graph.prototype.addDirectedEdge = function(source, dest, cost) {
    if ((typeof source === 'number') && (typeof dest === 'number') && 
        (typeof cost === 'number')) {
        var edge = new Graph.Edge(dest, cost)
        this.Adj[source].push(edge)
    }
    else if ((typeof source === 'number') && (typeof dest === 'number') && 
        cost === undefined) {
        var edge = new Graph.Edge(dest, 1)
        this.Adj[source].push(edge)
    }
    else
        throw new Error('Invalid argument')
}

Graph.prototype.addUndirectedEdge = function(source, dest, cost) {
    this.addDirectedEdge(source, dest, cost)
    this.addDirectedEdge(dest, source, cost)
}

Graph.prototype.print = function() {
    for (var i = 0; i < this.count; i++) {
        var ad = this.Adj[i]
        console.log('Vertex ' + i + ' is connected to : ')
        for (var j = 0; j < ad.length; j++) {
            var adn = ad[j]
            console.log('(' + adn.dest + ', ' + adn.cost + ') ')
        }
    }
}

Graph.prototype.dfsStack = function(source, target) {
    var count = this.count
    var visited = new Array(count).fill(false)
    var stk = ([])

    stk.push(source)
    visited[source] = true
    
    while (stk.length != 0) {
        var curr = stk.pop()
        var adl = this.Adj[curr]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            if (visited[adn.dest] === false) {
                visited[adn.dest] = true
                stk.push(adn.dest)
            }
        }
    }
    return visited[target]
}

Graph.prototype.dfs = function(source, target) {
    var count = this.count
    var visited = new Array(count).fill(false)
    this.dfsUtil(source, visited)
    return visited[target]
}

Graph.prototype.dfsUtil = function(index, visited) {
    visited[index] = true
    var adl = this.Adj[index]

    for (var index = 0; index < adl.length; index++) {
        var adn = adl[index]
        if (visited[adn.dest] === false)
            this.dfsUtil(adn.dest, visited)
    }
}

Graph.prototype.bfs = function(source, target) {
    var count = this.count
    var visited = new Array(count).fill(false)
    var que = new Queue();
    que.add(source)
    visited[source] = true

    while (que.isEmpty() === false) {
        var curr = que.remove();
        var adl = this.Adj[curr]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            if (visited[adn.dest] === false) {
                visited[adn.dest] = true
                que.add(adn.dest)
            }
        }
    }
    return visited[target]
}

Graph.main1 = function() {
    var gph = new Graph(5)
    gph.addDirectedEdge(0, 1, 3)
    gph.addDirectedEdge(0, 4, 2)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(4, 1, 2)
    gph.addDirectedEdge(4, 3, 1)
    gph.print()
    console.log(gph.dfs(0, 2))
    console.log(gph.bfs(0, 2))
    console.log(gph.dfsStack(0, 2))
}

Graph.main2 = function() {
    var gph = new Graph(5)
    gph.addDirectedEdge(0, 1, 3)
    gph.addDirectedEdge(0, 4, 2)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(4, 1, 2)
    gph.addDirectedEdge(4, 3, 1)
    gph.print()
    console.log(gph.dfs(0, 2))
    console.log(gph.bfs(0, 2))
    console.log(gph.dfsStack(0, 2))
}

Graph.prototype.dfsUtil2 = function(src, visited, stk) {
    visited[src] = true
    var adl = this.Adj[src]
    for (var index = 0; index < adl.length; index++) {
        var adn = adl[index]
        if (visited[adn.dest] === false) {
            this.dfsUtil2(adn.dest, visited, stk)
        }
    }
    stk.push(src)
}

Graph.prototype.topologicalSort = function() {
    var stk = ([])
    var count = this.count
    var visited = new Array(count).fill(false)

    for (var i = 0; i < count; i++) {
        if (visited[i] === false) {
            this.dfsUtil2(i, visited, stk)
        }
    }
    console.log('topologicalSort :: ')
    while (stk.length != 0) {
        console.log(stk.pop())
    }
}

Graph.main3 = function() {
    var gph = new Graph(6)
    gph.addDirectedEdge(5, 2, 1)
    gph.addDirectedEdge(5, 0, 1)
    gph.addDirectedEdge(4, 0, 1)
    gph.addDirectedEdge(4, 1, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(3, 1, 1)
    gph.print()
    gph.topologicalSort()
}

Graph.prototype.pathExist = function(source, dest) {
    var count = this.count
    var visited = new Array(count).fill(false)
    this.dfsUtil(source, visited)
    return visited[dest]
}

Graph.prototype.countAllPathDFS = function(visited, source, dest) {
    if (source === dest) {
        return 1
    }
    var count = 0
    visited[source] = true
    var adl = this.Adj[source]
    
    for (var index = 0; index < adl.length; index++) {
        var adn = adl[index]
        if (visited[adn.dest] === false) {
            count += this.countAllPathDFS(visited, adn.dest, dest)
        }
    }
    visited[source] = false
    return count
}

Graph.prototype.countAllPath = function(src, dest) {
    var count = this.count
    var visited = new Array(count).fill(false)
    return this.countAllPathDFS(visited, src, dest)
}

Graph.prototype.printAllPathDFS = function(visited, source, dest, path) {
    path.push(source)
    if (source === dest) {
        console.log(path)
        path.pop()
        return
    }

    visited[source] = true
    var adl = this.Adj[source]
    
    for (var index = 0; index < adl.length; index++) {
        var adn = adl[index]
        if (visited[adn.dest] === false) {
            this.printAllPathDFS(visited, adn.dest, dest, path)
        }
    }
    visited[source] = false
    path.pop()
}

Graph.prototype.printAllPath = function(src, dest) {
    var count = this.count
    var visited = new Array(count).fill(false)
    var path = ([])
    this.printAllPathDFS(visited, src, dest, path)
}

Graph.main4 = function() {
    var gph = new Graph(5)
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(1, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    gph.addDirectedEdge(1, 4, 1)
    gph.print()
    console.log('PathExist :: ' + gph.pathExist(0, 4))
    console.log("Count All Path")
    console.log(gph.countAllPath(0, 4))
    gph.printAllPath(0, 4)
}

Graph.prototype.rootVertex = function() {
    var count = this.count
    var visited = new Array(count).fill(false)
    var retVal = -1
    for (var i = 0; i < count; i++) {
        if (visited[i] === false) {
            this.dfsUtil(i, visited)
            retVal = i
        }
    }
    console.log('Root vertex is :: ' + retVal)
    return retVal
}

Graph.main5 = function() {
    var gph = new Graph(7)
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(1, 3, 1)
    gph.addDirectedEdge(4, 1, 1)
    gph.addDirectedEdge(6, 4, 1)
    gph.addDirectedEdge(5, 6, 1)
    gph.addDirectedEdge(5, 2, 1)
    gph.addDirectedEdge(6, 0, 1)
    gph.print()
    gph.rootVertex()
}

Graph.prototype.transitiveClosureUtil = function(source, dest, tc) {
    tc[source][dest] = 1
    var adl = this.Adj[dest]
    for (var index = 0; index < adl.length; index++) {
        var adn = adl[index]
        if (tc[source][adn.dest] === 0)
            this.transitiveClosureUtil(source, adn.dest, tc)
    }
}

Graph.prototype.transitiveClosure = function() {
    var count = this.count
    var tc = new Array(count)
    for (var i = 0; i < count; i++) {
        tc[i] = new Array(count).fill(0);
    }

    for (var i = 0; i < count; i++) {
        this.transitiveClosureUtil(i, i, tc)
    }
    return tc
}

Graph.main6 = function() {
    var gph = new Graph(4)
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 0, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(3, 3, 1)
    var tc = gph.transitiveClosure()
    for (var i = 0; i < 4; i++) {
        console.log(tc[i])
    }
}

Graph.prototype.bfsLevelNode = function(source) {
    var count = this.count
    var visited = new Array(count).fill(false)
    var level = new Array(count).fill(0)

    visited[source] = true
    level[source] = 0
    var que = new Queue()
    que.add(source)

    console.log('Node  - Level')
    while (que.isEmpty() === false) {
        curr = que.remove()
        var depth = level[curr]
        var adl = this.Adj[curr]
        console.log(curr + ' - ' + depth)
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            if (visited[adn.dest] === false) {
                visited[adn.dest] = true
                que.add(adn.dest)
                level[adn.dest] = depth + 1
            }
        }
    }
}

Graph.prototype.bfsDistance = function(source, dest) {
    var count = this.count
    var visited = new Array(count).fill(false)
    var level = new Array(count).fill(0)

    visited[source] = true
    level[source] = 0
    var que = new Queue()
    que.add(source)

    while (que.isEmpty() === false) {
        var curr = que.remove()
        var depth = level[curr]
        var adl = this.Adj[curr]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            if (adn.dest === dest) {
                return depth + 1
            }
            if (visited[adn.dest] === false) {
                visited[adn.dest] = true
                que.add(adn.dest)
                level[adn.dest] = depth + 1
            }
        }
    }
    return -1
}

Graph.main7 = function() {
    var gph = new Graph(7)
    gph.addUndirectedEdge(0, 1, 1)
    gph.addUndirectedEdge(0, 2, 1)
    gph.addUndirectedEdge(0, 4, 1)
    gph.addUndirectedEdge(1, 2, 1)
    gph.addUndirectedEdge(2, 5, 1)
    gph.addUndirectedEdge(3, 4, 1)
    gph.addUndirectedEdge(4, 5, 1)
    gph.addUndirectedEdge(4, 6, 1)
    gph.print()
    gph.bfsLevelNode(1)
    console.log(gph.bfsDistance(1, 6))
}

Graph.prototype.isCyclePresentUndirectedDFS = function(src, parentIndex, visited) {
    visited[src] = true
    var dest
    var adl = this.Adj[src]

    for (var index = 0; index < adl.length; index++) {
        var adn = adl[index]
        dest = adn.dest
        if (visited[dest] === false) {
            if (this.isCyclePresentUndirectedDFS(dest, src, visited))
                return true
        }
        else if (parentIndex !== dest)
            return true
    }
    return false
}

Graph.prototype.isCyclePresentUndirected = function() {
    var count = this.count
    var visited = new Array(count).fill(false)

    for (var i = 0; i < count; i++) {
        if (visited[i] === false)
            if (this.isCyclePresentUndirectedDFS(i, -1, visited))
                return true
    }
    return false
}

Graph.main8 = function() {
    var gph = new Graph(6)
    gph.addUndirectedEdge(0, 1, 1)
    gph.addUndirectedEdge(1, 2, 1)
    gph.addUndirectedEdge(3, 4, 1)
    gph.addUndirectedEdge(4, 2, 1)
    gph.addUndirectedEdge(2, 5, 1)
    gph.addUndirectedEdge(3, 5, 1)
    console.log(gph.isCyclePresentUndirected())
}

Graph.prototype.isCyclePresentDFS = function(index, visited, marked) {
    visited[index] = true
    marked[index] = 1
    var adl = this.Adj[index]
    for (var index = 0; index < adl.length; index++) {
        var adn = adl[index]
        var dest = adn.dest
        if (marked[dest] === 1)
            return true
        if (visited[dest] === false)
            if (this.isCyclePresentDFS(dest, visited, marked))
                return true
    }
    marked[index] = 0
    return false
}

Graph.prototype.isCyclePresent = function() {
    var count = this.count
    var visited = new Array(count).fill(false)
    var marked = new Array(count).fill(0)

    for (var index = 0; index < count; index++) {
        if (visited[index] === false)
            if (this.isCyclePresentDFS(index, visited, marked))
                return true
    }
    return false
}

Graph.prototype.isCyclePresentDFSColor = function(index, visited) {
    visited[index] = 1
    var dest
    var adl = this.Adj[index]
    for (var index = 0; index < adl.length; index++) {
        var adn = adl[index]
        dest = adn.dest
        if (visited[dest] === 1)
            return true
        if (visited[dest] === 0)
            if (this.isCyclePresentDFSColor(dest, visited))
                return true
    }
    visited[index] = 2
    return false
}

Graph.prototype.isCyclePresentColor = function() {
    var count = this.count
    var visited = new Array(count).fill(0) // fill with 0

    for (var i = 0; i < count; i++) {
        if (visited[i] === 0)
            if (this.isCyclePresentDFSColor(i, visited))
                return true
    }
    return false
}

Graph.main9 = function() {
    var gph = new Graph(5)
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(1, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    gph.addDirectedEdge(4, 1, 1)
    console.log(gph.isCyclePresentColor())
}

Graph.prototype.transposeGraph = function() {
    var count = this.count
    var g = new Graph(count)
    for (var i = 0; i < count; i++) {
        var adl = this.Adj[i]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            var dest = adn.dest
            g.addDirectedEdge(dest, i)
        }
    }
    return g
}

Graph.prototype.isConnectedUndirected = function() {
    var count = this.count
    var visited = new Array(count).fill(false)

    this.dfsUtil(0, visited)
    for (var i = 0; i < count; i++) {
        if (visited[i] === false) {
            return false
        }
    }
    return true
}

Graph.prototype.isStronglyConnected = function() {
    var count = this.count
    var visited = new Array(count).fill(false)

    this.dfsUtil(0, visited)
    for (var i = 0; i < count; i++) {
        if (visited[i] === false) {
            return false
        }
    }
    var gReversed = this.transposeGraph()
    visited.fill(false)

    gReversed.dfsUtil(0, visited)
    for (var i = 0; i < count; i++) {
        if (visited[i] === false) {
            return false
        }
    }
    return true
}

Graph.main9 = function() {
    var gph = new Graph(5)
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(3, 0, 1)
    gph.addDirectedEdge(2, 4, 1)
    gph.addDirectedEdge(4, 2, 1)
    console.log(' IsStronglyConnected:: ' + gph.isStronglyConnected())
}

Graph.prototype.stronglyConnectedComponent = function() {
    var count = this.count
    var visited = new Array(count).fill(false)
    var stk = ([])

    for (var i = 0; i < count; i++) {
        if (visited[i] === false) {
            this.dfsUtil2(i, visited, stk)
        }
    }
    var gReversed = this.transposeGraph()
    visited.fill(false)

    var stk2 = ([])
    while (stk.length != 0) {
        var curr = stk.pop()
        if (visited[curr] === false) {
            stk2.length = 0
            gReversed.dfsUtil2(curr, visited, stk2)
            console.log(stk2)
        }
    }
}

Graph.main10 = function() {
    var gph = new Graph(7)
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 0, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    gph.addDirectedEdge(4, 5, 1)
    gph.addDirectedEdge(5, 3, 1)
    gph.addDirectedEdge(5, 6, 1)
    gph.stronglyConnectedComponent()
}

Graph.prototype.prims = function() {
    var count = this.count
    var previous = new Array(count).fill(-1)
    var infi = 2147483647
    var dist = new Array(count).fill(infi)
    var visited = new Array(count).fill(false)
    var source = 1
    dist[source] = 0

    var queue = new PriorityQueue(null, Graph.EdgeComparator)
    var node = new Graph.Edge(source, 0)
    queue.add(node)

    while (queue.isEmpty() === false) {
        node = queue.remove()
        visited[source] = true
        source = node.dest
        var adl = this.Adj[source]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            var dest = adn.dest
            var alt = adn.cost
            if (dist[dest] > alt && visited[dest] === false) {
                dist[dest] = alt
                previous[dest] = source
                node = new Graph.Edge(dest, alt)
                queue.add(node)
            }
        }
    }
    for (var i = 0; i < count; i++) {
        if (dist[i] === infi) {
            console.log(' node id ' + i + '  prev ' + previous[i] + ' distance : Unreachable')
        } else {
            console.log(' node id ' + i + '  prev ' + previous[i] + ' distance : ' + dist[i])
        }
    }
}

Graph.prototype.dijkstra = function(source) {
    var count = this.count
    var previous = new Array(count).fill(-1)
    var infi = 2147483647
    var dist = new Array(count).fill(infi)
    var visited = new Array(count).fill(false)

    dist[source] = 0
    previous[source] = -1

    var queue = new PriorityQueue(null, Graph.EdgeComparator)
    var node = new Graph.Edge(source, 0)
    queue.add(node)

    while (queue.isEmpty() === false) {
        node = queue.remove()
        source = node.dest
        visited[source] = true
        var adl = this.Adj[source]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            var dest = adn.dest
            var alt = adn.cost + dist[source]
            if (dist[dest] > alt && visited[dest] === false) {
                dist[dest] = alt
                previous[dest] = source
                node = new Graph.Edge(dest, alt)
                queue.add(node)
            }
        }
    }
    for (var i = 0; i < count; i++) {
        if (dist[i] === infi) {
            console.log(' \n node id ' + i + '  prev ' + previous[i] + ' distance : Unreachable')
        } else {
            console.log(' node id ' + i + '  prev ' + previous[i] + ' distance : ' + dist[i])
        }
    }
}

Graph.main11 = function() {
    var gph = new Graph(9)
    gph.addUndirectedEdge(0, 1, 4)
    gph.addUndirectedEdge(0, 7, 8)
    gph.addUndirectedEdge(1, 2, 8)
    gph.addUndirectedEdge(1, 7, 11)
    gph.addUndirectedEdge(2, 3, 7)
    gph.addUndirectedEdge(2, 8, 2)
    gph.addUndirectedEdge(2, 5, 4)
    gph.addUndirectedEdge(3, 4, 9)
    gph.addUndirectedEdge(3, 5, 14)
    gph.addUndirectedEdge(4, 5, 10)
    gph.addUndirectedEdge(5, 6, 2)
    gph.addUndirectedEdge(6, 7, 1)
    gph.addUndirectedEdge(6, 8, 6)
    gph.addUndirectedEdge(7, 8, 7)
    //gph.print()
    gph.prims()
    gph.dijkstra(0)
}

Graph.prototype.shortestPath = function(source) {
    var curr
    var count = this.count
    var infi = 2147483647
    var distance = new Array(count).fill(infi)
    var path = new Array(count).fill(0)

    var que = new Queue()
    que.add(source)
    distance[source] = 0

    while (que.isEmpty() === false) {
        curr = que.remove()
        var adl = this.Adj[curr]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            if (distance[adn.dest] === infi) {
                distance[adn.dest] = distance[curr] + 1
                path[adn.dest] = curr
                que.add(adn.dest)
            }
        }
    }

    for (var i = 0; i < count; i++) {
        console.log(path[i] + ' to ' + i + ' weight ' + distance[i])
    }
}

Graph.main12 = function() {
    var gph = new Graph(9)
    gph.addUndirectedEdge(0, 2, 1)
    gph.addUndirectedEdge(1, 2, 5)
    gph.addUndirectedEdge(1, 3, 7)
    gph.addUndirectedEdge(1, 4, 9)
    gph.addUndirectedEdge(3, 2, 2)
    gph.addUndirectedEdge(3, 5, 4)
    gph.addUndirectedEdge(4, 5, 6)
    gph.addUndirectedEdge(4, 6, 3)
    gph.addUndirectedEdge(5, 7, 1)
    gph.addUndirectedEdge(6, 7, 7)
    gph.addUndirectedEdge(7, 8, 17)
    gph.bellmanFordshortestPath(1)
    console.log('isConnectedUndirected :: ' + gph.isConnectedUndirected())
}

Graph.prototype.bellmanFordshortestPath = function(source) {
    var count = this.count
    var path = new Array(count).fill(-1)
    var infi = 2147483647
    var distance = new Array(count).fill(infi)

    distance[source] = 0
    for (var i = 0; i < count - 1; i++) {
        for (var j = 0; j < count; j++) {
            var adl = this.Adj[j]
            for (var index = 0; index < adl.length; index++) {
                var adn = adl[index]
                var newDistance = distance[j] + adn.cost
                if (distance[adn.dest] > newDistance) {
                    distance[adn.dest] = newDistance
                    path[adn.dest] = j
                }
            }
        }
    }
    for (var i = 0; i < count; i++) {
        console.log(path[i] + ' to ' + i + ' weight ' + distance[i])
    }
}

Graph.main13 = function() {
    var gph = new Graph(5)
    gph.addDirectedEdge(0, 1, 3)
    gph.addDirectedEdge(0, 4, 2)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 3, 1)
    gph.addDirectedEdge(4, 1, -2)
    gph.addDirectedEdge(4, 3, 1)
    gph.bellmanFordshortestPath(0)
}

Graph.heightTreeParentArr = function(arr) {
    var count = arr.length
    var heightArr = new Array(count).fill(0)
    var gph = new Graph(count)
    var visited = new Array(count).fill(false)
    var source = 0

    for (var i = 0; i < count; i++) {
        if (arr[i] !== -1) {
            gph.addDirectedEdge(arr[i], i)
        } else {
            source = i
        }
    }
    visited[source] = true
    heightArr[source] = 0
    var maxHight = 0
    var que = new Queue()
    que.add(source)

    while (que.isEmpty() === false) {
        curr = que.remove()
        var height = heightArr[curr]
        if (height > maxHight) {
            maxHight = height
        }
        var adl = gph.Adj[curr]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            if (visited[adn.dest] === false) {
                visited[adn.dest] = true
                que.add(adn.dest)
                heightArr[adn.dest] = height + 1
            }
        }
    }
    return maxHight
}

Graph.getHeight = function(arr, height, index) {
    if (arr[index] === -1) {
        return 0
    } else {
        return Graph.getHeight(arr, height, arr[index]) + 1
    }
}

Graph.heightTreeParentArr2 = function(arr) {
    var count = arr.length
    var height = new Array(count).fill(0)
    var maxHeight = -1

    for (var i = 0; i < count; i++) {
        height[i] = Graph.getHeight(arr, height, i)
        maxHeight = (maxHeight > height[i]) ? maxHeight : height[i]
    }
    return maxHeight
}

Graph.main14 = function() {
    var parentArray = [-1, 0, 1, 2, 3]
    console.log(Graph.heightTreeParentArr(parentArray))
    console.log(Graph.heightTreeParentArr2(parentArray))
}

Graph.prototype.bestFirstSearchPQ = function(source, dest) {
    var count = this.count
    var previous = new Array(count).fill(-1)
    var infi = 2147483647
    var dist = new Array(count).fill(infi)
    var visited = new Array(count).fill(false)

    dist[source] = 0
    previous[source] = -1

    var pq = new PriorityQueue(null, Graph.EdgeComparator)
    var node = new Graph.Edge(source, 0)
    pq.add(node)

    while (pq.isEmpty() !== false) {
        node = pq.remove()
        source = node.dest
        if (source === dest) {
            return node.cost
        }
        visited[source] = true
        var adl = this.Adj[source]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            var curr = adn.dest
            var cost = adn.cost
            var alt = cost + dist[source]
            if (dist[curr] > alt && visited[curr] === false) {
                dist[curr] = alt
                previous[curr] = source
                node = new Graph.Edge(curr, alt)
                pq.add(node)
            }
        }
    }
    return -1
}

Graph.prototype.isConnected = function() {
    var count = this.count
    var visited = new Array(count).fill(false)
    var adl
    for (var i = 0; i < count; i++) {
        adl = this.Adj[i]
        if (adl.length > 0) {
            this.dfsUtil(i, visited)
            break
        }
    }
    for (var i = 0; i < count; i++) {
        adl = this.Adj[i]
        if (adl.length > 0)
            if (visited[i] === false)
                return false
    }
    return true
}

Graph.prototype.isEulerian = function() {
    var count = this.count

    if (this.isConnected() === false) {
        console.log('graph is not Eulerian')
        return 0
    }
    var odd = 0
    var inDegree = new Array(count).fill(0)
    var outDegree = new Array(count).fill(0)

    for (var i = 0; i < count; i++) {
        adl = this.Adj[i]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            outDegree[i] += 1
            inDegree[adn.dest] += 1
        }
    }
    for (var i = 0; i < count; i++) {
        if ((inDegree[i] + outDegree[i]) % 2 !== 0) {
            odd += 1
        }
    }

    if (odd === 0) {
        console.log('graph is Eulerian')
        return 2
    } else if (odd === 2) {
        console.log('graph is Semi-Eulerian')
        return 1
    } else {
        console.log('graph is not Eulerian')
        return 0
    }
}

Graph.main15 = function() {
    var gph = new Graph(5)
    gph.addDirectedEdge(1, 0, 1)
    gph.addDirectedEdge(0, 2, 1)
    gph.addDirectedEdge(2, 1, 1)
    gph.addDirectedEdge(0, 3, 1)
    gph.addDirectedEdge(3, 4, 1)
    console.log(gph.isEulerian())
}

Graph.prototype.isStronglyConnected2 = function() {
    var count = this.count
    var visited = new Array(count).fill(false)
    var adl

    for (var index = 0; index < count; index++) {
        adl = this.Adj[index]
        if (adl.length > 0)
            break
    }

    this.dfsUtil(index, visited)
    for (var i = 0; i < count; i++) {
        adl = this.Adj[i]
        if (visited[i] === false && adl.length > 0)
            return false
    }

    var gReversed = this.transposeGraph()
    visited.fill(false)

    gReversed.dfsUtil(index, visited)
    for (var i = 0; i < count; i++) {
        adl = gReversed.Adj[i]
        if (visited[i] === false && adl.length > 0)
            return false
    }
    return true
}

Graph.prototype.isEulerianCycle = function() {
    var count = this.count
    var inDegree = new Array(count).fill(0)
    var outDegree = new Array(count).fill(0)

    if (!this.isStronglyConnected2())
        return false

    for (var i = 0; i < count; i++) {
        var adl = this.Adj[i]
        for (var index = 0; index < adl.length; index++) {
            var adn = adl[index]
            outDegree[i] += 1
            inDegree[adn.dest] += 1
        }
    }

    for (var i = 0; i < count; i++) {
        if (inDegree[i] !== outDegree[i])
            return false
    }
    return true
}

Graph.main16 = function() {
    var gph = new Graph(5)
    gph.addDirectedEdge(0, 1, 1)
    gph.addDirectedEdge(1, 2, 1)
    gph.addDirectedEdge(2, 0, 1)
    gph.addDirectedEdge(0, 4, 1)
    gph.addDirectedEdge(4, 3, 1)
    gph.addDirectedEdge(3, 0, 1)
    console.log(gph.isEulerianCycle())
}

Graph.main = function() {
    Graph.main1()
    Graph.main2()
    Graph.main3()
    Graph.main4()
    Graph.main5()
    Graph.main6()
    Graph.main7()
    Graph.main8()
    Graph.main9()
    Graph.main10()
    Graph.main11()
    Graph.main12()
    Graph.main13()
    Graph.main14()
    Graph.main15()
    Graph.main16()
}

Graph.main()