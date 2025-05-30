import axios from "axios";

export async function ReqSendMail(mail: string, studyId: string) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try{
        const res = await axios.post(`${backendUrl}/mail`, {id:studyId, mail: mail});
        return res.data;
    }
    catch{
        return false;
    }
}