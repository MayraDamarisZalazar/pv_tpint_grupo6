import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#eee', marginBottom: '2rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/favorites">Favoritos</Link>
    </nav>
  );
};

export default NavBar;
