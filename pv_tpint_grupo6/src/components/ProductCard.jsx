import { Link } from "react-router-dom";

const ProductCard = ({ product, isFavorite, onToggleFavorite }) => {
  const { id, image, title, price, description, category } = product;

  return (
    <div className="border rounded-xl p-4 shadow-md w-72 bg-white relative">
      <img src={image} alt={title} className="h-40 object-contain mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-md font-bold mt-1">${price}</p>
      <p className="text-sm mt-1 line-clamp-2">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <Link
          to={`/producto/${id}`}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Ver más
        </Link>

        <input
          type="checkbox"
          checked={isFavorite}
          onChange={() => onToggleFavorite(id)}
          title="Marcar como favorito"
        />
      </div>
    </div>
  );
};

export default ProductCard;
