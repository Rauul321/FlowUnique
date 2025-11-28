import React from 'react';
import './AuthModal.css';

function AuthModal({ type, closeModal }) {
    if (type == null) {
        return null;
    }
    const renderForm = () => {
        if (type === "login") {
            return (
                <div className="auth-form">
                    <h2>Login</h2>
                    <input className={"input-field"} type="text" placeholder="Username"/>
                    <input className={"input-field"} type="password" placeholder="Password"/>
                    <button className="submit-button">Login</button>
                </div>
            );
        } else if (type === "signup") {
            return (
                <div className="auth-form">
                    <h2>Sign Up</h2>
                    <input className={"input-field"} type="text" placeholder="Username"/>
                    <input className={"input-field"} type="email" placeholder="Email"/>
                    <input className={"input-field"} type="password" placeholder="Password"/>
                    <input className={"input-field"} type="password" placeholder="Repeat your password"/>
                    <button className="submit-button">Sign Up</button>
                </div>
            );
        }


    }
    return (
        <div className="modal-backdrop" onClick={closeModal}>

            {/* El contenido central del Modal (Ventana blanca) */}
            <div className="modal-content" onClick={e => e.stopPropagation()}>

                {/* Botón de cerrar */}
                <button className="close-btn" onClick={closeModal}>×</button>

                {/* Llama a la función que renderiza el formulario específico */}
                {renderForm()}
            </div>
        </div>
    );
}

export default AuthModal;