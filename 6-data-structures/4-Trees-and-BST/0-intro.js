//Trees and the Binary Search Tree
//A tree is a very popular data structure. Fundamentally, trees are data structures that consist of nodes in various parent/child relationships. They are non-linear in that there can be multiple paths through the nodes (as we traverse the different nodes down the tree). The flow of nodes is unidirectional and sub-nodes are never connected with one another. Think of a waterfall of nodes!

//There are a huge amount of tree variants out there with a variety of use cases (some trees are better at storing certain data or supporting different operations like search). In this section I will define as basic a tree as possible and from there we will cover the most commonly used trees out there: binary search trees and binary heaps.

//Here are some key terms pertaining to trees before we get to building!
//Root: the root node is the top-most node in the tree
//Child: A node  directly connected to another node as we move down the tree
//Parent: A node above a given node in the tree, directly connected to it
//Siblings: a collection of nodes with the same parent
//Leaf: A very progressive node with no children!
//Edge: The connection between two nodes, think of the arrow or line between the nodes on a diagram

//         0
//       /   \
//      1     2
//     /\       \
//    3  4       5

// 0=root node
// 0,1,2=parents
// 1,2 = children of 0
// 1,2  3,4 = Sibling pairs
// 3,4,5 = leafs

// Basic tree
//Here we will define an extremely basic tree! On this model, each node is itself a tree with its children represented by an array of children trees.
class Tree {
  constructor(val) {
    this.val = val;
    this.children = [];
  }

  addChild(val) {
    this.children.push(new Tree(val));
  }

  countLeaves(node) {
    let count = 0;

    if (!this.children.length) {
      count++;
    } else {
      for (let child of this.children) {
        count += this.countLeaves.call(child);
      }
    }
    return count;
  }
}

let basicTree = new Tree(0);
basicTree.addChild(1);
basicTree.addChild(2);
basicTree.children[0].addChild(3);
basicTree.children[0].addChild(4);
basicTree.children[1].addChild(5);
console.log(basicTree);
console.log('-------Root Node Children-------');
console.table(basicTree.children);
console.log('-------Branch1 Children-------');
console.table(basicTree.children[0].children);
console.log('-------Branch2 Children-------');
console.table(basicTree.children[1].children);
console.log(basicTree.countLeaves());

//We have reconstructed the diagram above with a very basic 'addChild method'! Run this file with node to see the results. For fun, we have added a function that counts the amount of leaves in the tree. Regardless, there are approximately one billion bits of additional functionality we could add to a tree depending on our specialized needs. Hopefully you now understand what a basicmost tree is. Let us now get to binary search trees!

//Further Resources
//https://en.wikipedia.org/wiki/Tree_(data_structure)

