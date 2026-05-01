class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right=null;
    }
}

const root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)


// Inorder Traverssal

function inorder(root){
    if(root == null) return;
    inorder(root.left)
    console.log(root.value)
    inorder(root.right)
}


// inorder(root)


// Preorder Traversal
function Preorder(root){
    if(root == null) return;
    console.log(root.value)
    Preorder(root.left)
    Preorder(root.right)
}

// Preorder(root)a

// Post order traversal

function PostOrder(root){
    if(root == null) return;

    PostOrder(root.left)
    PostOrder(root.right)
    console.log(root.value)
}

PostOrder(root)