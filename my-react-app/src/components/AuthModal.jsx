import React from 'react';
import './AuthModal.css';
import { useState } from 'react';

/**
 * Sends the auth data (login o signup) to the server.
 * * @param {object} data - Object with credentials (example: {username: '...', password: '...'})
 * @param {string} url - Server's endpoint URL (example: 'http://localhost:3000/api/login')
 * @returns {Promise<object>} A promise solved with the server's response (or maybe an error).
 */
async function sendAuthData(data, url) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            const result = await response.json();
            localStorage.setItem('authToken', result.token);
            return {success: true, data: result};
        } else {

            let errorData;
            try {
                errorData = await response.json();
            } catch (e) {
                //Si el servidor no envía un cuerpo JSON de error, usamos un mensaje genérico
                errorData = { message: `Error ${response.status}: Failed authentication` };
            }

            console.error(`Server error (${response.status}):`, errorData.message);
            throw new Error(errorData.message || 'Unknown authentication error.');
        }
    } catch(error) {
        console.error("Error sending auth data:", error);
        return {success: false, error: error};
    }
}


function AuthModal({ type, closeModal }) {
    if (type == null) {
        return null;
    }

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    // Función para manejar el cambio en cualquier input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = async (e, endpoint) => {
        e.preventDefault();

        // 2. Prepara los datos a enviar
        let dataToSend;
        if (type === "login") {
            dataToSend = {
                email: formData.email,
                password: formData.password
            };
        } else if (type === "signup") {
            if (formData.password !== formData.repeatPassword) {
                alert("Las contraseñas no coinciden.");
                return;
            }
            dataToSend = {
                username: formData.username,
                email: formData.email,
                password: formData.password
            };
        }

        try {
            const url = `http://localhost:5000/api/auth/${endpoint}`;
            const result = await sendAuthData(dataToSend, url);

            if (result.success) {
                console.log(`${type} exitoso!`);
            } else {
                console.error("Fallo de autenticación");
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    const renderForm = () => {
        if (type === "login") {
            return (
                <form className="auth-form" onSubmit={(e) => handleSubmit(e, 'login')}>
                    <h2>Login</h2>
                    <input
                        className={"input-field"}
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className={"input-field"}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button className="submit-button" type="submit">Login</button>
                </form>
            );
        } else if (type === "signup") {
            return (
                <form className="auth-form" onSubmit={(e) => handleSubmit(e, 'signup')}>
                    <h2>Sign Up</h2>
                    <input className={"input-field"} type="text" placeholder="Username" name="username"
                           value={formData.username} onChange={handleChange}/>
                    <input className={"input-field"} type="email" placeholder="Email" name="email"
                           value={formData.email} onChange={handleChange}/>
                    <input className={"input-field"} type="password" placeholder="Password" name="password"
                           value={formData.password} onChange={handleChange}/>
                    <input className={"input-field"} type="password" placeholder="Repeat your password"
                           name={"repeatPassword"} value={formData.repeatPassword} onChange={handleChange}/>
                    <button className="submit-button">Sign Up</button>
                </form>
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