import "../../../animations/fadeInLeft.css";
interface ConfigExperienceProps {
    welcomeMessage: string;
    finalMessage: string;
    setWelcomeMessage: Function;
    setFinalMessage: Function;
    maxResponds: number;
    setMaxResponds: Function;
    closeDate: Date;
    setCloseDate: Function;
}

export default function ConfigExperience({ welcomeMessage, finalMessage, setWelcomeMessage, 
                                        setFinalMessage, maxResponds, setMaxResponds, closeDate, 
                                        setCloseDate }: ConfigExperienceProps) {
    return(
        <div
        className="w-full px-6 py-7 fadeInLeft"
        >
            <div
            className="w-full mb-6"
            >
                <h2
                className="tracking-widest text-2xl font-semibold mb-1 max-sm:text-xl"
                >
                Configura la experiencia
                </h2>
                <p
                className="text-gray-500 font-semibold max-sm:text-sm"
                >
                Personaliza los mensajes y configura los parámetros del estudio.
                </p>
            </div>

            <div
            className="w-full mb-6"
            >
                <h3
                className="font-semibold tracking-wide text-lg mb-3"
                >
                Mensaje de bienvenida
                </h3>
                <textarea 
                name="" 
                id=""
                className="w-full bg-gray-300 rounded-lg px-6 py-4 outline-none
                            font-semibold tracking-widest text-sm"
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                >
                </textarea>
            </div>
            <div
            className="w-full mb-12"
            >
                <h3
                className="font-semibold tracking-wide text-lg mb-3"
                >
                Mensaje de despedida
                </h3>
                <textarea 
                name="" 
                id=""
                className="w-full bg-gray-300 rounded-lg px-6 py-4 outline-none
                            font-semibold tracking-widest text-sm"
                value={finalMessage}
                onChange={(e) => setFinalMessage(e.target.value)}
                >
                </textarea>
            </div>
            
            <div
            className="w-full flex sm:justify-between sm:items-center sm:px-20 max-sm:flex-col max-sm:gap-6"
            >
                <div>
                    <h3
                    className="font-semibold tracking-wide text-lg mb-3"
                    >
                    Cantidad máxima de respuestas
                    </h3>
                    <input 
                    type="number" 
                    className="outline-none bg-gray-300 rounded-lg px-3 py-2 w-full font-semibold
                            tracking-widest text-sm"
                    max={100}
                    min={1}
                    value={maxResponds}
                    onChange={(e) => setMaxResponds(parseInt(e.target.value))}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                        }
                    }}
                    />
                </div>
                <div>
                    <h3
                    className="font-semibold tracking-wide text-lg mb-3"
                    >
                    Fecha de cierre
                    </h3>
                    <input 
                    type="date" 
                    className="outline-none bg-gray-300 rounded-lg px-3 py-2 w-full font-semibold
                                tracking-widest text-sm"
                    value={closeDate.toISOString().split('T')[0]}
                    onChange={(e) => setCloseDate(new Date(e.target.value))}
                    min={new Date().toISOString().split("T")[0]}
                    />
                </div>
            </div>
        </div>
    )
}