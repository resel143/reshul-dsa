class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null;
    }
}


function insert(root, value){
    if(root == null) return new Node(value)

    if( value < root.value) root.left = insert(root.left , value)
    else root.right = insert(root.right, value)

    return root;
}


let root = insert(null, 3)
root = insert(root, 4)
root = insert(root, 2)
root = insert(root, 5)
root = insert(root, 1)



function levelOrderTraversal(root){
    if(root == null) return;
    let queue = [root];

    while(queue.length > 0) {
        let node = queue.shift();

        console.log(node.value)

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
}


levelOrderTraversal(root)
