import axios from "axios";

export async function ReqSendCode(code: string, studyId: string, mail: string) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
        const res = await axios.post(`${backendUrl}/mail/code`, {id: studyId, code: code, mail: mail});
        return res.data;
    } catch {
        return false;
    }
}