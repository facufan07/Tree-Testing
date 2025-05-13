import { Link } from "react-router-dom"
import Header from "../../../utils/Header"
import "../../../animations/fadeInLeft.css"

export default function Home() {
    return(
        <div className="w-dvw h-dvh overflow-x-hidden lg:overflow-y-hidden">
            <Header/>
            <main 
            className="w-full h-full flex items-center flex-col lg:justify-center py-12 px-6"
            >
                <section
                className="flex items-center flex-col fadeInLeft"
                >
                    <h2
                    className="text-5xl font-bold tracking-widest text-center mb-7"
                    >
                    Tree Testing
                    </h2>
                    <p
                    className="text-center text-lg mb-7 font-semibold text-gray-700 tracking-wide"
                    >
                    Crea tu propio estudio de Tree Testing para validar la navegación de tu sitio o app. 
                    Sin registro, sin complicaciones.
                    </p>
                    <Link to={"/create"}>
                        <button
                        className="bg-black py-2 px-4 rounded-lg flex items-center text-white 
                                hover:text-black hover:bg-white transition-all duration-300 ease-in-out
                                cursor-pointer"
                        >
                            <span
                            className="font-semibold text-lg"
                            >
                            Crear nuevo estudio
                            </span>
                        </button>
                    </Link>
                </section>
                <section 
                className="flex gap-9 mt-20 flex-wrap justify-center"
                >
                    <article
                    className="flex flex-col items-center bg-gray-200 rounded-xl w-[250px] px-8 py-6"
                    >
                        <div
                        className="bg-[#16A34A]/18 mb-4 rounded-full p-4"
                        >
                            <img 
                            src="/table-green.svg" 
                            alt="table" 
                            className="w-7"
                            />
                        </div>
                        <h3 
                        className="text-xl font-semibold text-center mb-2"
                        >
                        Crea tu arbol
                        </h3>
                        <p
                        className="text-center text-md text-gray-500 font-semibold"
                        >
                        Construye facilmente tu propio arbol de navegación
                        </p>
                    </article>
                    <article
                    className="flex flex-col items-center bg-gray-200 rounded-xl w-[250px] px-8 py-6"
                    >
                        <div
                        className="bg-[#2563EB]/18 mb-4 rounded-full p-4"
                        >
                            <img 
                            src="/table-blue.svg" 
                            alt="table" 
                            className="w-7"
                            />
                        </div>
                        <h3
                        className="text-xl font-semibold text-center mb-2"
                        >
                        Define tareas
                        </h3>
                        <p
                        className="text-center text-md text-gray-500 font-semibold"
                        >
                        Crea preguntas tipo "¿Dónde buscarías X?" para validar tu estructura.
                        </p>
                    </article>
                    <article
                    className="flex flex-col items-center bg-gray-200 rounded-xl w-[250px] px-8 py-6 
                                max-lg:mb-5"
                    >
                        <div
                        className="bg-[#9333ea]/18 mb-4 rounded-full p-4"
                        >
                            <img 
                            src="/metric.svg" 
                            alt="Metric" 
                            className="w-7"
                            />
                        </div>
                        
                        <h3
                        className="text-xl font-semibold text-center mb-2"
                        >
                        Analiza resultados
                        </h3>
                        <p
                        className="text-center text-sm text-gray-500 font-semibold"
                        >
                        Visualiza rutas elegidas, porcentajes de acierto y heatmaps de navegación.
                        </p>
                    </article>
                </section>
            </main>
        </div>
    )
}