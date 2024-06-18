import jwt from "jsonwebtoken"
require('dotenv').config()
const createJWT = () => {
    let payload = {name: 'thien', address: 'hcm'}
    let key = process.env.JWT_SECRET
    let token = null;
    try {
        token = jwt.sign(payload, key)
        console.log("token: ", token);
    } catch (error) {
        console.log("error: ", error);
        
    }
    return token
}

const verifyToken = (token) => {
    let key = process.env.JWT_SECRET
    let data = null;

    try {
        let decoded = jwt.verify(token, key)
        data = decoded
    } catch (error) {
        console.log("error: ", error);
        
    }

    return data
}

module.exports = {
    createJWT, verifyToken
}