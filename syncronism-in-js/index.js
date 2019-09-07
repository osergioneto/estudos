/*
  0. Obter um usuário
  1. Obter um número de telefone de um usuário a partir de seu Id,
  2. Obter o endereço do usuário pelo Id
*/

function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "Sérgio Neto",
        dataNascimento: new Date()
      });
    });
  }, 1000);
}

function obterTelefone(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        numero: "33790000",
        ddd: 71
      });
    }, 1000);
  });
}

function obterEndereco(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: "Rua Visconde",
        numero: 200,
        bairro: "Imbuí",
        cidade: "Salvador"
      });
    }, 1000);
  });
}

const usuarioPromise = obterUsuario();

// usuarioPromise
//   .then(usuario => {
//     return obterTelefone(usuario.id).then(result => {
//       return {
//         nome: usuario.nome,
//         id: usuario.id,
//         dataNascimento: usuario.dataNascimento,
//         telefone: result
//       };
//     });
//   })
//   .then(usuario => {
//     return obterEndereco(usuario.id).then(result => {
//       return {
//         nome: usuario.nome,
//         id: usuario.id,
//         dataNascimento: usuario.dataNascimento,
//         telefone: usuario.telefone,
//         endereco: `${result.rua} ${result.numero}`
//       };
//     });
//   })
//   .then(result => {
//     console.log(`
//       Nome: ${result.nome}
//       Telefone: ${result.telefone}
//       Endereço: ${result.endereco}
//     `);
//   })
//   .catch(error => {
//     console.log("error:", error);
//   });

// const usuario = obterUsuario((err, user) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   const telefone = obterTelefone(user.id, (err, fone) => {
//     if (err) {
//       console.log(err);
//       return false;
//     }

//     const endereco = obterTelefone(user.id, (err, endereco) => {
//       if (err) {
//         console.log(err);
//         return false;
//       }

//       console.log(`
//         Nome: ${user.nome}
//         Data de Nascimento: ${user.dataNascimento}
//         Telefone: ${fone.ddd} ${fone.numero}
//         Endereço: ${endereco}
//       `);
//     });
//   });
// });

// console.log("usuario: ", usuario);
// console.log("telefone: ", telefone);
