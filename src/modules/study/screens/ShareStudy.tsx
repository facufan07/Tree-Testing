import { useEffect, useState } from "react";
import Header from "../../../utils/Header";
import { ReqGetStudyShare } from "../services/ReqGetStudyShare";
import { useParams } from "react-router-dom";
import type { StudyInfoShare } from "../../../types/StudyInfoShare";


export default function ShareStudy() {
    const [study, setStudy] = useState<StudyInfoShare>({
        welcomeMessage: "",
        finalMessage: "",
        isEnabled: false,
        paths: [],
        tasks: []
    });

    const [pages, setPages] = useState<number>(0);
    const [isStarted, setIsStarted] = useState<boolean>(true);

    const { studyId } = useParams();

    useEffect(() => {
        async function getStudy() {
            const res = await ReqGetStudyShare(`${studyId}`);

            if (res !== false) {
                setStudy(res);
                setPages(res.tasks.length);
            }
            console.log(res);
        }
        getStudy(); 
    }, [])
    return (
        <div>
            <Header/>
            <main
            className="flex justify-center py-12"
            >
                <section
                className="sm:px-6 flex flex-col sm:items-center px-3 py-12 border-2 border-gray-200
                            rounded-lg lg:w-[70%] overflow-x-hidden"
                >
                    {isStarted && (
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
                            onClick={() => setIsStarted(false)}
                            >
                                <span
                                className="text-white font-semibold text-lg tracking-widest
                                            text-center"
                                >
                                Comenzar
                                </span>
                            </button>
                        </div>
                    )}
                </section>
            </main>
        </div>
    )
}