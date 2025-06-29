import React, { useState, useEffect } from "react"; 
import { useParams, useNavigate } from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
const ProductForm = () => { 
const { id } = useParams(); 
const navigate = useNavigate(); 
const dispatch = useDispatch(); 
const productToEdit = useSelector(state => 
state.products.products.find(p => p.id === Number(id)) 
); 
const [title, setTitle] = useState(""); 
const [price, setPrice] = useState(""); 
const [description, setDescription] = useState(""); 
const [category, setCategory] = useState(""); 
const [image, setImage] = useState(""); 
useEffect(() => { 
if (productToEdit) { 
setTitle(productToEdit.title); 
      setPrice(productToEdit.price); 
      setDescription(productToEdit.description); 
      setCategory(productToEdit.category); 
      setImage(productToEdit.image); 
    } 
  }, [productToEdit]); 
 
  const handleImageChange = (e) => { 
    const file = e.target.files[0]; 
    if (!file) return; 
 
    const reader = new FileReader(); 
    reader.onloadend = () => { 
      setImage(reader.result); 
    }; 
    reader.readAsDataURL(file); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
 
    if (!title || !price) { 
      alert("El título y el precio son obligatorios."); 
      return; 
    } 
 
    if (id) { 
      dispatch({ 
        type: "EDIT_PRODUCT", 
        payload: { 
          id: Number(id), 
          title, 
          price: Number(price), 
          description, 
          category, 
          image, 
        }, 
      }); 
    } else { 
      dispatch({ 
        type: "ADD_PRODUCT", 
        payload: { 
          id: Date.now(), 
          title, 
          price: Number(price), 
          description, 
          category, 
          image, 
          isFavorite: false, 
        }, 
      }); 
    } 
 
    navigate("/"); 
  }; 
 
  return ( 
    <div className="product-form"> 
      <h2>{id ? "Editar Producto" : "Crear Nuevo Producto"}</h2> 
      <form onSubmit={handleSubmit}> 
        <label> 
          Título: 
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /> 
        </label> 
        <label> 
          Precio: 
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required 
step="0.01" /> 
        </label> 
        <label> 
          Descripción: 
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} /> 
        </label> 
        <label> 
          Categoría: 
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /> 
        </label> 
        <label> 
          Imagen: 
          <input type="file" accept="image/*" onChange={handleImageChange} /> 
        </label> 
        {image && ( 
          <div style={{ margin: "1rem 0" }}> 
            <img src={image} alt="Preview" style={{ maxWidth: "200px", maxHeight: "200px", 
objectFit: "contain" }} /> 
          </div> 
        )} 
        <button type="submit">{id ? "Guardar Cambios" : "Crear Producto"}</button> 
        <button type="button" onClick={() => navigate(-1)}>Cancelar</button> 
      </form> 
    </div> 
  ); 
}; 
 
export default ProductForm;