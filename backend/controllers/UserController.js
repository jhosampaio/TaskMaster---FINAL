const getToken = require("../helpers/get-token")
const createUserToken = require("../helpers/create-user-token");
const getUserByToken = require("../helpers/get-user-by-token");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class UserController {
  static async register(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    // Validacoes
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatorio" });
      return;
    }

    if (!email) {
      res.status(422).json({ message: "O email é obrigatorio" });
      return;
    }

    if (!phone) {
      res.status(422).json({ message: "O telefone é obrigatorio" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória!" });
      return;
    }

    if (!confirmpassword) {
      res.status(422).json({ message: "A confirmação de senha é obrigatória!" });
      return;
    }

    if (password != confirmpassword) {
      res.status(422).json({ message: "As senhas não coincidem" });
      return;
    }

    // Verificar se o usuario já existe
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      res.status(422).json({ message: "Por favor, utilize outro e-mail!" });
      return;
    }

    // CRIPTOGRAR SENHA
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // CRIAR USUARIO
    const user = new User({
      name: name,
      email: email,
      phone: phone,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();
      await createUserToken(newUser, req, res);      
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  // LOGIN
  static async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email) {
        res.status(422).json({ message: "O email é obrigatorio" });
        return;
    }
    if (!password) {
        res.status(422).json({ message: "A senha é obrigatória!" });
        return;
    }

    // Verificar se o usuario já existe
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(422).json({ message: "Nao há usuario com esse email" });
      return;
    }

    // Verificar se a senha bate com o passwordHash
    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword){
        res.status(422).json({ message: "Senha invalida" });
      return;
    }
    user.contador += 1;
    await user.save();

    await createUserToken(user, req, res);      
  }

  // Verificar se o usuario esta logado com base no cabeçalho de autorização da solicitação
  static async checkUser(req, res){
    let currentUser
    console.log(req.headers.authorization)
    if(req.headers.authorization){
        const token = getToken(req)
        const decoded = jwt.verify(token, process.env.MY_SECRET)

        currentUser = await User.findById(decoded.id)
        currentUser.password = undefined
    } else {
        currentUser = null
    }

    res.status(200).send(currentUser)
  }

  static async getUserById(req, res){
  
    const id = req.params.id
    const user = await User.findById(id).select("-password")

    if(!user){
        res.status(404).json({message: "Usuario nao encontrado"})
        return
    }
    res.status(200).json({user})

  }

  static async editUser(req, res){

    const token = getToken(req)
    const user =  await getUserByToken(token)
    const {name, email, phone, password} = req.body

    if (!name) {
        res.status(422).json({ message: "O nome é obrigatorio" });
        return;
    }
    if (!email) {
        res.status(422).json({ message: "O email é obrigatorio" });
        return;
    }
    const userExists = await User.findOne({ email: email });
    if(user.email !== email && userExists){
        res.status(422).json({ message: "Por favor, utilize outro e-mail!" });
    }

    if (!phone) {
        res.status(422).json({ message: "O telefone é obrigatorio" });
    }
    if (!password) {
        res.status(422).json({ message: "A senha é obrigatória!" });
        return;
    }
    if(!confirmPassword){
        res.status(422).json({ message: "A confirmação de senha é obrigatória!" });
    }    

    if(!user){
        res.status(404).json({message: "Usuario nao encontrado"})
        return
    }

    try {
      const updateUser = await User.findOneAndUpdate(
        {_id: user._id},
        {$set: user},
        {new: true},
        )
        res.status(200).json({message: "Usuario atualizado com sucesso", updateUser})
    }catch(error){
      res.status(500).json({message: error})
    }
  }
};
