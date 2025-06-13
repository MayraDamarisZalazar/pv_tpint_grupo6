import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { products, favorites, toggleFavorite } = useContext(AppContext);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Listado de Productos</h1>

      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
