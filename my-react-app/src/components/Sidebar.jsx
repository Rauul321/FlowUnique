import React from 'react';
import './Sidebar.css';
import AuthModal from './AuthModal';

function Sidebar({ isOpen, closeSidebar }) {
    const [modalAbierto, setModalAbierto] = React.useState(null);

    const iniciarLogin = () => {
        console.log("Iniciar login");
        setModalAbierto("login");
        closeSidebar();
    }

    const iniciarSignUp = () => {
        setModalAbierto("signup");
        closeSidebar();
    }

    const cerrarModal = () => {
        setModalAbierto(null);
        closeSidebar();
    }

    return (
        <>
            {/* Opcional: Un fondo oscuro (overlay) que cierra el menú al hacer click */}
            <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={closeSidebar}>

            </div>

            {/* El contenedor principal de la sidebar */}
            <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closeSidebar}>×</button>

                <div className="sidebar-content">
                    <h2>Mi Perfil</h2>
                    {modalAbierto === null && (
                        <>
                            <button onClick={iniciarLogin} className={"login-button"}>Login</button>
                            <button onClick={iniciarSignUp} className={"signup-button"}>Sign Up</button>
                        </>
                    )}
                </div>
            </div>
            <AuthModal
                type={modalAbierto} // Le decimos al modal qué formulario mostrar ('login' o 'signup')
                closeModal={cerrarModal} // Le damos una función para que el modal se pueda cerrar
            />
        </>
    );
}

export default Sidebar;
