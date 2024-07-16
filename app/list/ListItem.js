'use client'
// 큰페이지는 서버 컴포넌트, js 기능이 필요한곳만 client 컴포넌트, 왜냐 검색노출이점이 없다.
import Link from "next/link"
export default function ListItem({ result }) {
    return (
        <div>
            {result.map((a, i) =>
                <div className="list-item" key={i}>
                    <Link href={'/detail/' + result[i]._id}>{result[i].title}</Link>
                    <Link href={'/edit/' + result[i]._id} className="list-btn">✏️</Link>
                    <button className="list-btn" onClick={(e) => {
                          fetch(`/api/post/delete?id=${result[i]._id}`, {
                            method: 'DELETE'
                        })
                        .then(() => {
                            e.target.parentElement.style.opacity = 0;
                            setTimeout(() => {
                                e.target.parentElement.style.display = 'none';
                            }, 1000)
                        })
                    }}>🗑️</button>
                    <p>1월 1일</p>
                </div>
            )}
        </div>
    )
}