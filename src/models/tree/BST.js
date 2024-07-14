class BST{
    #root
    constructor(){
        this.#root = null;
    }
    
    add(value){
        if(this.#root == null){
            this.#root = new Node(value);
        if(this.#root!=null){
            return true;
        }
        }else{
            return this.insertNode (this.#root,value)
        }
    
    }
    insertNode(node,value){
        if(value.matricula < node.value.matricula){
            if(node.left==null){
                node.left = new Node (value);
                if(node.left!=null){
                    return true;
                }
            }
            else{
                return this.insertNode(node.left,value);
            }
        }else{
            if(node.right == null){
                node.right = new Node(value)
                if(node.right!=null){
                    return true;
                }

            }else
            return this.insertNode(node.right,value);
        }
    }
    searchNode(node, value) {
        if (node === null) {
            return null;
        }
        if (node.value.matricula === value) {
            return node.value;
        } else if (value < node.value.matricula) {
            return this.searchNode(node.left, value);
        } else {
            return this.searchNode(node.right, value);
        }
    }
    search(value, callback) {
        const result = this.searchNode(this.#root, value);
        callback(result);
    }
    min() {
        return this.minNode(this.#root);
    }

    minNode(node) {
        if (node == null || node.left == null) {
            return node;
        } else {
            return this.minNode(node.left);
        }
    }
    max() {
        return this.maxNode(this.#root);
    }
   
    maxNode(node) {
        if (node == null || node.right == null) {
            return node;
        } else {
            return this.maxNode(node.right);
        }
    }

    getNodeByIndex(index) {
        let count = { val: 0 };
        return this.inOrderTraversal(this.#root, index, count);
    }

    inOrderTraversal(node, index, count) {
        if (node === null)
            return null;

        let left = this.inOrderTraversal(node.left, index, count);
        
        if (left !== null)
            return left;

        if (count.val === index)
            return node;
        count.val++;

        return this.inOrderTraversal(node.right, index, count);
    }
    getAllNodes(callback) {
        this.inOrderTraversalAll(this.#root, callback);
    }

    inOrderTraversalAll(node, callback) {
        if (node === null) return;
        this.inOrderTraversalAll(node.left, callback);
        callback(node.value);
        this.inOrderTraversalAll(node.right, callback);
    }
}

export default BST;






class Node {
    value
    right
    left
    constructor (value){
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

