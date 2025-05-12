import type { TreeNode } from "../../../types/TreeNode";

export function ShowRoutes(tree: TreeNode[]):string[] {
    let routes: Array<string> = [];

    const traverseTree = (node: TreeNode, path: string) => {
        routes.push(path + node.label);
        if (node.children.length !== 0) {
            for (const child of node.children) {
                traverseTree(child, path + node.label + " > ");
            }
        } 
        
    };
    
    traverseTree(tree[0], "");
    
    return routes;
}