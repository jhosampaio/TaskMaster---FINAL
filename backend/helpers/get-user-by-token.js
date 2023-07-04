const jwt = require("jsonwebtoken")
const User = require("../models/User")

const getUserByToken = async (token) => {

    if(!token) {
        return res.status(401).json({ message: "Você não está autorizado a acessar este recurso" })
    }
    const decoded = jwt.verify(token, process.env.MY_SECRET)
    const userId = decoded.id
    const user = await User.findOne({_id: userId})
    return user

}

module.exports = getUserByToken