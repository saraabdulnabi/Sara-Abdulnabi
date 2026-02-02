import "./style.css";
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return {
    props: {
      posts
    }
  }
}

export default function ServerPage({ posts }) {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Server Rendered Page (SSR)</h1>
      <p>This page fetches data on every request.</p>

      {posts.slice(0, 5).map((post) => (
  <div key={post.id} className="post-card">
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))}

    </main>
  )
}
