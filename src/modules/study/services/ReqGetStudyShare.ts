import axios from "axios";

export async function ReqGetStudyShare(id: string) {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
        const res = await axios.get(`${backendUrl}/studies/share/${id}`);
        return res.data;
    }
    catch(error) {
        return false;
    }
}