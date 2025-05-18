import axios from "axios";
import type { Task } from "../../../types/Task";

export const ReqCreateStudy = async (tasks: Task[], paths: string[], welcomeMessage: string, 
                                    maxResponds: number, closeDate: Date, finalMessage: string):Promise<any> => {
    
    try{
        const res = await axios.post("http://localhost:8080/studies/create", {
            tasks: tasks, 
            paths: paths,
            welcomeMessage: welcomeMessage,
            participantsLimit: maxResponds,
            expirationAt: closeDate, 
            finalMessage:finalMessage
        })

        return res.data;
    }catch{
        return false;
    }
}