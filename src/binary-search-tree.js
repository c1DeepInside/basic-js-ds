const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.entry = null;
  }

  root() {
    return this.entry;
  }

  add(data) {
    let node = new Node(data);
    if (!this.entry) {
      this.entry = node;
      return;
    }

    let currentNode = this.entry; 

    while(currentNode){
      if (data < currentNode.data){
        if (!currentNode.left){
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right){
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    if (!this.entry) {
      return false;
    }

    let currentNode = this.entry; 

    while(currentNode){   
      if (currentNode.data === data){
        return true;
      }
      if (data < currentNode.data){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {

    if (!this.entry) {
      return null;
    }

    let currentNode = this.entry; 

    while(currentNode){   
      if (currentNode.data === data){
        return currentNode;
      }
      if (data < currentNode.data){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    this.entry = removeNode(this.entry, data);

    function removeNode(node, data){
      if (!node) {
        return null;
      }

      if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data){
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        }

        if (!node.left){
          return node = node.right;
        }

        if (!node.right){
          return node = node.left;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }   
  }

  min() {
    if (!this.entry) {
      return null;
    }
    let currentNode = this.entry; 
    while(currentNode.left){
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.entry) {
      return null;
    }
    let currentNode = this.entry; 
    while(currentNode.right){
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};