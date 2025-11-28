
const db = require('../config/database.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    const User = db.user;
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ message: "Usuario registrado exitosamente", userId: newUser.id });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error: error.message });
    }
}

exports.login = async (req, res) => {
    const User = db.user;
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }
        console.log("JWT_SECRET:", process.env.JWT_SECRET);
        const token = jwt.sign({ id: user.id }, process.env["JWT_SECRET"], { expiresIn: '1h' });

        res.status(200).json({ message: "Login exitoso"}, token);
    } catch (error) {
        console.error("ERROR EN LOGIN:", error);
        return res.status(500).json({
            message: "Error al iniciar sesión",
            error: error.message
        });
    }
}