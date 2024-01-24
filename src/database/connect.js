const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@treinandonodejs.vid0qpc.mongodb.net/?retryWrites=true&w=majority`)
    .then(console.log('Conexão estabelecida com sucesso!'))
    .catch(error => {
        console.log('Ocorreu um erro ao realizar a conexão! Erro: ', error);
    })
};

module.exports = connectToDatabase