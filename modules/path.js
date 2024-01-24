const path = require('path')

// Apenas o nome do arquivo atual
console.log('Nome do arquivo atual: '+path.basename(__filename));

// Nome do caminho completo do diretorio atual
console.log('Nome do caminho completo do diretorio atual: '+path.dirname(__filename));

// Nome da Extensao do arquivo
console.log('Nome da Extensao do arquivo: ' + path.extname(__filename));

// Criar objeto do path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "test", "test.html"));