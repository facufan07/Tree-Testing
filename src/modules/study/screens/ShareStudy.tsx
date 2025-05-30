import { useEffect, useState } from "react";
import Header from "../../../layout/Header";
import { ReqGetStudyShare } from "../services/ReqGetStudyShare";
import { useParams } from "react-router-dom";
import type { StudyInfoShare } from "../../../types/StudyInfoShare";
import type { TaskShare } from "../../../types/TaskShare";
import SelectComponent from "../components/SelectComponent";
import type { Response } from "../../../types/Response";
import { ReqSaveResponses } from "../services/ReqSaveResponses";
import CircularProgress from '@mui/material/CircularProgress';
import "../../../animations/fadeInLeft.css";
import EmailVerifier from "../components/EmailVerifier";

export default function ShareStudy() {
    const [study, setStudy] = useState<StudyInfoShare>({
        welcomeMessage: "",
        finalMessage: "",
        isEnabled: false,
        paths: [],
        tasks: []
    });

    const [responses, setResponses] = useState<Response[]>([]);

    const [maxPages, setMaxPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [currentTask, setCurrentTask] = useState<TaskShare>({
        id: 0,
        number: 0,
        description: "",
    });
    const [isStarted, setIsStarted] = useState<boolean>(true);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [selectedPath, setSelectedPath] = useState<string>("Selecciona una ruta");
    const [loading, setLoading] = useState<boolean>(true);

    const { studyId } = useParams();

    useEffect(() => {
        async function getStudy() {
            const res = await ReqGetStudyShare(`${studyId}`);

            if (res !== false) {
                setStudy(res);
                setMaxPages(res.tasks.length);
            }
            
            setLoading(false);
        }
        getStudy(); 
    }, [])

    function handleStartStudy(){
        setIsStarted(false);
        setCurrentTask(study.tasks[0]);
    }

    function handleNextTask() {
        if(currentPage < maxPages - 1) {
            setResponses(prev => [...prev, { taskId: currentTask.id, path: selectedPath }]);
            setIsSelected(false);
            setSelectedPath("Selecciona una ruta");
            setCurrentPage(currentPage + 1);
            setCurrentTask(study.tasks[currentPage + 1]);
            console.log(responses);
        }
    }

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault();
        setIsSelected(false)
        const newResponses = [...responses, { taskId: currentTask.id, path: selectedPath }];
        setResponses(newResponses);

        const res = await ReqSaveResponses(newResponses);
        console.log(res);
    }

    if(loading) {
        return (
            <div
            className="w-dvw h-dvh flex items-center justify-center"
            >
                <CircularProgress color="inherit" />
            </div>
        )
    }

    if(study.isEnabled === false) {
        return (
            <div
            className="w-dvw h-dvh flex items-center justify-center"
            >
                <h1
                className="text-2xl font-semibold tracking-widest"
                >
                Este estudio a finalizado.
                </h1>
            </div>
        )
    }

    return (
        <div
        className="overflow-x-hidden"
        >
            <Header/>
            <main
            className="flex justify-center py-12 items-center"
            >
                <section
                className={`sm:px-6 flex flex-col sm:items-center px-3 py-12 border-2 border-gray-200
                            rounded-lg lg:w-[70%] overflow-x-hidden min-h-[420px] 
                            ${isStarted ? "justify-center items-center" : ""} fadeInLeft
                            overflow-x-hidden`}
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
                        <form
                        className="w-full fadeInLeft h-full"
                        onSubmit={handleSubmit}
                        >
                            {isFinished ? (
                                <EmailVerifier
                                studyId={`${studyId}`}
                                />
                            ):(
                                <>
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
                                setIsSelected={setIsSelected}
                                />
                                {currentPage === maxPages - 1 ? (
                                    <button
                                    className={`w-full rounded-lg py-2
                                                transition-colors duration-300
                                                text-white font-semibold text-lg tracking-widest
                                                text-center mt-[150px]
                                                ${!isSelected ? "cursor-not-allowed bg-gray-500" : 
                                                "cursor-pointer bg-black hover:bg-gray-800"}`}
                                    disabled={!isSelected}
                                    type="button"
                                    onClick={() => setIsFinished(true)}
                                    >
                                        Finalizar estudio
                                    </button>
                                ): (
                                    <button
                                    className={`w-full rounded-lg py-2
                                                transition-colors duration-300
                                                text-white font-semibold text-lg tracking-widest
                                                text-center mt-[150px]
                                                ${!isSelected ? "cursor-not-allowed bg-gray-500" : 
                                                "cursor-pointer bg-black hover:bg-gray-800"}`}
                                    onClick={handleNextTask}
                                    disabled={!isSelected}
                                    type="button"
                                    >
                                        Continuar
                                    </button>
                                
                                )}
                                </>
                            )}
                            
                        </form>
                    )}
                </section>
                
            </main>
        </div>
    )
}