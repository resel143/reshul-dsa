class Node{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

function inorder(root){
    if(root == null) return;
    inorder(root.left)
    console.log(root.value)
    inorder(root.right)
}


function insert(root, value){
    if(root == null) return new Node(value)

    if(value < root.value) root.left = insert(root.left, value)
    else{
        root.right = insert(root.right, value)
    }

    return root;
}


function height(root){
    if(root == null) return -1;

    return 1+ Math.max(height(root.left), height(root.right))
}


// making a root

let root = insert(null, 3)
root = insert(root, 4)
root =insert(root, 1)
root =insert(root, 2)
root =insert(root, 5)

const heightofTree = height(root)


console.log(`Hieght of the Tree is `, heightofTree)
