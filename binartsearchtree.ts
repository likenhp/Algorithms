export class TreeNode {
  data: number;
  left: any;
  right: any;

  constructor(data: number) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  root: any = null;

  add(data: number) {
    const origin = this.root;
    if (origin === null) {
      this.root = new TreeNode(data);
    } else {
      this.searchTree(data, origin);
    }
  }

  searchTree(data: number, treeNode: any) {
    if (data < treeNode.data) {
      if (treeNode.left === null) {
        treeNode.left = new TreeNode(data);
        return
      } else if (treeNode.left !== null) {
        return this.searchTree(data, treeNode.left);
      }
    } else if (data > treeNode.data) {
      if (treeNode.right === null) {
        treeNode.right = new TreeNode(data);
        return
      } else if (treeNode.right !== null) {
        return this.searchTree(data, treeNode.right);
      }
    } else {
      return null
    }
  }

  findMin() {
    let treeNode = this.root;
    while(treeNode.left !== null) {
      treeNode = treeNode.left;
    }
    return treeNode;
  }

  findMax() {
    let treeNode = this.root;
    while(treeNode.right !== null) {
      treeNode = treeNode.right;
    }
    return treeNode;
  }

  find(data: number) {
    let origin = this.root;
    if (origin === null) {
      return false
    }
    while(origin.data !== data) {
      if (data < origin.data) {
        origin = origin.left
      } else if (data > origin.data) {
        origin = origin.right
      }
      if (origin === null) {
        return null
      }
    }
    return origin
  }

  isPresent(data: number) {
    let origin = this.root;
    while (origin !== null) {
      if (data === origin.data) {
        return true
      } else {
        if (data > origin.data) {
          origin = origin.right
        } else if (data < origin.data) {
          origin = origin.left
        } else {
          return false
        }
      }
    }
    return false
  }

  remove(data: number) {
    this.root = this.removeNode(this.root, data);
    return this.root;
  }

  removeNode(treeNode: any, data: number) {
    if (treeNode === null) {
      return null;
    }
    if (treeNode.data === data) {
      if (treeNode.left === null && treeNode.right === null) {
        return null;
      } else if (treeNode.left === null) {
        return treeNode.right;
      } else if (treeNode.right === null) {
        return treeNode.left;
      } else {
        let temp = treeNode.right;
        while(temp.left !== null) {
          temp = temp.left
        }
        treeNode.data = temp.data;
        treeNode.right = this.removeNode(treeNode.right, temp.data);
        return treeNode;
      }
    } else if (treeNode.data < data) {
      treeNode.right = this.removeNode(treeNode.right, data);
      return treeNode;
    } else if (treeNode.data > data) {
      treeNode.left = this.removeNode(treeNode.left, data);
      return treeNode;
    }
  }
}