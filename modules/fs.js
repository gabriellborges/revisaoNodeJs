const fs = require('fs');
const path = require('path');

// Criar uma pasta SE a pasta não existir
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if(error){
//         console.log(error);
//     }

//     console.log('Pasta criada com sucesso!');
// });

// Criar uma pasta se nao houver e o arquivo se nao houver
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 
    'Hello Node!', 
    (error) => {
        if(error){
        return console.log('Erro: ', error);
        }

    console.log('Arquivo criado com sucesso!');
    
    // Adicionar a um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 
    'Hello World', 
    (error) => {
        if(error){
            return console.log('Erro: ', error);
        }

    console.log('Arquivo editado com sucesso!');
    }
    )

    // Ler arquivo
    fs.readFile(path.join(__dirname, '/test', "test.txt"),
    "utf8",
    (error, data) => {
        if(error){
            return console.log('Erro: ', error);
        }

        console.log(data);
    }
    )
})


