import { useState } from "react";
import "../../../animations/fadeInLeft.css"
import { ReqSendMail } from "../services/ReqSendMail"
import { ReqSendCode } from "../services/ReqSendCode";
import CircularProgress from '@mui/material/CircularProgress';

interface EmailVerifierProps {
    studyId: string;
}

export default function EmailVerifier({studyId}: EmailVerifierProps) {

    async function handleSendMail(){
        setIsLoading(true);
        const res = await ReqSendMail(mail, studyId);

        if (res){
            setStep(2);
        }
        else {
            alert("Error al enviar el correo. Por favor, inténtalo de nuevo.");
        }
        setIsLoading(false);
    }

    async function handleConfirmCode(){
        setIsLoading(true);
        const res = await ReqSendCode(code, studyId, mail);

        if (res){
            setStep(3);
        }
        else {
            alert("Error con el codigo. Por favor, inténtalo de nuevo.");
        }
        setIsLoading(false);
    }

    const [mail, setMail] = useState<string>("");
    const [step, setStep] = useState<number>(1);
    const [code, setCode] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    if (isLoading) {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <CircularProgress color="inherit"/>
            </div>
        );
    }

    return(
        <div
        className="w-full flex flex-col items-center fadeInLeft h-full"
        >
            {step === 1 && (
                <>
                <h2
                className="text-center font-semibold text-3xl tracking-widest mb-4"
                >
                Necesitamos que nos proveas tu dirección de correo para verificar la respuesta
                </h2>
                <p
                className="font-semibold text-gray-700 text-center mb-10 text-xl"
                >
                Una vez que lo hagas, te enviaremos un código de confirmación a tu correo
                </p>

                <input 
                type="email" 
                className="border-2 border-gray-300 rounded-lg px-4 py-2 mb-10 outline-none 
                        focus:border-black transition-colors duration-300 text-center"
                placeholder="Ingresa tu correo"
                onChange={(e) => setMail(e.target.value)}
                name="email"
                autoComplete="email"
                />

                <button 
                type="button"
                className="bg-black text-white px-6 py-2 rounded-lg font-semibold cursor-pointer
                        hover:bg-gray-800 transition-all duration-200"
                onClick={handleSendMail}
                >
                Enviar
                </button>
                </>
            )}
            {step === 2 && (
                <div
                className="fadeInLeft"
                >
                    <h2
                    className="text-center font-semibold text-3xl tracking-widest mb-4"
                    >
                    El correo ha sido enviado
                    </h2>
                    <p
                    className="font-semibold text-gray-700 text-center mb-10 text-xl"
                    >
                    Por favor, revisa tu bandeja de entrada o carpeta de spam
                    </p>

                    <span
                    className="text-gray-500 font-semibold mb-2 block text-center"
                    >
                    Ingrese el código de confirmación
                    </span>
                    <input 
                    type="text" 
                    className="border-2 border-gray-300 rounded-lg px-4 py-2 mb-10 outline-none
                            focus:border-black transition-colors duration-300 text-center block
                            mx-auto"
                    placeholder="Código de confirmación"
                    onChange={(e) => setCode(e.target.value)}
                    />
                    <button
                    className="bg-black text-white px-6 py-2 rounded-lg font-semibold cursor-pointer
                            hover:bg-gray-800 transition-all duration-200 mx-auto block"
                    onClick={handleConfirmCode}
                    >
                    Confirmar
                    </button>
                </div>
            )}
            {step === 3 && (
                <div
                className="w-full flex flex-col items-center justify-center h-full fadeInLeft">
                <h2
                className="text-center font-semibold text-3xl tracking-widest mb-4"
                >
                Gracias por tu colaboración
                </h2>
                <p
                className="font-semibold text-gray-700 text-center text-xl"
                >
                Ya puedes cerrar esta ventana
                </p>
                </div>
            )}
        </div>
    )
}