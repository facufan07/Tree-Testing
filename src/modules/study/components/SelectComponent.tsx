import { useState } from "react";

interface SelectComponentProps {
    paths: string[];
    selectedPath: string;
    setSelectedPath: (path: string) => void;
}

export default function SelectComponent({
    paths,
    selectedPath,
    setSelectedPath,
}: SelectComponentProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div
            className="relative"
            >
                <button
                className="flex items-center justify-between w-full cursor-pointer 
                            border-2 px-4 py-2 rounded-lg mt-4 hover:bg-gray-200 transition-all duration-200"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                >
                    <span
                    className="font-semibold text-gray-500 truncate"
                    >
                    {selectedPath}
                    </span>
                    <img 
                    src="/arrow-down.svg" 
                    alt="arrow-down" 
                    className="w-5"
                    />
                </button>

                <div
                className={`absolute bg-gray-300 w-full h-[200px] bottom-[-200px] rounded-lg
                            overflow-y-auto overflow-x-auto flex flex-col items-start
                            ${isOpen ? 'block' : 'hidden'}`}
                >
                    {paths.map((path: string, i: number) => (
                        <button
                        className="py-3 hover:bg-gray-200 w-full cursor-pointer px-5 text-start
                                    transition-all duration-200"
                        key={i}
                        onClick={() => {
                            setSelectedPath(path);
                            setIsOpen(false);
                        }}
                        type="button"
                        >
                            <span
                            className="font-semibold tracking-wider"
                            >
                            {path}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
    )
}