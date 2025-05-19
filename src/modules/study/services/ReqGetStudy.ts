import axios from "axios";

export async function ReqGetStudy(id: string) {
    try {
        const res = await axios.get(`http://localhost:8080/studies/${id}`);

        return res.data;
    }
    catch{
        return false;
    }
}