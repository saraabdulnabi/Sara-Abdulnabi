import "./style.css";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()

  return {
    props: {
      posts
    },
    revalidate: 60 // Rebuild every 60 seconds
  }
}

export default function StaticPage({ posts }) {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Static Page (SSG)</h1>
      <p>This page is built at build time and revalidated every 60 seconds.</p>

    {posts.slice(0, 5).map((post) => (
  <div key={post.id} className="post-card">
    <h3>{post.title}</h3>
    <p>{post.body}</p>
  </div>
))}

    </main>
  )
}
