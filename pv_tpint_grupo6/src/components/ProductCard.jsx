import { Link } from "react-router-dom";

const ProductCard = ({ product, toggleFavorite }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.category}</p>
      <button onClick={() => toggleFavorite(product.id)}>
        {product.isFavorite ? "💖" : "🤍"}
      </button>
      <Link to={`/product/${product.id}`}>
        <button>Ver más detalles</button>
      </Link>

    </div>
  );
};

export default ProductCard;
