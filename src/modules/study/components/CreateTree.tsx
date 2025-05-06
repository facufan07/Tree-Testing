import type { TreeNode } from "../../../types/TreeNode";
import TreeNodeComponent from "./TreeNodeComponent";

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
        className="flex flex-col items-center px-6 py-7 shadow-md border-2 border-gray-100 rounded-lg
                    mt-5 max-sm:w-full"
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
            <TreeNodeComponent
            node={node}
            level={level}
            onAddChild={onAddChild}
            handleLabelChange={handleLabelChange}
            handleDeleteNode={handleDeleteNode}
            />
            <div className="w-full mt-6">
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
                    className="text-gray-600 font-semibold mb-1"
                    >
                    Haz clic en las flechas para expandir/colapsar nodos
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