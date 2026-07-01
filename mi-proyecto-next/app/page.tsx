import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Portal Académico Público</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Descubre nuestra oferta académica. Si eres alumno, dirígete al portal privado.
      </p>
      <Link href="/catalogo" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">
        Ver Catálogo de Cursos
      </Link>
    </main>
  );
}