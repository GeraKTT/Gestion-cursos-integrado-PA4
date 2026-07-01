import Link from "next/link";

const cursosPublicos = [
    { id: "1", nombre: "Programación Web Avanzada", descripcion: "Aprende React, Next.js y el consumo de APIs." },
    { id: "2", nombre: "Bases de Datos", descripcion: "Modelado relacional y SQL Server para aplicaciones web." }
];

export default function CatalogoPublico() {
    return (
        <main className="min-h-screen bg-[#fdfaf6] text-[#3e2723] p-8 md:p-16">
            <div className="max-w-5xl mx-auto">
                <header className="flex justify-between items-center mb-12 border-b border-[#d7ccc8] pb-6">
                    <h1 className="text-4xl font-bold tracking-tight text-[#3e2723]">Catálogo de Cursos</h1>
                    <Link href="/" className="text-[#5d4037] font-semibold hover:text-[#3e2723] transition-colors underline">
                        Volver al inicio
                    </Link>
                </header>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cursosPublicos.map(curso => (
                        <div key={curso.id} className="bg-white p-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-[#f2ebe1] transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(93,64,55,0.08)]">
                            <h2 className="text-2xl font-bold text-[#5d4037] mb-3">{curso.nombre}</h2>
                            <p className="mb-6 text-gray-700 leading-relaxed">{curso.descripcion}</p>
                            <Link 
                                href={`/catalogo/${curso.id}`} 
                                className="inline-block bg-[#efebe9] text-[#5d4037] border-2 border-[#d7ccc8] px-6 py-2 rounded-lg font-semibold transition-all hover:bg-[#5d4037] hover:text-white hover:border-[#5d4037]"
                            >
                                Ver detalles completos
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}