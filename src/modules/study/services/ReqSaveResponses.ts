import type { Response } from "../../../types/Response";
import axios from "axios";

export async function ReqSaveResponses(responses: Response[]){
    try {
        const res =await axios.put("http://localhost:8080/tasks/answer", responses);
        return res.data;
    }
    catch{
        return false;
    }
}