# Strings

## tag functions: TODO

## `padStart()`
O método `padStart()` preenche a string alvo com outra string (múltiplas vezes, se necessário) até que a string resultante alcance o comprimento estipulado. O preenchimento é aplicado a partir do início da string alvo.

```javascript
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

## `padEnd()`

O `padEnd()` é parecido com o `padStart()` porém o preenchimento é atribuido ao final da string.

```javascript
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"/ "abc"
```

## `trim()`

O método `trim()` remove espaço em branco de string. Remove tanto do fim como do inicio. 

```javascript
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'
```

## `trimStart()`

O método `trimStart()` funciona se maneira similar ao `trim()` porém ele retira o start remove apenas do inicio da string.

```javascript
const greeting = '   Hello world!   ';
console.log(greeting.trimStart());
// expected output: "Hello world!   ";

```

## `trimEnd()`

Já o `trimStart()` retira o espaço apenas do final da string.

```javascript
const greeting = '   Hello world!   ';
console.log(greeting.trimEnd());
// expected output: "   Hello world!";
```