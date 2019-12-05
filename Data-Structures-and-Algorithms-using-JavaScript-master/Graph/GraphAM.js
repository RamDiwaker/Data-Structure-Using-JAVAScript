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

    this.count = cnt;
    this.adj = new Array(cnt)
    for (var i = 0; i < cnt; i++) {
        this.adj[i] = new Array(cnt).fill(0);
    }

    function Edge(dst, cst) {
        if (cst === undefined)
            cst = 1;
     
        this.dest = dst;
        this.cost = cst;
    }

    Graph.Edge = Edge;

    function EdgeComparator(x, y) {
        if (x.cost < y.cost) {
            return -1;
        }
        if (x.cost > y.cost) {
            return 1;
        }
        return 0;
    };

    Graph.EdgeComparator = EdgeComparator
};


Graph.prototype.addDirectedEdge = function(src, dst, cost) {
    this.adj[src][dst] = cost;
};

Graph.prototype.addUndirectedEdge = function(src, dst, cost) {
    this.addDirectedEdge(src, dst, cost);
    this.addDirectedEdge(dst, src, cost);
};

Graph.prototype.print = function() {
    console.info(this.adj);
};

Graph.prototype.print2 = function() {
    for (var i = 0; i < this.count; i++) {
        console.info("Node index [ " + i + " ] is connected with : ");
        for (var j = 0; j < this.count; j++) {
            if (this.adj[i][j] !== 0)
                console.info(j);
        }
    }
};

Graph.main1 = function(args) {
    var graph = new Graph(4);
    graph.addUndirectedEdge(0, 1, 1);
    graph.addUndirectedEdge(0, 2, 1);
    graph.addUndirectedEdge(1, 2, 1);
    graph.addUndirectedEdge(2, 3, 1);
    graph.print();
};

Graph.prototype.dijkstra = function(source) {
    count = this.count
    var previous = new Array(count).fill(-1)
    var dist = new Array(count).fill(Infinity)
    var visited = new Array(count).fill(false)

    dist[source] = 0
    previous[source] = -1

    var queue = new PriorityQueue(null, Graph.EdgeComparator)
    var node = new Graph.Edge(source, 0)
    queue.add(node)

    while (queue.isEmpty() === false) {
        node = queue.remove();
        source = node.dest;
        visited[source] = true;
        for (var dest = 0; dest < count; dest++) {
            var cost = this.adj[source][dest];
            if (cost !== 0) {
                var alt = cost + dist[source];
                if (dist[dest] > alt && visited[dest] === false) {
                    dist[dest] = alt;
                    previous[dest] = source;
                    node = new Graph.Edge(dest, alt);
                    queue.add(node);
                }
            }
        }
    }
    for (var i = 0; i < count; i++) {
        if (dist[i] === Infinity) {
            console.info(" \n node id " + i + "  prev " + previous[i] + " distance : Unreachable");
        }
        else {
            console.info(" node id " + i + "  prev " + previous[i] + " distance : " + dist[i]);
        }
    }
};

Graph.prototype.prims = function(gph) {
    var count = this.count
    var previous = new Array(count).fill(-1)
    var dist = new Array(count).fill(Infinity)
    var visited = new Array(count).fill(false)

    var source = 0
    dist[source] = 0
    previous[source] = -1

    var queue = new PriorityQueue(null, Graph.EdgeComparator)
    var node = new Graph.Edge(source, 0)
    queue.add(node)

    while (queue.isEmpty() === false) {
        node = queue.remove();
        source = node.dest;
        visited[source] = true;
        for (var dest = 0; dest < count; dest++) {
            var cost = this.adj[source][dest];
            if (cost !== 0) {
                var alt = cost;
                if (dist[dest] > alt && visited[dest] === false) {
                    dist[dest] = alt;
                    previous[dest] = source;
                    node = new Graph.Edge(dest, alt);
                    queue.add(node);
                }
            }
        }
    }
    for (var i = 0; i < count; i++) {
        if (dist[i] === Infinity) {
            console.info(" \n node id " + i + "  prev " + previous[i] + " distance : Unreachable");
        }
        else {
            console.info(" node id " + i + "  prev " + previous[i] + " distance : " + dist[i]);
        }
    }
};

