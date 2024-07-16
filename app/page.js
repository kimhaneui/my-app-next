import Link from "next/link";
import { connectDB } from "@/util/database"

export default async function Home() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  return (
    <main>
      메인화면입니다
      <Link href='list'>list</Link>
    </main>
  )
}

