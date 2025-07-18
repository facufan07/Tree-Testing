import Header from "../../../layout/Header";
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@mui/material';
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { ReqGetStudyResult } from "../services/ReqGetStudyResult";
import type { StudyInfoResult } from "../../../types/StudyInfoResult";
import SuccessRate from "../components/SuccessRate";
import CircularProgress from '@mui/material/CircularProgress';
import "../../../animations/fadeInLeft.css";
import TotalSuccess from "../components/TotalSuccess";


export default function ResultsStudy() {

    const [study, setStudy] = useState<StudyInfoResult>({
        welcomeMessage: "",
        finalMessage: "",
        isEnabled: false,
        participants: 0,
        paths: [],
        tasks: [],
        secret: ""
    });

    const { studyId } = useParams();
    const idAndSecret = studyId?.split("_");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getStudy() {
            const res = await ReqGetStudyResult(`${idAndSecret?.[0]}`);

            if (res !== false) {
                setStudy(res);
            }
            setLoading(false);
        }

        getStudy();
    }, [])

    if(loading){
        return (
            <div className="w-dvw h-dvh flex items-center justify-center">
                <CircularProgress color="inherit" />
            </div>
        )
    }

    if(idAndSecret?.[1] !== study.secret){
        return(
            <div className="w-dvw h-dvh flex items-center justify-center">
                <h1 className="text-2xl font-semibold tracking-widest">Acceso denegado</h1>
            </div>
        )
    }

    return (
        <div
        className="w-dvw h-dvh overflow-x-hidden"
        >
            <Header/>

            <main
            className="flex justify-center py-12"
            >   
                <section
                className="sm:px-6 flex flex-col sm:items-center px-3 py-12 border-2 border-gray-200
                            rounded-lg lg:w-[70%] overflow-x-hidden fadeInLeft"
                >
                    <div
                    className="w-full mb-4 flex flex-col items-center"
                    >
                        <h1
                        className="tracking-widest text-4xl font-semibold mb-1"
                        >
                        Resultados
                        </h1>
                        <p
                        className="text-gray-500 font-semibold text-center"
                        >
                        Análisis detallado de las respuestas de los participantes para cada tarea.
                        </p>
                    </div>
                    <div
                    className="w-full flex justify-center"
                    >
                        <span
                        className="font-semibold text-lg text-gray-600"
                        >
                        Total de participantes: <b className="font-medium tracking-widest text-black">{study.participants}</b>
                        </span>
                    </div>
                    <div
                    className="w-full border-2 border-gray-300 mt-4 p-5 rounded-lg"
                    >
                        <h2
                        className="font-semibold tracking-wider text-xl"
                        >
                        Tasa de éxito por tarea
                        </h2>
                        <p
                        className="text-gray-500 font-semibold"
                        >
                        Análisis detallado de las respuestas de los participantes para cada tarea.
                        </p>
                        {study.tasks.map((task, i) => (
                            <SuccessRate
                            key={i}
                            rate={task.rate}
                            taskNumber={task.number}
                            />
                        ))}
                        
                    </div>
                    <div
                    className="w-full border-2 border-gray-300 mt-4 p-5 rounded-lg"
                    >
                        <h2
                        className="font-semibold tracking-wider text-xl mb-3"
                        >
                        Metricas detalladas por tarea
                        </h2>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <span
                                            className="font-semibold tracking-widest"
                                            >
                                            Tarea
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span
                                            className="font-semibold tracking-widest"
                                            >
                                            Éxito
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span
                                            className="font-semibold tracking-widest"
                                            >
                                            Fallo
                                            </span>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {study.tasks.map((task, i) => (
                                        <TableRow
                                        key={i}
                                        >
                                            <TableCell>
                                                <span
                                                className="font-semibold tracking-widest"
                                                >
                                                Tarea {task.number}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span
                                                className="font-semibold tracking-widest"
                                                >
                                                {task.successResponses}
                                                </span>
                                            </TableCell>
                                            <TableCell>
                                                <span
                                                className="font-semibold tracking-widest"
                                                >
                                                {task.failureResponses}
                                                </span>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <TotalSuccess
                    tasks={study.tasks}
                    />
                </section>
                
            </main>
        </div>
    )
}