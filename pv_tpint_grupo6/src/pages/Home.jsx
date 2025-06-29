import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products) || [];


useEffect(() => {
  if (products.length === 0) {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        const productsWithFavorites = data.map(product => ({
          ...product,
          isFavorite: false
        }));
        dispatch({ type: "SET_PRODUCTS", payload: productsWithFavorites });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }
}, [dispatch, products.length])

  const toggleFavorite = (id) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });
  };

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
