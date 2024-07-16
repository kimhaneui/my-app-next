import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            const { id } = req.query; // URL parameter에서 id를 가져옴
            let db = (await connectDB).db('forum');
            let result = await db.collection('post').deleteOne({ _id: new ObjectId(id) });
            console.log(result);
            res.status(200).json('삭제완료');
        } catch (error) {
            console.error(error);
            res.status(500).json('서버 오류');
        }
    } else {
        res.status(404).json({ message: 'Not Found' });
    }
}