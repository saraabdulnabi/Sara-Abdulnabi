import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();
        setData(result.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">Error: {error}</p>;

  return (
    <div className="container">
      <h2 className="title">Products</h2>
      <div className="grid">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <div className="image-wrapper">
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className="card-body">
              <h3>{item.title}</h3>
              <p className="price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
