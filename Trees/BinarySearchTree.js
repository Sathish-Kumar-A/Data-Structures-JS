class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    }
    insert(value) {
        const newNode=new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        else {
            let current = this.root;
            while (true) {
                if (value<=current.value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current=current.left
                    }
                }
                else {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }

    }

    find(value) {
        let currentNode = this.root;
        while (true) {
            if (!currentNode) {
                return {isExist:false};
            }
            else if (currentNode.value === value) {
                return {isExist:true,node:currentNode}
            }
            else if (currentNode.value < value) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }


        }
    }
    breadWiseOrder() {
        let current = this.root;
        let visitedValues = [];
        const queue = [];
        queue.push(current);
        while (queue.length) {
            const value = queue.shift();
            visitedValues.push(value.value)
            if (value.left) queue.push(value.left);
            if (value.right) queue.push(value.right);
        }
        return visitedValues;
    }
    DepthWiseOrder(order) {
        const orders = {
            pre: this.PreorderTraversal,
            post: this.PostOrderTraversal,
            in:this.InorderTraversal
        }
        return orders[order]()||"Invalid method"
    }

    PreorderTraversal() {
        const data = [];
        const currentNode = this.root;
        const traverse = (node) => {
            if (!node) {
                return
            }
            data.push(node.value);
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(currentNode)
        return data;
    }
    InorderTraversal() {
        const data = [];
        const currentNode = this.root;
        const traverse = (node) => {
          if (!node) {
            return;
          }
          if (node.left) {
            traverse(node.left);
          }
          data.push(node.value);
          if (node.right) {
            traverse(node.right);
          }
        };
        traverse(currentNode);
        return data;

    }
    PostOrderTraversal() {
        const data = [];
        const currentNode = this.root;
        const traverse = (node) => {
          if (!node) {
            return;
          }
          if (node.left) {
              traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node.value);
        };
        traverse(currentNode);
        return data;

    }

    // failed
    // recursiveInsert(value) {
    //     let currentNode = this.root;
    //     // let newNode = new Node(value);
    //     const recursive = ( node) => {
    //         if (!node) {
    //             return new Node(value);
    //         }
    //         // else if(node.value===element){
    //         //     return null;
    //         // }
    //         else if (node.value < value) {
    //             // console.log(node.value, value, recursive(node.right));
    //             node.right = recursive(node.right);
    //             return this;
    //         }
    //         else {
    //             node.left = recursive(node.left)
    //             return this;
    //         }

    //     }
    //     return recursive(currentNode);
    //     // return this.root;
    // }

}


const Tree = new BST();
Tree.insert(10);
Tree.insert(6);
Tree.insert(11);
Tree.insert(15)
console.log(Tree.breadWiseOrder());
console.log(Tree.PreorderTraversal());
console.log(Tree.InorderTraversal());
console.log(Tree.PostOrderTraversal());
// console.log(Tree);

// console.log(Tree.find(6));
