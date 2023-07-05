const jwt = require("jsonwebtoken")

const createUserToken = async (user, req, res)=> {
    // Criando token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.MY_SECRET)
   
    res.status(200).json({message: "Login Efetuado com sucesso", token: token, userId: user._id,})

}

module.exports = createUserToken