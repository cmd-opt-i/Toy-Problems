/*
  Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class

  // Valid Child
  var grandma = new Tree();
  var mom = new Tree();
  var uncle = new Tree();
  grandma.addChild(mom);
  grandma.addChild(uncle);
  var me = new Tree();
  mom.addChild(me);

  grandma.getAncestorPath(me); // => [grandma, mom, me]
  mom.getAncestorPath(me)  // => [mom, me]
  me.getAncestorPath(me) // => [me]
  grandma.getClosestCommonAncestor(me, uncle); // => grandma

  // Invalid Child
  grandma.getAncestorPath(H R Giger) // => null
*/

var Tree = function() {
  this.children = [];
};

Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }

  return this;
};

Tree.prototype.getClosestCommonAncestor = function(arg1, arg2) {
  var path1 = this.getAncestorPath(arg1);
  var path2 = this.getAncestorPath(arg2);

  if (path1 === null || path2 === null) {
    return null;
  }
  if (path2.length > path1.length) {
    for (var i = path2.length - 1; i >= 0; i--) {
      if (path1.indexOf(path2[i]) !== -1) {
        return path2[i];
      }
    }
  } else {
    for (var i = path1.length - 1; i >= 0; i--) {
      if (path2.indexOf(path1[i]) !== -1) {
        return path1[i];
      }
    }
  }
};

Tree.prototype.getAncestorPath = function(target) {

  function recurse(node){
    if (node === target) {
      return [node];
    }

    for (var i = 0; i < node.children.length; i++) {
      var path = recurse(node.children[i]);

      if (path) {
        return [node].concat(path);
      }
    }

    return null;
  }

  return recurse(this);
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
    throw new Error("That node is not an immediate child of this tree");
  }
};