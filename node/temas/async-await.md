# Async e Await

## O que é Async e Await?

Async e Await é uma forma de lidar com código assíncrono (promises) de uma maneira aparentemente síncrona.

## Exemplo Simples

No exemplo a seguir, primeiro declaramos uma função que retorna uma promise que resolve o valor de 🤡 depois de 2 segundos. Então nós declaramos uma função assíncrona (`async`) e esperamos (`await`) a promise ser resolvida antes de imprimir a mensagem no console.

```javascript
function scaryClown() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🤡");
    }, 2000);
  });
}

async function msg() {
  const msg = await scaryClown();
  console.log("Mensagem:", msg);
}

msg(); // Mensagem: 🤡 <-- depois de 2 segundos
```

> `await` é um novo operador usado para esperar uma promise ser resolvida ou rejeitada. Ela só pode ser usada dentro uma função assíncrona (`async`).

O poder do async/await se mostra quando existem diversos passos para pegar uma informação, como no exemplo abaixo:

```javascript
function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("🤡");
    }, 200);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("espreita");
    }, 300);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("nas sombras");
    }, 500);
  });
}

async function msg() {
  const a = await who();
  const b = await what();
  const c = await where();

  console.log(`${a} ${b} ${c}`);
}

msg(); // 🤡 espreita nas sombras <-- depois de 1 segundo
```

Uma coisa para se tomar cuidado com exemplo acima é que cada passo é feito de forma sequencial, cada passo esperando o anterior para acontecer. Se pudermos, podemos fazer com que as funções executem em paralelo, ganhando em velocidade, para isso utilizamos o `Promise.all()`:

```javascript
async function msg() {
  const [a, b, c] = await Promise.all([who(), what(), where()]);

  console.log(`${a} ${b} ${c}`);
}

msg(); // 🤡  espreita nas sombras <-- depois de 500ms
```

## Retornando Promises

Funções assíncronas sempre retornam uma promise, então códigos como o seguinte podem não ter o resultado esperado:

```javascript
async function hello() {
  return "Hello World!";
}

const b = hello();

console.log(b); // [object Promise] { ... }
```

Como uma promise é retornada, podemos utilizar o `.then()` e o `.catch()`:

```javascript
async function hello() {
  return "Hello World!";
}

const b = hello();

b.then(x => console.log(x)); // Hello World!
```

## Tratando erros

Conseguimos tratar erros em funções assíncronas utilizando o `try...catch`.

```javascript
function yayOrNay() {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random() * 1); // 0 ou 1, aleatóriamente

    val ? resolve("Sortudo!!") : reject("Azarado 😠");
  });
}

async function msg() {
  try {
    const msg = await yayOrNay();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
}

msg(); // Sortudo!!
msg(); // Sortudo!!
msg(); // Sortudo!!
msg(); // Azarado 😠
msg(); // Sortudo!!
msg(); // Azarado 😠
msg(); // Azarado 😠
msg(); // Azarado 😠
msg(); // Azarado 😠
msg(); // Sortudo!!
```

Como funções assíncronas sempre retornam uma promise, podemos lidar com erros como normalmente fariamos, utilizando o `.catch()`.

```javascript
async function msg() {
  const msg = await yayOrNay();
  console.log(msg);
}

msg().catch(x => console.log(x));
```
