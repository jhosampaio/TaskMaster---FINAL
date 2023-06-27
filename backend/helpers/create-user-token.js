const jwt = require("jsonwebtoken")

const createUserToken = async (user, req, res)=> {
    // Criando token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.MY_SECRET)
    // Retornando token
    res.status(200).json({message: "Voce esta logado", token: token, userId: user._id,})

}

module.exports = createUserToken