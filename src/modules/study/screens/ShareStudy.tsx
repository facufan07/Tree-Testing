import { useEffect, useState } from "react";
import Header from "../../../utils/Header";
import { ReqGetStudyShare } from "../services/ReqGetStudyShare";
import { useParams } from "react-router-dom";
import type { StudyInfoShare } from "../../../types/StudyInfoShare";
import type { TaskShare } from "../../../types/TaskShare";
import SelectComponent from "../components/SelectComponent";


export default function ShareStudy() {
    const [study, setStudy] = useState<StudyInfoShare>({
        welcomeMessage: "",
        finalMessage: "",
        isEnabled: false,
        paths: [],
        tasks: []
    });

    const [maxPages, setMaxPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [currentTask, setCurrentTask] = useState<TaskShare>({
        id: 0,
        number: 0,
        description: "",
    });
    const [isStarted, setIsStarted] = useState<boolean>(true);
    const [selectedPath, setSelectedPath] = useState<string>("Selecciona una ruta");

    const { studyId } = useParams();

    useEffect(() => {
        async function getStudy() {
            const res = await ReqGetStudyShare(`${studyId}`);

            if (res !== false) {
                setStudy(res);
                setMaxPages(res.tasks.length);
            }
            console.log(res);
        }
        getStudy(); 
    }, [])

    function handleStartStudy(){
        setIsStarted(false);
        setCurrentTask(study.tasks[0]);
    }

    function handleNextTask() {
        if(currentPage < maxPages - 1) {
            setCurrentPage(currentPage + 1);
            setCurrentTask(study.tasks[currentPage + 1]);
        }
    }
    return (
        <div>
            <Header/>
            <main
            className="flex justify-center py-12 items-center"
            >
                <section
                className={`sm:px-6 flex flex-col sm:items-center px-3 py-12 border-2 border-gray-200
                            rounded-lg lg:w-[70%] overflow-x-hidden min-h-[420px] 
                            ${isStarted ? "justify-center items-center" : ""}`}
                >
                    {isStarted ? (
                        <div
                        className="w-full"
                        >
                            <h2
                            className="text-center font-semibold text-3xl tracking-widest mb-4"
                            >
                            ¡Bienvenido al estudio!
                            </h2>
                            <p
                            className="font-semibold text-gray-700 text-center mb-4 text-xl"
                            >
                            {study.welcomeMessage}
                            </p>
                            <p
                            className="text-gray-500 text-center mb-4 font-semibold"
                            >
                            En este estudio, se te presentarán varias tareas. Para cada tarea, 
                            navega por la estructura de menú hasta encontrar donde crees que está 
                            la información solicitada.
                            </p>
                            <p
                            className="text-gray-500 text-center mb-10 font-semibold"
                            >
                            No hay respuestas correctas o incorrectas. Estamos evaluando la estructura, 
                            no a ti.
                            </p>
                            <button
                            className="bg-black w-full rounded-lg py-2 cursor-pointer
                                        hover:bg-gray-800 transition-colors duration-300"
                            onClick={handleStartStudy}
                            >
                                <span
                                className="text-white font-semibold text-lg tracking-widest
                                            text-center"
                                >
                                Comenzar
                                </span>
                            </button>
                        </div>
                    ):(
                        <div
                        className="w-full"
                        >
                            <h2
                            className="text-center font-semibold text-3xl tracking-widest mb-4"
                            >
                            Tarea {currentTask.number}
                            </h2>
                            <p
                            className="font-semibold text-gray-700 text-center mb-10 text-xl"
                            >
                            {currentTask.description}
                            </p>
                            <SelectComponent
                            paths={study.paths}
                            selectedPath={selectedPath}
                            setSelectedPath={setSelectedPath}
                            />
                            <button
                            className="bg-black w-full rounded-lg py-2 cursor-pointer
                                        hover:bg-gray-800 transition-colors duration-300
                                        text-white font-semibold text-lg tracking-widest
                                        text-center mt-[150px]"
                            onClick={handleNextTask}
                            >
                                Continuar
                            </button>
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}