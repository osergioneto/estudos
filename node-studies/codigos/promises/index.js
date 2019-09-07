const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: "Sérgio Neto",
        dataNascimento: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: "99999999",
        ddd: "71"
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0
    });
  });
}

const usuarioPromise = obterUsuario();

usuarioPromise
  .then(usuario => {
    return obterTelefone(usuario.id).then(data => {
      return {
        usuario: {
          id: usuario.id,
          nome: usuario.name,
          dataNascimento: usuario.dataNascimento,
          telefone: `(${data.ddd}) ${data.telefone}`
        }
      };
    });
  })
  .then(usuario => {
    return obterEnderecoAsync(usuario.usuario.id).then(data => {
      return {
        usuario: {
          id: usuario.usuario.id,
          nome: usuario.usuario.nome,
          dataNascimento: usuario.usuario.dataNascimento,
          telefone: `${usuario.usuario.telefone}`,
          endereco: {
            rua: data.rua,
            numero: data.numero
          }
        }
      };
    });
  })
  .then(data => {
    console.log("Data:", data);
  })
  .catch(error => {
    console.log("Error: ", error);
  });
