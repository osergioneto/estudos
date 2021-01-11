# expressões regulares

regex é uma linguagem que serve para encontrar padrões em cadeias de caracteres

muitas linguagens de programação e ferramentas possuem um motor regex

---
# ferramentas com regex

* grep
* sed
* perl
* vim
* less

---
# regex em javascript

* str.split(re)
* str.match(re)
* str.replace(re)
* re.test(str)
* re.exec(str)

---
# formatos comuns de regex 

* `/PATTERN/` - corresponder (match)
* `s/PATTERN/REP/` - substituir (replace)

Você também pode ter FLAGS no final:

* `/PATTERN/FLAGS`
* `s/PATTERN/REP/FLAGS`

---
# às vezes precisamos das barras (slashes)

```bash
$ echo cat cabbage | sed 's/a/@/g'
c@t c@bb@ge
```

---
# às vezes as barras estão implícitas

```bash
$ echo -e 'one\ntwo\nthree' | grep ^t
two
three
```

---
# às vezes as barras não são barras 

```bash
$ echo 'xyz party' | sed 's!xyz!cat!'
cat party
```

---
# substituindo (replacing) no javascript

```js
'1 two three\n'.replace(/1/, 'one')
```

igual a:

```sh
echo '1 two three' | sed 's/1/one/'
```

---
# teste de correspondência (matching) no javascript

```js
if (/^-(h|-help)$/.test(process.argv[2])) {
  console.log('usage: ...')
}
```

---
# capturando em javascript

``` js
var m = /^hello (\S+)/.test('hello cat')
console.log(m[1]) // cat
```

---
# splitting em javascript

``` js
> 'one_two-three'.split(/[_-]/)
[ 'one', 'two', 'three' ]
```

---
# flags
```
/PATTERN/FLAGS
s/PATTERN/REP/FLAGS
```
* i - não diferencia maiúsculas de minúsculas (case insensitive)
* g - corresponde a todas as ocorrências (global)
* m - trata a string como linhas múltiplas
* s - trata a string como uma única linha

---
# metacaracteres

* `.` corresponde a qualquer caractere
* `?` - zero ou uma vez
* `*` - zero ou mais vezes
* `+` - uma ou mais vezes

* `[]` - caractere de classe 
* `^` - âncora no início
* `$` - âncora no fim

* `(a | b)` - corresponde à a ou b

* `()` - grupo de captura
* `(?:)` não grupo de captura

* `\d` - dígito` [0-9] `
* `\w` - palavra` [A-Za-z0-9_] `
* `\s` - espaço em branco` [ \t\r\n\f] `

---
`.` corresponde a qualquer caractere

```bash
$ echo hello beep boop | sed 's/b..p/XXXX/g'
hello XXXX XXXX
```

---
# quantificadores

* `?` - zero ou uma vez
* `*` - zero ou mais vezes
* `+` - uma ou mais vezes

```bash
$ echo 'dog e doge' | sed 's/doge\?/DOGE/g'
DOGE e DOGE
$ echo 'beep bp beeeeep' | sed 's/be*p/BEEP/g'
BEEP BEEP BEEP
$ echo 'beep bp beeeeep' | sed 's/be\+p/BEEP/g'
BEEP bp BEEP
```

---
# quando escapar metacaracteres

Em algumas engines, você precisa escapar metacaracteres
como `+` e `?`.

Em javascript e perl, geralmente você não precisa
escapar os metacaracteres. Para usar sed e grep de jeito parecido, use:

* `sed -r`
* `grep -E`

---
# caracteres de classe

`[...]`

Quaisquer caracteres dentro dos colchetes irão
dar match.

Por exemplo, para dar match em um caractere de vogal: `[aeiou]`.

```bash
$ echo 'beep and boop' \
| sed 's/b[aeiou]\+p/BXXP/g'
BXXP e BXXP
```

---
# intervalos em caracteres de classe

`[A-Z]`

Você pode usar `-` para especificar intervalos.

```bash
$ echo 'beep and boop' | sed 's / [a-f] / X / g'
XXXp XnX Xoop
```

---
# negação de caracteres de classe

`[^...]`

Coloque um `^` após o colchete de abertura em um
caracteres de classe para negá-lo.

Por exemplo, para corresponder a um caractere não vogal: `[^ aeiou]`

```bash
$ echo 'beep boop' | sed 's/[^aeiou]/Z/g'
ZeeZZZooZ
```

---
# sequências de caracteres de classe

Os motores Regex fornecem muitas sequências de caracteres de classe predefinidas:

* `\w` - caractere de palavra: `[A-Za-z0-9_]`
* `\W` - caracteres de não palavra: `[^ A-Za-z0-9_]`
* `\s` - espaço em branco: `[ \t\r\n\f]`
* `\S` - não espaços em branco: `[^ \t\r\n\f]`
* `\d` - dígito: `[0-9]`
* `\D` - sem dígitos: `[^0-9]`

---
# âncoras

* `^` - âncora no início
* `$` - âncora no fim

---
# grupos (capture group)

(a | b) - corresponde à a ou b

* `()` grupo de captura
* `(?:)` grupo de não captura

---
# grupos de captura em sed

```bash
$ echo 'hey <cool> whatever' | sed -r 's/<([^>] +)>/(\1)/g'
hey (cool) whatever
```

---
# referências anteriores em sed (backward reference)

```bash
$ echo 'hey cool cool beans' | sed -r 's/(\S+) \1/REPEATED/'
hey REPEATED beans
```

---
# capture grupos em javascript

```js
var str = 'hey <cool> whatever'
var m = /<([^]+)>/.exec(str)
console.log(m[1]) // cool
```

```js
var str = 'hey <cool> whatever'
console.log(str.replace(/<([^]+)>/,'MATHEMATICAL'))
```