Graph.main2 = function(args) {
    var gph = new Graph(9);
    gph.addUndirectedEdge(0, 1, 4);
    gph.addUndirectedEdge(0, 7, 8);
    gph.addUndirectedEdge(1, 2, 8);
    gph.addUndirectedEdge(1, 7, 11);
    gph.addUndirectedEdge(2, 3, 7);
    gph.addUndirectedEdge(2, 8, 2);
    gph.addUndirectedEdge(2, 5, 4);
    gph.addUndirectedEdge(3, 4, 9);
    gph.addUndirectedEdge(3, 5, 14);
    gph.addUndirectedEdge(4, 5, 10);
    gph.addUndirectedEdge(5, 6, 2);
    gph.addUndirectedEdge(6, 7, 1);
    gph.addUndirectedEdge(6, 8, 6);
    gph.addUndirectedEdge(7, 8, 7);
    gph.print();
    gph.prims();
    gph.dijkstra(0);
};

Graph.main3 = function(args) {
    var gph = new Graph(9);
    gph.addUndirectedEdge(0, 2, 1);
    gph.addUndirectedEdge(1, 2, 5);
    gph.addUndirectedEdge(1, 3, 7);
    gph.addUndirectedEdge(1, 4, 9);
    gph.addUndirectedEdge(3, 2, 2);
    gph.addUndirectedEdge(3, 5, 4);
    gph.addUndirectedEdge(4, 5, 6);
    gph.addUndirectedEdge(4, 6, 3);
    gph.addUndirectedEdge(5, 7, 1);
    gph.addUndirectedEdge(6, 7, 7);
    gph.addUndirectedEdge(7, 8, 17);
    gph.print();
    gph.prims();
    gph.dijkstra(1);
};

Graph.prototype.hamiltonianPathUtil = function(path, pSize, added) {
    if (pSize === this.count)
        return true;

    for (var vertex = 0; vertex < this.count; vertex++) {
        if (pSize === 0 || (this.adj[path[pSize - 1]][vertex] === 1 && added[vertex] === 0)) {
            path[pSize++] = vertex;
            added[vertex] = 1;
            
            if (this.hamiltonianPathUtil(path, pSize, added))
                return true;
            
            pSize--;
            added[vertex] = 0;
        }
    }
    return false;
};

Graph.prototype.hamiltonianPath = function() {
    var count = this.count
    var path = new Array(count).fill(0)
    var added = new Array(count).fill(0)

    if (this.hamiltonianPathUtil(path, 0, added)) {
        console.info("Hamiltonian Path found :: " , path);
        return true;
    }
    console.info("Hamiltonian Path not found");
    return false;
};

Graph.prototype.hamiltonianCycleUtil = function(path, pSize, added) {
    var count = this.count
    if (pSize === count) {
        if (this.adj[path[pSize - 1]][path[0]] === 1) {
            path[pSize] = path[0];
            return true;
        }
        else
            return false;
    }

    for (var vertex = 0; vertex < count; vertex++) {
        if (pSize === 0 || (this.adj[path[pSize - 1]][vertex] === 1 && added[vertex] === 0)) {
            path[pSize++] = vertex;
            added[vertex] = 1;
            if (this.hamiltonianCycleUtil(path, pSize, added))
                return true;
            pSize--;
            added[vertex] = 0;
        }

    }
    return false;
};

Graph.prototype.hamiltonianCycle = function() {
    var count = this.count;
    var path = new Array(count + 1).fill(0)
    var added = new Array(count).fill(0)

    if (this.hamiltonianCycleUtil(path, 0, added)) {
        console.info("Hamiltonian Cycle found :: ", path);
        return true;
    }
    console.info("Hamiltonian Cycle not found");
    return false;
};

Graph.main4 = function(args) {
    var count = 5;
    var graph = new Graph(count);
    var adj =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 1],
        [0, 1, 1, 1, 0]];

    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (adj[i][j] === 1)
                graph.addDirectedEdge(i, j, 1);
        }
    }

    console.info("hamiltonianPath : " + graph.hamiltonianPath());
    console.info("hamiltonianCycle : " + graph.hamiltonianCycle());

    var graph2 = new Graph(count);
    var adj2 =
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0]];

    for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
            if (adj2[i][j] === 1)
                graph2.addDirectedEdge(i, j, 1);
        }
    }
    console.info("hamiltonianPath :  " + graph2.hamiltonianPath());
    console.info("hamiltonianCycle :  " + graph2.hamiltonianCycle());
};

Graph.main = function() {
    Graph.main1()
    Graph.main2()
    Graph.main3()
    Graph.main4()
};

Graph.main()