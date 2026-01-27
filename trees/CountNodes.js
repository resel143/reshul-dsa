class Node{
    constructor(value){
        this.value = value;
        this.left = null
        this.right = null
    }
}

function insert(root, value){
    if(root == null) return new Node(value)

    if(value < root.value) root.left = insert(root.left, value)
    else root.right = insert(root.right, value)

    return root;
}

let root = insert(null, 3)
root = insert(root, 4)
root = insert(root, 2)
root = insert(root, 1)
root = insert(root, 5)


function CountNodes(root){
    if(root== null) return 0;
    return 1 + CountNodes(root.left) + CountNodes(root.right)
}


console.log(`Total Nodes are`, CountNodes(root))
