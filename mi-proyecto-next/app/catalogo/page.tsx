import Link from "next/link";

// Simulamos los cursos para el entorno público
const cursosPublicos = [
    { id: "1", nombre: "Programación Web Avanzada", descripcion: "Aprende React y Next.js" },
    { id: "2", nombre: "Bases de Datos", descripcion: "Modelado y SQL Server" }
];

export default function CatalogoPublico() {
    return (
        <main className="min-h-screen p-12 bg-white text-black">
            <h1 className="text-3xl font-bold mb-8">Catálogo de Cursos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cursosPublicos.map(curso => (
                    <div key={curso.id} className="border p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold mb-2">{curso.nombre}</h2>
                        <p className="mb-4">{curso.descripcion}</p>
                        <Link href={`/catalogo/${curso.id}`} className="text-blue-600 font-semibold underline">
                            Ver detalles completos
                        </Link>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <Link href="/" className="text-gray-500">Volver al inicio</Link>
            </div>
        </main>
    );
}