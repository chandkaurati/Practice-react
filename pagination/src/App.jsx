import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [Products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2);

  const handleClick = (selectedPage) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    const fetChProducts = async () => {
      setLoading(true);
      try {
        const responce = await fetch("https://dummyjson.com/products");
        const data = await responce.json();
        console.log(data.products);
        if (data) {
          setProducts(data.products);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetChProducts();
  }, []);

  if (error) return <div style={{ color: "red" }}>{error.message}</div>;

  return (
    <>
      {loading ? (
        <div>Products are loading</div>
      ) : (
        <>
          <div className="products">
            {Products.slice(page * 10 - 10, page * 10).map((prod) => (
              <span className="product" key={prod.id}>
                <img src={prod.thumbnail} alt="" />
                <p>{prod.title}</p>
              </span>
            ))}
          </div>

          <div>
            <span></span>
            {Products.slice(0, Products.length / 10).map((_, i) => {
              return (
                <span className="page__num" onClick={() => handleClick(i + 1)}>
                  {i + 1}
                </span>
              );
            })}
            <span></span>
          </div>
        </>
      )}
    </>
  );
}

export default App;
