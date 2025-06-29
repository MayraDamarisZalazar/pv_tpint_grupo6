import React from "react"; 
import { useParams, useNavigate, Link } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
const ProductDetail = () => { 
const { id } = useParams(); 
const navigate = useNavigate(); 
const dispatch = useDispatch(); 
const product = useSelector(state => 
state.products.products.find(p => p.id === Number(id)) 
); 
if (!product) { 
return <p>Producto no encontrado</p>; 
} 
  const toggleFavorite = () => { 
    dispatch({ type: "TOGGLE_FAVORITE", payload: product.id }); 
  }; 
 
  return ( 
    <div className="product-detail"> 
      <button onClick={() => navigate(-1)}>← Volver</button> 
      <h2>{product.title}</h2> 
      <img src={product.image} alt={product.title} style={{ maxWidth: "300px" }} /> 
      <p><b>Precio:</b> ${product.price}</p> 
      <p><b>Categoría:</b> {product.category}</p> 
      <p><b>Descripción:</b> {product.description}</p> 
      <button onClick={toggleFavorite}> 
        {product.isFavorite ? "💖 Quitar favorito" : "🤍 Agregar favorito"} 
      </button> 
      <Link to={`/product/edit/${product.id}`}> 
        <button>Editar</button> 
      </Link> 
    </div> 
  ); 
}; 
 
export default ProductDetail;