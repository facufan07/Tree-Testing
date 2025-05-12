import { useState } from "react";
import type { Task } from "../../../types/Task"

interface TaskComponentProps {
    task: Task;
    paths: string[];
    tasks: Task[];
    setTasks: Function;
}

export default function TaskComponent({task, paths, tasks, setTasks}: TaskComponentProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedPath, setSelectedPath] = useState<string>("Selecciona una ruta");


    const handleDeleteTask = () => {
        if(tasks.length === 1) return;

        const newTasks = tasks.filter((t) => t.number !== task.number);
        newTasks.forEach((t, i) => {
            t.number = i + 1;
        });
        setTasks(newTasks);
    }   

    return(
        <div
        className="border-2 border-gray-400 w-[60%] px-6 py-6 rounded-lg mt-8 mx-auto flex flex-col
                    justify-center"
        >
            <div
            className="flex items-center justify-between"
            >
                <h4
                className="text-2xl font-semibold"
                >
                Tarea {task.number}
                </h4>

                {task.number !== 1 && (
                    <button
                    className="cursor-pointer"
                    onClick={handleDeleteTask}
                    >
                        🗑
                    </button>
                )}
            </div>
            <div
            className="flex flex-col gap-2 mt-4 mb-6"
            >
                <span
                className="text-lg font-semibold"
                >
                Descripción de la tarea
                </span>
                <input 
                type="text"
                className="border-2 rounded-lg px-3 py-2 font-semibold outline-none 
                        focus:border-blue-500 transition-all duration-200"
                placeholder="¿Donde buscarias información sobre...?"
                />
            </div>

            <span
            className="text-lg font-semibold"
            >
            Establece la ruta correcta
            </span>
            <div
            className="relative"
            >
                <button
                className="flex items-center justify-between w-full cursor-pointer 
                            border-2 px-4 py-2 rounded-lg mt-4 hover:bg-gray-200 transition-all duration-200"
                onClick={() => setIsOpen(!isOpen)}
                title={selectedPath}
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
                    {paths.map((path, i) => (
                        <button
                        className="py-3 hover:bg-gray-200 w-full cursor-pointer px-5 text-start
                                    transition-all duration-200"
                        key={i}
                        onClick={() => {
                            setSelectedPath(path);
                            setIsOpen(false);
                        }}
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
        </div>
    )
}