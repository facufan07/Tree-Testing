import type { TreeNode } from "../../../types/TreeNode";
import TreeNodeComponent from "./TreeNodeComponent";
import "../../../animations/fadeInLeft.css";

interface CreateTreeProps {
    onAddChild: (node: TreeNode) => void;
    handleLabelChange: (targetNode: TreeNode, newLabel: string) => void;
    handleDeleteNode: (targetNode: TreeNode) => void;
    node: TreeNode;
    level: number;
}

export default function CreateTree({node, level = 0, onAddChild, handleLabelChange, 
                                    handleDeleteNode}: CreateTreeProps) {
    return(
        <div
        className="flex flex-col items-center px-6 py-7
                    mt-5 max-sm:w-full fadeInLeft"
        >
            <div
            className="w-full mb-6"
            >
                <h2
                className="tracking-widest text-2xl font-semibold mb-1 max-sm:text-xl"
                >
                Crea tu árbol de navegación
                </h2>
                <p
                className="text-gray-500 font-semibold mb-6 max-sm:text-sm"
                >
                Construye la estructura de navegación que quieres validar. 
                Agrega nodos y subnodos para representar tu menú o categorías.
                </p>
                <h3
                className="font-semibold tracking-wide text-lg"
                >
                Estructura de navegación
                </h3>
            </div>
            <div
            className="flex flex-col w-[80%] max-sm:w-[300px] shadow-sm shadow-gray-200 border-2 border-gray-200 
            rounded-lg py-6 px-5 overflow-x-auto"
            >
                <TreeNodeComponent
                node={node}
                level={level}
                onAddChild={onAddChild}
                handleLabelChange={handleLabelChange}
                handleDeleteNode={handleDeleteNode}
                />
            </div>
            <div className="w-full mt-6 bg-gray-200 rounded-lg px-6 py-4">
                <h4
                className="text-gray-600 font-semibold mb-2"
                >
                Consejos:
                </h4>
                <ul
                className="list-disc pl-6"
                >
                    <li
                    className="text-gray-600 font-semibold mb-1"
                    >
                    Usa el botón + para agregar subnodos
                    </li>
                    <li
                    className="text-gray-600 font-semibold"
                    >
                    Organiza tu estructura de forma jerárquica
                    </li>
                </ul>
            </div>
        </div>
    )
}