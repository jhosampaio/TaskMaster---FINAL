const mongoose = require('mongoose')

async function main(){
    await mongoose.connect(process.env.URL_BD)
    console.log("Conectou ao Mongoose!")
}

main().catch((err) => console.log(err))

module.exports = mongoose