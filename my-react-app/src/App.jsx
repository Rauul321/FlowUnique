// App.jsx (El nuevo mapa de navegación)

import React from 'react';
// ❌ Borra los imports de logos y el useState, ya están en HomePage.jsx
import './App.css' // ✅ Mantén los estilos GLOBALES
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'; // 👈 Importa tu nueva página inicial
import DashboardPage from './pages/DashboardPage.jsx'; // 👈 Importa la página principal de la app
import ProductCard from './components/ProductCard.jsx';
import ArtistsPage from "./pages/ArtistsPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import RootPage from "./pages/RootPage.jsx";

// ----------------------------------------------------
// Componente Wrapper para manejar la navegación desde la Home
function HomeWrapper() {
    const navigate = useNavigate();
    // Esta función lleva al usuario a la página principal
    const handleNavigation = () => {
        navigate('/dashboard');
    };
    // Pasamos la función al componente HomePage
    return <HomePage handleNavigation={handleNavigation} />;
}
// ----------------------------------------------------

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 1. Ruta de la Página Inicial: / */}
                <Route path="/" element={<HomeWrapper />} />

                {/* 2. RUTA LAYOUT: /dashboard. Este es el PADRE. */}
                {/* Todas las rutas que estén DENTRO usarán este Layout. */}
                <Route path="/dashboard" element={<DashboardPage />}>

                    {/* RUTA HIJA 1: /dashboard (index). Se inyecta en el Outlet. */}
                    {/* Aquí pondrías el contenido inicial o el Hero del dashboard. */}
                    <Route index element={<RootPage />} />

                    {/* RUTA HIJA 2: /dashboard/artists. Se inyecta en el Outlet. */}
                    {/* Nota: solo se define 'artists', no '/dashboard/artists' */}
                    <Route path="artists" element={<ArtistsPage />} />

                    <Route path="shop" element={<ShopPage />} />

                    <Route path="news" element={<NewsPage />} />

                    <Route path={"contact"} element={<ContactPage />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App