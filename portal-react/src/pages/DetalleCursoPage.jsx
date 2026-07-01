import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerCursoPorId } from "../api/cursosApi";

export const DetalleCursoPage = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [curso, setCurso] = useState(null);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        obtenerCursoPorId(id)
            .then(data => {
                setCurso(data);
                setCargando(false);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleInscripcion = () => {
        const inscripciones = JSON.parse(localStorage.getItem("inscripciones") || "[]");
        if (!inscripciones.find(c => c.id === curso.id)) {
            inscripciones.push(curso);
            localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
            alert("¡Te has inscrito con éxito!");
        } else {
            alert("Ya estás inscrito en este curso.");
        }
        navigate("/inscripciones");
    };

    if (cargando) return <main className="container"><p>Cargando detalle del curso...</p></main>;

    return (
        <main className="container">
            <div className="card">
                <h1>{curso.titulo}</h1>
                <p style={{ marginTop: '1.5rem', marginBottom: '2rem', fontSize: '1.1rem' }}>
                    {curso.descripcion}
                </p>
                {}
                <button onClick={handleInscripcion} className="btn-primary">
                    Inscribirme a este curso
                </button>
                <button onClick={() => navigate("/catalogo")} className="btn-secondary" style={{ marginLeft: '10px' }}>
                    Volver al catálogo
                </button>
            </div>
        </main>
    );
};