class TreeNode {
    constructor(value){
        this.value = value;
        this.children = [];
    }
}


const root = new TreeNode(1)
const child1 = new TreeNode(2)
const child2 = new TreeNode(3)


root.children.push(child1, child2)