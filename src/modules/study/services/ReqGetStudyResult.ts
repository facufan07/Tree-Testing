import axios from "axios";

export async function ReqGetStudyResult(id: string) {
    try {
        const res = await axios.get(`http://localhost:8080/studies/result/${id}`);
        return res.data;
    }
    catch(error) {
        return false;
    }
}