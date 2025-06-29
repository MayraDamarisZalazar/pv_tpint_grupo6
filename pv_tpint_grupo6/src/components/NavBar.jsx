import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("sessionUser");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", background: "#eee", marginBottom: "2rem" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>
        Home
      </Link>
      <Link to="/favorites" style={{ marginRight: "1rem" }}>
        Favoritos
      </Link>
      {user && (
        <Link to="/product/new" style={{ marginRight: "1rem" }}>
          Crear Producto
        </Link>
      )}
      {user ? (
        <>
          <span>Bienvenido, {user.email}</span>
          <button onClick={logout} style={{ marginLeft: "1rem" }}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: "1rem" }}>
            Login
          </Link>
          <Link to="/register">Registrarse</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
