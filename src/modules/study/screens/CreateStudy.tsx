import type { TreeNode } from "../../../types/TreeNode";
import Header from "../../../utils/Header";
import CreateTasks from "../components/CreateTasks";
import CreateTree from "../components/CreateTree";
import NavBar from "../components/NavBar";
import { useState } from "react";

export default function CreateStudy() {
    const [tree, setTree] = useState<TreeNode[]>([
        { label: "Inicio", children: [] }
    ]);

    const [tasks, setTasks] = useState([
        {number: 1, description: "", path: ""}
    ]);

    const [step, setStep] = useState(1);

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
                className="sm:px-6 flex flex-col sm:items-center px-3 py-12 border-2 border-gray-200
                            rounded-lg lg:w-[70%]"
                >
                    <div
                    className="w-full mb-10 justify-center flex"
                    >
                        <h1
                        className="text-5xl font-semibold tracking-widest max-sm:text-3xl"
                        >
                        Crea un estudio
                        </h1>
                    </div>
                    <NavBar
                    step={step}
                    />

                    {step === 1 && (
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
                    )}
                    {step === 2 && (
                        <CreateTasks
                        />
                    )}
                    <div 
                    className={`w-full flex ${step === 1 ? "justify-end" : "justify-between"} 
                                items-center mt-6`}
                    >
                        {step > 1 && (
                            <button
                            className="font-semibold py-2 px-4 rounded-lg border
                                    hover:text-white hover:bg-black transition duration-300 cursor-pointer"
                            onClick={() => setStep(step - 1)}
                            >
                                Atras
                            </button>
                        )}
                        <button
                        className="bg-black text-white font-semibold py-2 px-4 rounded-lg
                                hover:text-black hover:bg-white transition duration-300 cursor-pointer"
                        onClick={() => {
                            if(step === 3) return;

                            setStep(step + 1)
                        }}
                        >
                            Siguiente
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}