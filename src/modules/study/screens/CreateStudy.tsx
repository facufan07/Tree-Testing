import type { TreeNode } from "../../../types/TreeNode";
import Header from "../../../layout/Header";
import CreateTasks from "../components/CreateTasks";
import CreateTree from "../components/CreateTree";
import NavBar from "../components/NavBar";
import { useState, useRef, useEffect } from "react";
import type { Task } from "../../../types/Task";
import ConfigExperience from "../components/ConfigExperience";
import { ReqCreateStudy } from "../services/ReqCreateStudy";
import { ShowRoutes } from "../services/ShowRoutes";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export default function CreateStudy() {
    const [tree, setTree] = useState<TreeNode[]>([
        { label: "Inicio", children: [] }
    ]);

    const [tasks, setTasks] = useState<Task[]>([
        {number: 1, description: "", correctPath: ""}
    ]);

    const [welcomeMessage, setWelcomeMessage] = useState<string>(
        "¡Bienvenido! Tu opinión es muy importante para nosotros."
    );

    const [finalMessage, setFinalMessage] = useState<string>(
        "¡Gracias por participar! Tu opinión es muy importante para nosotros."
    );

    const [maxResponds, setMaxResponds] = useState<number>(1);

    const [closeDate, setCloseDate] = useState<Date>(new Date());

    const [step, setStep] = useState(1);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const scrollRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();

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

    const handleTasksDescriptionChange = (taskChanged: Task, description: string) => {
        const newTasks = [...tasks];

        newTasks.forEach((task: Task) => {
            if(task.number === taskChanged.number){
                task.description = description;
            }
        })

        setTasks(newTasks);
    }

    const handleTasksCorrectPathChange = (taskChanged: Task, correctPath: string) => {
        const newTasks = [...tasks];

        newTasks.forEach((task: Task) => {
            if(task.number === taskChanged.number){
                task.correctPath = correctPath;
            }
        })

        setTasks(newTasks);
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

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        if(step === 3) return;

        if (tasks.some((task) => (task.description === "" || task.correctPath === "") && step === 2)) {
            alert("Por favor, completa todas las tareas antes de continuar.");
            return;
        }
        setStep(step + 1);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const res = await ReqCreateStudy(tasks, ShowRoutes(tree),welcomeMessage,maxResponds, closeDate, finalMessage);
        
        if (res === false){
            alert("Ha ocurrido un error al crear el estudio.");
            return;
        }
        
        navigate(`/study/${res}`);
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [step]);

    if(isLoading){
        return (
            <div
            className="w-dvw h-dvh flex items-center justify-center"
            >
                <CircularProgress color="inherit" />
            </div>
        )
    }

    return(
        <div
        className="w-dvw h-dvh overflow-x-hidden"
        ref={scrollRef}
        >
            <Header/>
            <main
            className="flex justify-center py-12"
            >
                <form
                className="sm:px-6 flex flex-col sm:items-center px-3 py-12 border-2 border-gray-200
                            rounded-lg lg:w-[70%] overflow-x-hidden"
                onSubmit={handleSubmit}
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
                        tree={tree}
                        tasks={tasks}
                        setTasks={setTasks}
                        handleTasksDescriptionChange={handleTasksDescriptionChange}
                        handleTasksCorrectPathChange={handleTasksCorrectPathChange}
                        />
                    )}
                    {step === 3 && (
                        <ConfigExperience
                        welcomeMessage={welcomeMessage}
                        setWelcomeMessage={setWelcomeMessage}
                        finalMessage={finalMessage}
                        setFinalMessage={setFinalMessage}
                        maxResponds={maxResponds}
                        setMaxResponds={setMaxResponds}
                        closeDate={closeDate}
                        setCloseDate={setCloseDate}
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
                            type="button"
                            >
                                Atras
                            </button>
                        )}
                        {step !== 3 ? (
                            <button
                            className="bg-black text-white font-semibold py-2 px-4 rounded-lg
                                    hover:text-black hover:bg-white transition duration-300 cursor-pointer"
                            onClick={handleNextStep}
                            type="button"
                            >
                                Siguiente
                            </button>
                        ):(
                            <button
                            className="bg-black text-white font-semibold py-2 px-4 rounded-lg
                                    hover:text-black hover:bg-white transition duration-300 cursor-pointer"
                            type="submit"
                            >
                                Crear
                            </button>
                        )}
                    </div>
                </form>
            </main>
        </div>
    )
}