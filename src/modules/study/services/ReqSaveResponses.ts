import type { Response } from "../../../types/Response";
import axios from "axios";

export async function ReqSaveResponses(responses: Response[]){
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    try {
        const res =await axios.put(`${backendUrl}/tasks/answer`, responses);
        return res.data;
    }
    catch{
        return false;
    }
}