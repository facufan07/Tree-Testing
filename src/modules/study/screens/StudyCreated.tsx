import { useParams } from "react-router-dom"
import Header from "../../../layout/Header";
import { useState } from "react";
import "../../../animations/fadeInLeft.css"

export default function StudyCreated() {

    const { studyId } = useParams();
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);
    const frontendUrl = import.meta.env.VITE_FRONTEND_URL;
    const id = studyId?.split("_")[0];
    const shareLink = `${frontendUrl}/study/share/${id}`
    const resultsLink = `${frontendUrl}/study/result/${studyId}`

    const copy = (link:string) => {
        navigator.clipboard.writeText(link);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }

    const copy2 = (link:string) => {
        navigator.clipboard.writeText(link);
        setIsCopied2(true);
        setTimeout(() => {
            setIsCopied2(false);
        }, 2000);
    }

    return(
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
                className="flex flex-col items-center"
                >
                    <h1
                    className="text-4xl font-semibold tracking-widest text-center mb-4"
                    >
                    ¡Tu estudio se ha creado con exito!
                    </h1>
                    <p
                    className="text-center text-md mb-7 font-semibold text-gray-700 tracking-wide"
                    >
                    Comparte estos enlaces para comenzar a recopilar datos. 
                    No necesitas iniciar sesión para acceder a los resultados.
                    </p>
                </div>
                <div
                className="bg-[#F0FDF4] px-5 py-5 border-[#BBF7D0] border rounded-lg"
                >
                    <h2
                    className="text-xl font-semibold tracking-widest mb-4 text-[#166534]"
                    >
                    Estudio listo para compartir
                    </h2>
                    <p
                    className="text-[#166534] font-semibold mb-3"
                    >
                    Tu estudio ha sido creado con éxito y contiene exactamente 
                    la estructura y tareas que has definido en los pasos anteriores.
                    </p>

                    <span
                    className="text-[#166534] font-semibold"
                    >
                    Recuerda guardar estos enlaces para acceder a tu estudio y resultados.
                    </span>
                </div>

                <div
                className="w-full px-5 py-5 border-2 border-gray-300 rounded-lg mt-10"
                >
                    <h2
                    className="text-xl font-semibold tracking-widest"
                    >
                    Enlace para participantes
                    </h2>
                    <p
                    className="text-gray-500 font-semibold mb-3"
                    >
                    Comparte este enlace con las personas que quieres que participen en tu estudio.
                    </p>
                    <div
                    className="flex justify-center gap-4 items-center"
                    >
                        <div
                        className="border-2 border-gray-300 rounded-md px-4 py-2 max-sm:w-[200px] 
                                    sm:w-[600px]"
                        >
                            <p
                            className="font-semibold tracking-wide truncate"
                            >
                            {shareLink}
                            </p>
                        </div>
                        <button
                        className="cursor-pointer hover:scale-90 transition-all duration-300"
                        onClick={() => copy(shareLink)}
                        >
                        <img 
                        src="/copy.svg" 
                        alt="copy image" 
                        className="w-5"
                        />
                        </button>
                    </div>
                    {isCopied && (
                        <div
                        className="flex justify-center mt-4"
                        >
                            <span
                            className="text-green-500 font-semibold"
                            >
                            ¡Copiado!
                            </span>
                        </div>
                    )}
                </div>

                <div
                className="w-full px-5 py-5 border-2 border-gray-300 rounded-lg mt-10"
                >
                    <h2
                    className="text-xl font-semibold tracking-widest"
                    >
                    Enlace para ver resultados
                    </h2>
                    <p
                    className="text-gray-500 font-semibold mb-3"
                    >
                    Usa este enlace privado para ver los resultados de tu estudio. 
                    Guárdalo en un lugar seguro.
                    </p>
                    <div
                    className="flex justify-center gap-4 items-center"
                    >
                        <div
                        className="border-2 border-gray-300 rounded-md px-4 py-2 max-sm:w-[200px]
                                    sm:w-[600px]"
                        >
                            <p
                            className="font-semibold tracking-wide truncate"
                            >
                            {resultsLink}
                            </p>
                        </div>
                        <button
                        className="cursor-pointer hover:scale-90 transition-all duration-300"
                        onClick={() => copy2(resultsLink)}
                        >
                        <img 
                        src="/copy.svg" 
                        alt="copy image" 
                        className="w-5"
                        />
                        </button>
                    </div>
                    {isCopied2 && (
                        <div
                        className="flex justify-center mt-4"
                        >
                            <span
                            className="text-green-500 font-semibold"
                            >
                            ¡Copiado!
                            </span>
                        </div>
                    )}
                </div>

                <div
                className="bg-[#FFFBEB] border border-[#FDE68A] rounded-lg px-5 py-5 mt-10"
                >
                    <h2
                    className="text-xl font-semibold tracking-widest mb-4 text-[#92400E]"
                    >
                    Importante
                    </h2>
                    <p
                    className="text-[#92400E] font-semibold mb-3"
                    >
                    Guarda estos enlaces en un lugar seguro. 
                    No se requiere cuenta de usuario, por lo que no podrás recuperarlos si los pierdes.
                    </p>
                    <p
                    className="text-[#92400E] font-semibold"
                    >
                    Tu estudio estará disponible durante 30 días y se 
                    eliminará automáticamente después de este período.
                    </p>
                </div>
            </section>
        </main>
    </div>
    )
}