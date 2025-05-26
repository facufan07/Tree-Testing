import axios from "axios";

export async function ReqGetStudyShare(id: string) {
    try {
        const res = await axios.get(`http://localhost:8080/studies/share/${id}`);
        return res.data;
    }
    catch(error) {
        return false;
    }
}