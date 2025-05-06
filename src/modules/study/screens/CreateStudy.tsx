import Header from "../../../utils/Header";
import CreateTree from "../components/CreateTree";
import NavBar from "../components/NavBar";

export default function CreateStudy() {
    return(
        <div
        className="w-dvw h-dvh"
        >
            <Header/>
            <main
            className="flex justify-center py-12"
            >
                <section
                className="sm:px-6 flex flex-col sm:items-center px-3"
                >
                    <NavBar/>
                    <CreateTree/>
                </section>
            </main>
        </div>
    )
}