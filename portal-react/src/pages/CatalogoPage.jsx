import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerCursos } from "../api/cursosApi";

export const CatalogoPage = () => {
    const [cursos, setCursos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        obtenerCursos()
            .then(data => {
                setCursos(data);
                setCargando(false);
            })
            .catch(err => console.error(err));
    }, []);

    if (cargando) return <main className="container"><p>Cargando cursos...</p></main>;

    return (
        <main className="container">
            <h1>Catálogo de Cursos Disponibles</h1>
            <div className="grid-cursos">
                {cursos.map(curso => (
                    <article key={curso.id} className="card">
                        <h3>{curso.titulo}</h3>
                        <p>{curso.descripcion.substring(0, 60)}...</p>
                        
                        {}
                        <Link to={`/catalogo/${curso.id}`} className="btn-secondary" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
                            Ver detalle
                        </Link>
                        
                    </article>
                ))}
            </div>
        </main>
    );
};