import { useEffect, useState } from "react"
import type { TreeNode } from "../../../types/TreeNode";
import type { Task } from "../../../types/Task";
import { ShowRoutes } from "../services/ShowRoutes";
import TaskComponent from "./TaskComponent";
import "../../../animations/fadeInLeft.css";

interface CreateTasksProps {
    tree: TreeNode[];
    tasks: Task[];
    setTasks: Function;
    handleTasksCorrectPathChange: Function;
    handleTasksDescriptionChange: Function;
}
export default function CreateTasks({ tree, tasks, setTasks, handleTasksCorrectPathChange, 
                                    handleTasksDescriptionChange  }:CreateTasksProps) {

    const [paths, setPaths] = useState<string[]>([]);

    useEffect(()=> {
        const extractedPaths = ShowRoutes(tree);
        setPaths(extractedPaths);
    }, [])

    return(
        <div
        className="w-full px-6 py-7 fadeInLeft"
        >
            <div
            className="w-full"
            >
                <h2
                className="tracking-widest text-2xl font-semibold mb-1 max-sm:text-xl"
                >
                Define las tareas
                </h2>
                <p
                className="text-gray-500 font-semibold mb-6 max-sm:text-sm"
                >
                    Crea preguntas del tipo "¿Dónde buscarías X?" para que los 
                    participantes naveguen por tu estructura.
                </p>

                <h3
                className="font-semibold tracking-wide text-lg"
                >
                Tareas para los participantes:
                </h3>
            </div>

            <div>
                {tasks.map((task, i) => (
                    <TaskComponent
                    key={i}
                    task={task}
                    paths={paths}
                    tasks={tasks}
                    setTasks={setTasks}
                    handleTasksCorrectPathChange={handleTasksCorrectPathChange}
                    handleTasksDescriptionChange={handleTasksDescriptionChange}
                    />
                ))}
            </div>

            <div
            className="flex items-center justify-end mt-12"
            >
                <button
                className="bg-black text-white px-4 py-2 rounded-lg font-semibold
                            hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                onClick={() => {
                    setTasks([...tasks, 
                        {
                            number: tasks.length + 1,
                            description: "",
                            correctPath: ""
                        }
                    ]);
                }}
                type="button"
                >
                    Agregar tarea
                </button>
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
                    Crea tareas claras y específicas
                    </li>
                    <li
                    className="text-gray-600 font-semibold mb-1"
                    >
                    Evita dar pistas sobre la ubicación en la descripción
                    </li>
                    <li
                    className="text-gray-600 font-semibold"
                    >
                    Asigna la ruta correcta para medir la tasa de éxito
                    </li>
                </ul>
            </div>
        </div>
    )
}