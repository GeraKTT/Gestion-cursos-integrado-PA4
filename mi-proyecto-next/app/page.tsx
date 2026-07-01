import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfaf6] flex flex-col items-center justify-center p-8 md:p-24">
      <div className="bg-white p-10 md:p-16 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-[#f2ebe1] text-center max-w-3xl w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#3e2723] mb-6 tracking-tight">
          Portal Académico Público
        </h1>
        <p className="text-lg text-[#5d4037] mb-10 max-w-2xl mx-auto leading-relaxed">
          Descubre nuestra oferta académica. Conoce los cursos disponibles y prepárate para potenciar tu futuro profesional.
        </p>
        <Link 
          href="/catalogo" 
          className="inline-block bg-[#5d4037] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-[#3e2723] hover:scale-[0.98] shadow-md"
        >
          Explorar Catálogo de Cursos
        </Link>
      </div>
    </main>
  );
}