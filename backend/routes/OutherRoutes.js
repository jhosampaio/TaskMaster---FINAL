const router = require('express').Router()
const transporter = require('../helpers/mailer')

router.get('/home', (req, res) => {    
    const info_home = "A proposta do TaskMaster é proporcionar a você uma ferramenta eficiente e flexível para o gerenciamento de tarefas, permitindo que você se concentre no que é mais importante e alcance uma produtividade máxima.";
    res.send(info_home);
});

router.get('/des-projeto', (req, res) => {    
    const info_des = "A proposta do TaskMaster é proporcionar a você uma ferramenta eficiente e flexível para o gerenciamento de tarefas, permitindo que você se concentre no que é mais importante e alcance uma produtividade máxima.";
    res.send(info_des);
});

router.get('/sobre', (req, res) => {    
    const sobre = "Olá, me chamo Jhonatan Sampaio, sou estudante do 7º periodo de Engenharia de Software na Universidade Tecnologica Federal do Paraná, no municipio de Cornelio Procopio - PR. Atualmente sou estagiario na empresa Forlogic, tambem situada em Cornelio, onde trabalho com Angular, .NET, C#, SQL Server, entre outras ferramentas.";
    res.send(sobre);
});

router.get('/tecnologias', (req, res) => {    
    const info_tech = ['NodeJS', 'Express', 'Angular', 'MongoDB'];
    res.send(info_tech);
});

router.get('/contato', (req, res) => {    
    res.render('public/contact');
});

router.get('/login', (req, res) => {    
    res.render('public/login');
});

router.get('/register', (req, res) => {    
    res.render('public/register');
});

router.get('/profile', (req, res) => {    
    res.render('public/profile');
});

router.get('/add-edit-tasks', (req, res) => {    
    res.render('public/add-edit-tasks');
});

router.get('/tasks', (req, res) => {    
    res.render('public/tasks');
});

router.post('/send-email', (req, res) => {
    const {nome, email, assunto, mensagem} = req.body
    transporter.sendMail({
        from: process.env.MY_EMAIL,
        to: email,
        subject: nome + " - " + email + " - " + assunto,
        body: mensagem,
    })
})

module.exports = router;