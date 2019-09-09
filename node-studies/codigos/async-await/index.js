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

main();
async function main() {
  try {
    console.time("medindo-promises");
    const usuario = await obterUsuario();
    // const telefone = await obterTelefone(usuario.id);
    // const endereco = await obterEnderecoAsync(usuario.id);
    const result = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ]);

    const telefone = result[0];
    const endereco = result[1];

    console.log(`
      Nome: ${usuario.name}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
      Endereço: ${endereco.rua}, ${endereco.numero}
    `);
    console.timeEnd("medindo-promises");
  } catch (error) {
    console.error(error);
  }
}

// const usuarioPromise = obterUsuario();

// usuarioPromise
//   .then(usuario => {
//     return obterTelefone(usuario.id).then(data => {
//       return {
//         usuario: {
//           id: usuario.id,
//           nome: usuario.name,
//           dataNascimento: usuario.dataNascimento,
//           telefone: `(${data.ddd}) ${data.telefone}`
//         }
//       };
//     });
//   })
//   .then(usuario => {
//     return obterEnderecoAsync(usuario.usuario.id).then(data => {
//       return {
//         usuario: {
//           id: usuario.usuario.id,
//           nome: usuario.usuario.nome,
//           dataNascimento: usuario.usuario.dataNascimento,
//           telefone: `${usuario.usuario.telefone}`,
//           endereco: {
//             rua: data.rua,
//             numero: data.numero
//           }
//         }
//       };
//     });
//   })
//   .then(data => {
//     console.log("Data:", data);
//   })
//   .catch(error => {
//     console.log("Error: ", error);
//   });
