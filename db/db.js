const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URL = `mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@productos.cgo4gc3.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority&appName=Productos`;

const conexionDB = async() => {
    try {
        await mongoose.connect(URL)
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conexionDB;