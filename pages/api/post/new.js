import { connectDB } from "@/util/database"

export default async  function handler(요청, 응답){
    if (요청.method == 'POST') {
      console.log(요청.body)
      if (요청.body.title == '') {
        return 응답.status(500).json('제목써라')
      }
      try {
        let db = (await connectDB).db('forum')
        let result = db.collection('post').insertOne(요청.body)
        응답.redirect(302, '/list')
      } catch (error) {
        console.log(error,'error')
        응답.redirect(302, '/write')
      }
     
    }
  }