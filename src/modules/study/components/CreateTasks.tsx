export default function CreateTasks() {
    return(
        <div>
            <div
            className="w-full mt-5"
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