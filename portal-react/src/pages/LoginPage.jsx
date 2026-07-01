import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginAPI } from "../api/authApi";

export const LoginPage = () => {
    const [correo, setCorreo] = useState("alumno@isil.pe");
    const [clave, setClave] = useState("123456");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("");
            const data = await loginAPI(correo, clave);
            login(data.usuario, data.token);
            navigate("/catalogo"); 
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <main className="login-container">
            <div className="card login-card">
                <h2>Acceso al Portal</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Correo Electrónico</label>
                        <input type="email" value={correo} onChange={e => setCorreo(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <label>Contraseña</label>
                        <input type="password" value={clave} onChange={e => setClave(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn-primary">Iniciar Sesión</button>
                </form>
            </div>
        </main>
    );
};