import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirm } = form;

    if (!/\S+@\S+\.\S+/.test(email)) return alert("Email inválido");
    if (password.length < 6) return alert("Contraseña muy corta");
    if (password !== confirm) return alert("Las contraseñas no coinciden");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.email === email);
    if (exists) return alert("Ya existe un usuario con ese email");

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("¡Registro exitoso!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" placeholder="Contraseña" type="password" onChange={handleChange} required />
      <input name="confirm" placeholder="Confirmar contraseña" type="password" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default Register;
