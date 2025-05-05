export default function Home() {
    return(
        <>
            <header 
            className="py-5 px-4 border-b-[1px] border-b-gray-300"
            >
                <h1 
                className="text-2xl font-semibold tracking-widest"
                >
                Tree Testing
                </h1>
            </header>
            <main 
            className="w-full flex items-center flex-col justify-center h-dvh"
            >
                <section
                className="flex items-center flex-col"
                >
                    <h2
                    className="text-6xl font-bold tracking-widest text-center mb-7"
                    >
                    Tree Testing
                    </h2>
                    <p
                    className="text-center text-lg mb-7 font-semibold text-gray-700"
                    >
                    Crea tu propio estudio de Tree Testing para validar la navegación de tu sitio o app. 
                    Sin registro, sin complicaciones.
                    </p>
                    <button
                    className="bg-black py-2 px-4 rounded-lg flex items-center"
                    >
                        <span
                        className="text-white font-semibold text-lg"
                        >
                        Crear nuevo estudio
                        </span>
                    </button>
                </section>
                <section 
                className="flex gap-4 mt-20"
                >
                    <article
                    className="flex flex-col items-center bg-gray-200 rounded-xl w-[250px] px-8 py-4"
                    >
                        <img src="" alt="" />
                        <h3 
                        className="text-2xl font-semibold text-center mb-2"
                        >
                        Crea tu arbol
                        </h3>
                        <p
                        className="text-center text-sm text-gray-500 font-semibold"
                        >
                        Construye facilmente tu propio arbol de navegación
                        </p>
                    </article>
                    <article
                    className="flex flex-col items-center bg-gray-200 rounded-xl w-[250px] px-8 py-4"
                    >
                        <img src="" alt="" />
                        <h3
                        className="text-2xl font-semibold text-center mb-2"
                        >
                        Crea tu arbol
                        </h3>
                        <p
                        className="text-center text-sm text-gray-500 font-semibold"
                        >
                        Construye facilmente tu propio arbol de navegación
                        </p>
                    </article>
                    <article
                    className="flex flex-col items-center bg-gray-200 rounded-xl w-[250px] px-8 py-4"
                    >
                        <img src="" alt="" />
                        <h3
                        className="text-2xl font-semibold text-center mb-2"
                        >
                        Crea tu arbol
                        </h3>
                        <p
                        className="text-center text-sm text-gray-500 font-semibold"
                        >
                        Construye facilmente tu propio arbol de navegación
                        </p>
                    </article>
                </section>
            </main>
        </>
    )
}