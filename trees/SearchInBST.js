class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function insert(root, value){
    if(root== null) return new Node(value)

    if(value< root.value) root.left = insert(root.left, value)
    else root.right = insert(root.right, value)

    return root;
}


let root = insert(null, 3)
root = insert(null, 4)
root = insert(null, 2)
root = insert(null, 1)
root = insert(null, 5)

function searchInBST(root, value){
    if(root == null) return false;
    if(root.value == value) return true;

    if(value < root.value) return searchInBST(root.left)
    else return searchInBST(root.right)
}


console.log(`Searching for 7`, searchInBST(root, 7))
console.log(`Searching for 23`, searchInBST(root, 23))
console.log(`Searching for 5`, searchInBST(root, 5))