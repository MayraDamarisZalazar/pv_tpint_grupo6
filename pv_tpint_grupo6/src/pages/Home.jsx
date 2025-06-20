import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, setProducts, toggleFavorite } = useContext(AppContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const productsWithFavorites = data.map(product => ({
          ...product,
          isFavorite: false
        }));
        setProducts(productsWithFavorites);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return (
    <div className="home">
      <h1>Productos</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
