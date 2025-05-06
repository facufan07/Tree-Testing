export default function NavBar(){
    return(
        <nav
        className="flex bg-gray-200 rounded-lg px-1 py-1 justify-center w-max max-lg:w-full"
        >
            <div
            className="lg:px-18 max-sm:px-5 px-12 bg-gray-100 rounded-lg py-1"
            >
                <span
                className="font-semibold block text-center max-sm:text-sm"
                >
                1.Crear tu árbol
                </span>
            </div>
            <div
            className="lg:px-18 max-sm:px-5 px-12 py-1"
            >
                <span
                className="font-semibold block text-center max-sm:text-sm text-gray-500"
                >
                2.Definir tareas
                </span>
            </div>
            <div
            className="lg:px-18 max-sm:px-5 px-12 py-1"
            >
                <span
                className="font-semibold block text-center max-sm:text-sm text-gray-500"
                >
                3.Configurar experiencia
                </span>
            </div>
        </nav>
    )
}