# Eventos

Muito da API Core do Node.js é construída em uma arquitetura assíncrona dirigida a eventos em quais certos objetos (chamados de "**emmiters**") emitem certos eventos que causam de Function objects ("**listeners**") serem chamados.

Por exemplo, um objeto do `net.Server` emite um evento toda vez que par conecta ao servidor; um `fs.ReadStream` emite um evento quando um arquivo é aberto; um `stream` emite um evento sempre que informações estão prontas para serem lidas.

Todos os objetos que emitem eventos são instâncias da classe `EventEmitter`. Esses objetos expõem um função `eventEmitter.on()` que permite que uma função ou mais sejam acopladas ao eventos que forem emitidos pelo objeto.

Quando um objeto `EventEmitter` emite um evento, todas as funções acopladas ao evento são chamadas _síncronamente_. Qualquer valor retornado pelos listeners são ignorados e descartados.

O exemplo a seguir mostra um `EventEmitter` simples com apenas um listener. O método `eventEmitter.on()` é usado para registrar o listeners, enquanto o `eventEmitter.emit()` é usado para disparar os eventos.

```javascript
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});
myEmitter.emit("event");
```
