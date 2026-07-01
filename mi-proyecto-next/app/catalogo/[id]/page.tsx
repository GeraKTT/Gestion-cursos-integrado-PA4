import Link from "next/link";

type Props = {
    params: Promise<{ id: string }>
}

export default async function DetalleCursoPage({ params }: Props) {
    const { id } = await params;
    
    return (
        <main className="min-h-screen bg-[#fdfaf6] text-[#3e2723] p-8 md:p-16 flex justify-center items-start pt-24">
            <div className="bg-white p-10 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-[#f2ebe1] max-w-2xl w-full text-center transition-all hover:shadow-[0_10px_20px_rgba(93,64,55,0.08)]">
                <span className="inline-block bg-[#efebe9] text-[#5d4037] px-4 py-1 rounded-full text-sm font-bold mb-6">
                    Curso #{id}
                </span>
                <h1 className="text-4xl font-bold mb-6 text-[#3e2723]">Detalle del Curso</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-10">
                    Esta es la página pública generada dinámicamente mediante Next.js App Router para el curso <strong className="text-[#5d4037]">{id}</strong>. 
                    Aquí los visitantes no autenticados pueden visualizar la información base.
                </p>
                
                <div className="pt-6 border-t border-[#f2ebe1]">
                    <Link 
                        href="/catalogo" 
                        className="inline-block text-[#5d4037] font-bold hover:text-[#3e2723] underline transition-colors"
                    >
                        ← Regresar al catálogo
                    </Link>
                </div>
            </div>
        </main>
    );
}