const fs = require('fs');

// Define o caminho do diretório a ser lido
const diretorio = './minha-pasta';

// Lê o conteúdo do diretório
fs.readdir(diretorio, (err, arquivos) => {
  if (err) {
    console.error(err);
    return;
  }

  // Filtra apenas os arquivos com extensão .js
  const arquivosJs = arquivos.filter((arquivo) => arquivo.endsWith('.js'));

  // Transforma o array de nomes de arquivos em um array de objetos com informações adicionais
  const arquivosInfo = arquivosJs.map((arquivo) => ({
    nome: arquivo,
    tamanho: fs.statSync(`${diretorio}/${arquivo}`).size,
    ultimaModificacao: fs.statSync(`${diretorio}/${arquivo}`).mtime,
  }));

  console.log(arquivosInfo);
});