import { useState } from "react"; 
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom"; 

const Login = () => { 

const [form, setForm] = useState({ email: "", password: "" }); 

const dispatch = useDispatch();

const navigate = useNavigate(); 

const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value }); 

const handleSubmit = (e) => { 
e.preventDefault(); 
const users = JSON.parse(localStorage.getItem("users")) || []; 
const user = users.find(u => u.email === form.email && u.password === form.password); 
if (!user) return alert("Credenciales inválidas"); 
localStorage.setItem("sessionUser", JSON.stringify(user)); 
dispatch({ type: "LOGIN", payload: user }); 
navigate("/"); 
}; 
return ( 
<form onSubmit={handleSubmit}> 
<h2>Iniciar Sesión</h2> 
<input name="email" placeholder="Email" onChange={handleChange} required /> 
<input name="password" placeholder="Contraseña" type="password" 
onChange={handleChange} required /> 
<button type="submit">Ingresar</button> 
</form> 
); 
}; 


export default Login;