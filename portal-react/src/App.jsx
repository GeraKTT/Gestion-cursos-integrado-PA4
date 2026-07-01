import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginPage } from "./pages/LoginPage";
import { CatalogoPage } from "./pages/CatalogoPage";
import { InscripcionesPage } from "./pages/InscripcionesPage";
import { DetalleCursoPage } from "./pages/DetalleCursoPage"; 
import "./index.css";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/catalogo" element={<ProtectedRoute><CatalogoPage /></ProtectedRoute>} />
                    
                    {/* ESTA RUTA ES LA QUE CONECTA EL CLIC CON EL DETALLE */}
                    <Route path="/catalogo/:id" element={<ProtectedRoute><DetalleCursoPage /></ProtectedRoute>} />
                    
                    <Route path="/inscripciones" element={<ProtectedRoute><InscripcionesPage /></ProtectedRoute>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}