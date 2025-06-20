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
      <button>Ver más detalles</button>
    </div>
  );
};

export default ProductCard;
