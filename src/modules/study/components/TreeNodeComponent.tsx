import type { TreeNode } from "../../../types/TreeNode";

interface TreeNodeProps {
    node: TreeNode;
    level: number;
    onAddChild: (node: TreeNode) => void;
    handleLabelChange: (targetNode: TreeNode, newLabel: string) => void;
    handleDeleteNode: (targetNode: TreeNode) => void;
}

export default function TreeNodeComponent({node, level = 0, onAddChild, handleLabelChange, 
                                            handleDeleteNode}: TreeNodeProps) {

    return(
        <div
        >
            <div
            className="flex items-center mb-3 mr-5"
            style={{ paddingLeft: `${level * 50}px` }}
            >
                <input 
                type="text" 
                value={node.label}
                onChange={(e) => handleLabelChange(node, e.target.value)}
                className="mr-2 outline-none border-2 border-gray-300 rounded-md px-2 py-1
                    focus:border-blue-300 focus:ring-blue-500 focus:ring-1 transition-all
                    duration-200"
                />
                <button
                className="cursor-pointer font-bold mr-2"
                onClick={() => onAddChild(node)}
                type="button"
                >
                    +
                </button>
                {level > 0 && (
                    <button
                    onClick={() => handleDeleteNode(node)}
                    className="cursor-pointer"
                    type="button"
                    >
                        🗑
                    </button>
                )}
            </div>

            {node.children.map((child, index) => (
                <TreeNodeComponent
                key={index}
                node={child}
                level={level + 1}
                onAddChild={onAddChild}
                handleLabelChange={handleLabelChange}
                handleDeleteNode={handleDeleteNode}
                />
            ))}
        </div>
    )
}