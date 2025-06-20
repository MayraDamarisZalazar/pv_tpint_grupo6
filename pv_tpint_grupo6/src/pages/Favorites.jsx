import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const { products, toggleFavorite } = useContext(AppContext);

  // Filtra solo los productos marcados como favoritos
  const favoriteProducts = products.filter(product => product.isFavorite);

  return (
    <div className="favorites">
      <h1>Mis Favoritos</h1>
      {favoriteProducts.length === 0 ? (
        <p>No tienes productos favoritos aún.</p>
      ) : (
        <div className="product-grid">
          {favoriteProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
