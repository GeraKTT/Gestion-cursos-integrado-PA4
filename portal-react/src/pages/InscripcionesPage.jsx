import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const InscripcionesPage = () => {
    const [misCursos, setMisCursos] = useState([]);

    useEffect(() => {
        // Leemos las inscripciones guardadas al cargar la página
        const inscripciones = JSON.parse(localStorage.getItem("inscripciones") || "[]");
        setMisCursos(inscripciones);
    }, []);

    return (
        <main className="container">
            <h1>Mis Inscripciones</h1>
            {misCursos.length === 0 ? (
                <div className="card">
                    <p>Aún no tienes cursos inscritos en este ciclo.</p>
                    <Link to="/catalogo" className="btn-secondary" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>Explorar cursos</Link>
                </div>
            ) : (
                <div className="grid-cursos">
                    {misCursos.map(curso => (
                        <article key={curso.id} className="card" style={{ borderLeft: '4px solid #004080' }}>
                            <h3>{curso.titulo}</h3>
                            <p style={{ marginTop: '1rem' }}>Estado: <strong>Inscrito ✅</strong></p>
                        </article>
                    ))}
                </div>
            )}
        </main>
    );
};