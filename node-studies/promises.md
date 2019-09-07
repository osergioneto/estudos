## Encadeamento de promises

Os métodos `.then()` e `.catch()` também podem retornar uma nova promise que pode ser lidada encadeando outros `.then()` no final do `.then()` anterior.

Nós usamos o encadeamento de promises quando queremos resolver promises em sequência.

Por exemplo:

```javascript
const promise1 = new Promise((resolve, reject) => {
  resolve("Promise1 resolved");
});

const promise2 = new Promise((resolve, reject) => {
  resolve("Promise2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
  reject("Promise3 rejected");
});

promise1
  .then(data => {
    console.log(data); // Promise1 resolvida
    return promise2;
  })
  .then(data => {
    console.log(data); // Promise2 resolvida
    return promise3;
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error); // Promise3 rejeitada
  });
```

### O que está acontecendo aqui?

- Quando a **promise1** é resolvida, o método `.then()` é chamado e então ele retorna a **promise2**
- O próximo `.then()` é chamado quando **promise2** é resolvida, então ele retorna **promise3**
- Como **promise3** foi rejeitada, o próximo `.then()` não é chamado, o que é chamado é o `.catch()`, que lida com o reject de **promise3**.

### Erros comuns

É comum algumas pessoas aninharem varias promises.

```javascript
const promise1 = new Promise((resolve, reject) => {
  resolve("Promise1 resolved");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("Promise2 resolved");
});
const promise3 = new Promise((resolve, reject) => {
  reject("Promise3 rejected");
});
promise1
  .then(data => {
    console.log(data); // Promise1 resolved
    promise2
      .then(data => {
        console.log(data); // Promise2 resolved

        promise3
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error); // Promise3 rejected
          });
      })
      .catch(error => {
        console.log(error);
      });
  })
  .catch(error => {
    console.log(error);
  });
```

Apesar de o código funcionar perfeitamente, isso torna o código mais dificil de ler e com uma estilização ruim. Se tivermos uma sequência de promises para resolver, é melhor encadear essas promises uma após a outra em vez colocar uma dentro da outra.

## Promise.all()

O método `Promise.all()` recebe um array de promises e retorna uma promise que é completada quando todas as promises dentro do array inputado completam ou então se uma das promises do array for rejeitada.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 resolved");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 resolved");
  }, 1500);
});
Promise.all([promise1, promise2])
  .then(data => console.log(data[0], data[1]))
  .catch(error => console.log(error));
```

- Nesse exemplo o argumento **data** dentro do método `.then()` é um array que contém promises que estão definidas na ordem que foram enviadas como parâmetro para o `Promise.all()` (se tudo der certo)
- O `Promise.all()` é rejeitado quando a primeira promise do array for rejeitada.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 resolved");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise2 rejected");
  }, 1500);
});
Promise.all([promise1, promise2])
  .then(data => console.log(data[0], data[1]))
  .catch(error => console.log(error)); // Promise2 rejected
```

- Aqui temos duas promises, uma que é resolvida depois de 2 segundos e uma que é rejeitada depois de 1.5 segundos.
- Assim que a segunda promise é rejeitada, depois de 1.5 segundos, a `Promise.all()` é retornada como rejeitada, sem esperar as outras promises.

Esse método pode ser útil quando temos mais de uma promise e precisamos saber quando todas as promises forem completadas. Por exemplo, se pedimos dados para uma API e precisamos fazer algo quando todos os requests forem bem sucedidos.

## Promise.race()

Esse método recebe um array de promises e retorna uma nova promise que completa assim que uma das promises do array for completada ou rejeitada.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 resolved");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise2 rejected");
  }, 1500);
});
Promise.race([promise1, promise2])
  .then(data => console.log(data)) // Promise1 resolved
  .catch(error => console.log(error));
```

- Aqui temos duas promises, uma que termina é resolvida depois 1 segundo e outra que é rejeitada depois 1.5 segundos.
- Assim que a primeira promise é retornada, depois de 1 segundo, a promise retornada de `Promise.race()` é resolvida sem esperar a segunda promise ser resolvida ou rejeitada.
- **data** passado para `then()` é o valor da primeira promise que for resolvida.
