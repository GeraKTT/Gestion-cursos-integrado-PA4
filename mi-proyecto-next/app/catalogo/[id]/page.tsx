type Props = {
    params: Promise<{ id: string }>
}

export default async function DetalleCursoPage({ params }: Props) {
    const { id } = await params;
    
    return (
        <main className="min-h-screen p-12 bg-white text-black">
            <h1 className="text-3xl font-bold mb-4">Detalle del Curso {id}</h1>
            <p className="text-gray-600">
                Esta es una página generada dinámicamente mediante Next.js App Router.
                Muestra información detallada para visitantes no autenticados.
            </p>
            <div className="mt-8">
                <a href="/catalogo" className="text-blue-600 underline">Volver al catálogo</a>
            </div>
        </main>
    );
}