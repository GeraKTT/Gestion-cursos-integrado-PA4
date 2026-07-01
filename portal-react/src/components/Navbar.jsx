import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!user) return null;

    return (
        <header className="navbar">
            <div className="nav-brand">Portal Isil</div>
            <nav className="nav-links">
                <Link to="/catalogo">Catálogo</Link>
                <Link to="/inscripciones">Inscripciones</Link>
                <div className="dropdown">
                    <button className="dropbtn">Usuario: {user.nombre} ▼</button>
                    <div className="dropdown-content">
                        <button onClick={handleLogout}>Cerrar Sesión</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};