"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    //Receber o Token
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end(); // 401- nao autorizado
    }
    const [, token] = authToken.split(" "); // Destruturar o authToken
    try {
        //validar o token
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        //Recuperar o id do token e colocar dentro de uma variavel user_id dentro do req(Request)
        req.user_id = sub;
        return next();
    }
    catch (e) { // caso nao exista o token 
        return res.status(401).end(); // nao autorizado
    }
}
exports.isAuthenticated = isAuthenticated;
