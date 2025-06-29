import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const products = useSelector(state => state.products.products) || [];
  const favoriteProducts = products.filter(product => product.isFavorite);

  return (
    <div className="favorites">
      <h1>Productos Favoritos</h1>
      <div className="product-grid">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;