/*
  Implement a breadth-first method on a tree class.
  BFSelect accepts a filter function, calls that function on each of the nodes in Breadth-First order, and returns a flat array of node values of the tree for which the filter returns true.

*/

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  var queue = new Queue();
  var results = [];
  // add first node with depth 0
  queue.enqueue({ tree: this, depth: 0 });
  
  while (current = queue.dequeue()) {
    // 'current' value and depth pass filter function
    if (filter(current.tree.value, current.depth)) {
      results.push(current.tree.value);
    }
    
    current.tree.children.forEach(function(child) {
      queue.enqueue({
        tree: child,
        depth: current.depth + 1,
      });
    });
  }

  return results;
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }

  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index,1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
