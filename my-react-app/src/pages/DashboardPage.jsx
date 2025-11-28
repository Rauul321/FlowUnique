
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Sidebar from '../components/Sidebar.jsx';



function DashboardPage() {

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="dashboard-layout">
            {/* 👈 Estas secciones NO cambian */}
            <Navbar toggleSidebar={handleToggleSidebar} />
            <div className={"sidebar-container"}>
                <Sidebar isOpen={sidebarOpen} closeSidebar={handleToggleSidebar} />
            </div>
            <main>
                {/* 👇 EL HUECO: Aquí es donde el router pone el contenido de la sub-ruta */}
                <Outlet />
                {/* Si la URL es /dashboard/perfil, <Outlet /> se convierte en <ProfilePage /> */}
                {/* Si la URL es /dashboard/productos, <Outlet /> se convierte en <ProductsPage /> */}
            </main>
        </div>
    );
}


export default DashboardPage;