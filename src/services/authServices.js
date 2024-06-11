//src/services/authServices,js
import bcrypt from 'bcrypt';
import jwt from 'JasonwebToken';
import config from '../config.js';
import userService from './userService.js';

const register = async ({email, password}) => {
// verificar si el usuario ya existe 
const existinUser = await userService.getUserByEmail(email);

if (existinUser) {
    throw new Error('El usuario ya existe');
}
// crear el nuevo usuario
const hashedPassword = await bcrypt.hash(password, 10);
const newUser = await userService.createUser(email,hashedPassword);

// generar el token para el nuevo usuario 
const token = jwt.sing({id: newUser.id}, config.secretKey);

return token;
};

const login = async ({email, password}) => {
//verificar si el usuario existe 
const user = await userService.getUserByEmail(email);

if (!user){
    throw new Error('Credenciales invalidas');
}

// Verificar si la contraseña es correcta 

const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch){
    throw new Error ('Credenciales invalidas');

}
// Generar el token para el usuario
const token = jwt.sing({id: user.id}, config.secretKey);

return token;
};


