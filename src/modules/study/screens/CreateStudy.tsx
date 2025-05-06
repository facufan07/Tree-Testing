import type { TreeNode } from "../../../types/TreeNode";
import Header from "../../../utils/Header";
import CreateTree from "../components/CreateTree";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function CreateStudy() {
    const [tree, setTree] = useState<TreeNode[]>([
        { label: "Inicio", children: [] }
    ]);
    const handleLabelChange = (targetNode: TreeNode, newLabel: string) => {
        const updateLabel = (node: TreeNode) => {
            if(node === targetNode){
                node.label = newLabel;
                return;
            }
            node.children.forEach(updateLabel);
        }

        const newTree = [...tree];
        updateLabel(newTree[0]);
        setTree(newTree);
    }

    const handleDeleteNode = (targetNode: TreeNode) => {
        const deleteNode = (node: TreeNode): void => {
            node.children = node.children.filter(child => child !== targetNode);
            node.children.forEach(deleteNode);
        };

        const newTree = [...tree];
        deleteNode(newTree[0]);
        setTree(newTree);
    };

    return(
        <div
        className="w-dvw h-dvh overflow-x-hidden"
        >
            <Header/>
            <main
            className="flex justify-center py-12"
            >
                <section
                className="sm:px-6 flex flex-col sm:items-center px-3"
                >
                    <NavBar/>
                    <CreateTree
                    node={tree[0]}
                    level={0}
                    onAddChild={(targetNode) => {
                        const addChild = (node:TreeNode) => {
                            if(node === targetNode) {
                                node.children.push({ label: "Nuevo nodo", children: [] });
                                return;
                            }

                            node.children.forEach(addChild);
                        }

                        const newTree = [...tree];
                        addChild(newTree[0]);
                        setTree(newTree);
                    }}
                    handleLabelChange={handleLabelChange}
                    handleDeleteNode={handleDeleteNode}
                    />
                </section>
            </main>
        </div>
    )
}