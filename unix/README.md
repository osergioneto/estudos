# unix

introdução à linha de comando unix

---
# unix

UNIX era um sistema operacional desenvolvido na AT&T
Bell Labs na década de 1960 até a década de 1980.

https://www.youtube.com/watch?v=tc4ROCJYbm0

GNU/Linux, MacOSX e Android são todos baseados em ideias
e especificações criadas pelo UNIX.

https://en.wikipedia.org/wiki/File:Unix_history-simple.svg

---
# time-sharing

UNIX foi originalmente construído para grandes mainframes,
computadores que muitas pessoas usariam ao mesmo
Tempo.

---
# legado do teletipo: entrada e saída padrão

Cada programa em um sistema UNIX pode ler a entrada do dispositivo padrão (stdin) e escrever para
saída padrão (stdout).

Por padrão, stdin vem do teclado e
stdout é "impresso" no display gráfico.

---
# organização

O sistema operacional UNIX é uma coleção de
programas, cada um com uma função especial:

* kernel
* shell
* utilitários

---
# kernel

mediar o acesso entre os programas do usuário e os recursos do sistema

* Agendamento de CPU
* E/S para hardware de computador
* memória

Os programas solicitam recursos fazendo uma chamada syscall.

---
# shell

Um shell é um programa de computador que pode executar
outros programas a partir de uma interface baseada em texto.

Em uma interface baseada em texto, você interage com um
programa completamente a partir da linha de comando com texto
comandos e saída de texto.

A maioria dos shells modernos são fortemente influenciados pelo primeiros shells UNIX.

---
# shells através dos tempos

* thompson shell - Ken Thompson 1971
* pwb (mashey) shell - John Mashey 1975
* bourne shell - Stephen Bourne 1977
* c shell (csh) - Bill Joy 1978
* tcsh - Ken Greer and Mike Ellis 1983
* korn shell - David Korn 1983
* bourne again shell (bash) - Brian Fox 1987
* almquist shell (ash) - Kenneth Almquist 1989
* debian almquist shell (dash) - Herbert Xu 1997

lista incompleta de shells populares ou influentes

---
# utilitários

Qualquer distribuição de UNIX virá com dezenas de
outros programas que executam apenas uma tarefa.

Os utilitários disponíveis em um determinado sistema variam
amplamente, mas alguns utilitários são muito comuns.

Por exemplo, há um comando para fazer novos
diretórios e outro para mover arquivos.

---
# por que o UNIX ainda é importante?

* portátil para muitos tipos de hardware
* convenções consistentes
* vasto ecossistema de software
* texto!

---
# locais onde você pode encontrar uma linha de comando unix

* roteadores wi-fi
* modems dsl e cabo
* raspberry pi, beaglebone, nvidia jetson
* telefones Android
* laptop ou desktop linux
* Computador Mac OSX
* servidor web

Você pode usar suas habilidades de linha de comando em todas essas plataformas e muito mais!

---
# interface de texto

Para acessar remotamente um sistema UNIX, você pode usar o
mesmas ferramentas de linha de comando e interface que você usa
localmente. Você pode acessar remotamente dispositivos sem uma
tela de exibição/GUI.

O texto é fácil de ler, então você pode fuçar mais e
facilmente descobrir o que está acontecendo. Muitos aspectos
de programação de computador envolvem embaralhar textos
por aí. O UNIX se destaca nesse tipo de tarefa.

---
# filosofia unix

A filosofia unix é um conjunto de princípios de design para
como os programas se relacionam entre si.

* cada programa deve fazer uma coisa bem
* a saída de um programa pode se tornar a entrada de outro

---
# vamos aprender a linha de comando!

bash é um shell popular para sistemas do tipo UNIX.

Se você não tem certeza em qual shell está, digite:

    echo $SHELL

Se você estiver no bash, deverá ver algo como:

    /bin/bash

---
# listar arquivos

Você pode usar o comando `ls` para mostrar todos os arquivos
no diretório atual.

Digite `ls` e você verá algo como:

     ~ $ ls
     projetos doc media notes.txt

---
# argumentos

Por padrão, `ls` lista os arquivos do diretório atual.

Você pode listar arquivos de outro diretório
dando um argumento para `ls`. Um argumento é apenas
outro texto após o `ls`.

---
Por exemplo, para listar os arquivos em `/` (a raiz)
nós podemos fazer:

```bash
~ $ ls /
bin etc lib media proc sbin sys var
boot home lib64 mnt root selinux tmp vmlinuz
dev initrd.img opt run srv usr
```

Neste exemplo, `ls` é o comando e` / `é o argumento.

Os comandos podem ter vários argumentos separados por
espaços ou não ter nenhum.

---
# mudar de diretório

Para alterar o diretório, use o
comando `cd`. O comando `cd` leva um único
argumento: o diretório para o qual mover.

Depois de alterar o diretório atual, liste o
arquivos novamente com `ls`.

---
```bash
~ $ ls
doc media notes.txt projects
~ $ cd media
~/media $ ls
3d audio avatars vector warp
~/media $ cd warp
~/media/warp $ ls
mac.sh*  mac_startup.mp3  mac_warped.mp3  watch.js
Mac Startup-i9qOJqNjalE.mp4  mac_startup.wav  mac_warp.mp3
```

---
# diretórios especiais

Existem alguns diretórios especiais:

* `..` - o diretório pai
* `.` - o diretório atual
* `~` - seu diretório home

Para navegar de volta ao diretório pai, faça
`cd ..`.

```bash
~/media/warp $ cd ..
~/media $
```

---
Você também pode listar o diretório pai sem
alterar o diretório atual fazendo `ls ..`:

```bash
~/media $ ls ..
doc notes.txt
```

Você também pode adicionar caminhos após `..`:

```bash
~/media $ ls ../projects/workshops
computers.markdown unix.markdown
```

---
Ou `ls .` é o mesmo que` ls`:

```bash
~/media $ ls.
Distorção vetorial de avatares de áudio 3D
```

Volte para o seu diretório inicial a qualquer momento
digitando `cd` sem argumentos.

---
# cat

cat foi originalmente escrito para concatenar todos os
arquivos que são passados como argumento:

    ~/doc $ cat beep.txt boop.txt
    BIP
    BOOP

mas também é uma maneira prática de exibir texto único
arquivos na linha de comando:

    ~/doc $ cat beep.txt
    BIP

---
# cp

Copie um arquivo para outro diretório ou nome de arquivo. Vocês pode copiar um único arquivo para fazer uma nova duplicata
Arquivo:

    ~/doc $ ls
    a.txt

Podemos copiar a.txt para b.txt:

    ~/doc $ cp a.txt b.txt


---
Agora existem 2 arquivos idênticos, `a.txt` e` b.txt`:

```bash
~/doc $ ls
a.txt b.txt
```

Você também pode copiar um arquivo ou diretório. Aqui vamos
copiar `a.txt` para o diretório chamado` wow`:

    ~/doc $ mkdir uau
    ~/doc $ ls
    a.txt b.txt uau
    ~/doc $ cp a.txt uau

agora `wow /` tem um arquivo `a.txt` nele:

    ~/doc $ ls uau
    a.txt

Você pode copiar para um arquivo de destino específico:

```bash
~/doc $ cp a.txt uau/qualquer-que-seja.txt
~/doc $ ls uau
a.txt qualquer-que-seja.txt
```

---
# cp (vários arquivos)

Você pode copiar vários arquivos de uma vez para um novo
lugar, basta colocar:

```bash
~/doc $ mkdir xyz
~/doc $ cp a.txt b.txt xyz /
~/doc $ ls xyz
a.txt b.txt
```

O último argumento é o arquivo de destino ou
diretório e os outros argumentos são a fonte
arquivos.

---
# cp -r

Se você tiver um diretório cheio de arquivos e
diretórios que você deseja copiar para um novo lugar, você
pode usar `cp -r` para copiar recursivamente um diretório
e todos os seus subdiretórios para um novo local:

```bash
~/doc $ mkdir xyz/123
~/doc $ cp a.txt xyz/123/
~/doc $ cp -r xyz newxyz
~/doc $ ls newxyz/
123 a.txt b.txt
~/doc $ ls newxyz/123
a.txt
```

---
Da mesma forma, há um `-R` para o comando` ls` que lista recursivamente os subdiretórios:

```bash
~/doc $ ls -R newxyz
newxyz:
123 a.txt b.txt

newxyz/123:
a.txt
```

---
# mv

O comando `mv` é usado para renomear e sobrescrever
arquivos e diretórios.

Para renomear um arquivo, defina o primeiro argumento como o
nome do arquivo original e o segundo argumento para o
novo nome de arquivo ou diretório de destino.

---
Podemos renomear `a.txt` para` pigeon.txt`:

```bash
~/doc $ mv a.txt pigeon.txt
~/doc $ ls
b.txt newxyz pigeon.txt xyz
```

---
Ou podemos mover um arquivo para um novo diretório:

```bash
~/doc $ mv pigeon.txt xyz
~/doc $ ls xyz
123 a.txt b.txt pigeon.txt
```

---
Podemos renomear diretórios da mesma forma que os arquivos:

```bash
~/doc $ mv xyz woo
~/doc $ ls
b.txt newxyz woo
~/doc $ ls woo
123 a.txt b.txt pigeon.txt
```

---
# mkdir

Para fazer um novo diretório, basta executar o comando `mkdir`
com uma lista de novos nomes de diretório:

    $ mkdir hooray

e agora existe um novo diretório chamado `hooray`.

---
Você pode criar vários diretórios de uma vez:

    $ mkdir um dois

e agora dois novos diretórios, `um` e `dois`,
existir.

---
# mkdir -p

Suponha que queremos fazer o seguinte
estrutura de diretório:

    foo/
       bar/
        baz/
        qrs/

---
Em vez de fazer:

```bash
~ $ mkdir foo foo/bar foo/bar/baz foo/bar/qrs
```

Podemos apenas fazer:

```bash
~/doc $ mkdir -p foo/bar/baz foo/bar/qrs
```

e os diretórios pais necessários `foo/` e
`foo/bar/` serão criados automaticamente.

---
# brace expansion

Existe uma sintaxe útil embutida no bash para
expandir padrões que seriam repetitivos para
digitar à mão.

Em vez de fazer algo como:

    ~/doc $ mkdir -p foo/bar/baz foo/bar/qrs

podemos usar uma lista de itens entre chaves:

    ~/doc $ mkdir -p foo/bar/{baz, qrs}

que se expande para o mesmo comando de antes.

---
Para provar isso, você pode usar `echo` para ver o que
expansão é:

    ~ $ echo mkdir -p foo/bar/{baz, qrs}
    mkdir -p foo/bar/baz foo/bar/qrs

Os itens que uma brace expansion gera são
separados por espaços como se você os tivesse digitado
à mão.

---
Você pode ter quantos itens quiser em uma lista:

```bash
~ $ echo robot- {um, dois, três, quatro} -x
robot-um-x robot-dois-x robot-três-x robot-quatro-x
```

---
Com brace extenions, você pode ter múltiplas expansões:

```bash
~/doc $ echo robot / {c3po, r2d2} / {sound.mp3, info.txt}
robot / c3po / sound.mp3 robot / c3po / info.txt robot / r2d2 / sound.mp3 robot / r2d2 / info.txt
```

Você pode até aninhar as expansões!

```bash
~/doc $ echo x- {wing, b {ee, oo} p}
x-wing x-beep x-boop
```

---
# sequências de brace expansions

Pode ser tedioso digitar listas numéricas manualmente.

As expansões da braçadeira podem ajudar com isso:

```bash
~/doc $ echo wow {1..10}
wow1 wow2 wow3 wow4 wow5 wow6 wow7 wow8 wow9 wow10
```

e você pode até especificar uma quantidade a pular:

```bash
~/doc $ echo img {0..100..10}
img0 img10 img20 img30 img40 img50 img60 img70 img80 img90 img100
```

---
# rm

Para remover um arquivo, basta fazer:

     ~/doc $ rm b.txt

Você pode remover vários arquivos de uma vez:

     ~/doc $ rm newxyz / a.txt newxyz / b.txt

e você pode remover diretórios inteiros, incluindo subdiretórios com:

     ~/doc $ rm -r newxyz

Tenha muito cuidado com `-r`. Você pode acidentalmente
exclua muito mais do que pretendia excluir!

Para remover um arquivo, basta fazer:

     ~/doc $ rm b.txt

Você pode remover vários arquivos de uma vez:

     ~/doc $ rm newxyz/a.txt newxyz/b.txt

e você pode remover diretórios inteiros, incluindo subdiretórios com:

     ~/doc $ rm -r newxyz

# wc

O comando `wc` calcula o número de linhas,
palavras e bytes em um arquivo:

    ~ $ wc notes.txt
    3 7 35 /home/substack/notes.txt

Para ver cada campo independentemente, você pode usar
opções diferentes: argumentos que começam com `-`
ou `--` seguido por uma letra ou palavra.

---
Para obter apenas a contagem de palavras, podemos usar `-w`:

    ~ $ wc -w notes.txt
    7 notas.txt

---
Para obter apenas o número de linhas em um arquivo, use `-l`:

    ~ $ wc -l notes.txt
    3 notas.txt

---
Para obter apenas o número de bytes em um arquivo, use `-c`:

    ~ $ wc -c notes.txt
    35 notes.txt

---
Se você não especificar um arquivo, `wc` irá ler de
stdin. Digite Ctrl + D (^D) para encerrar a entrada.

    ~ $ wc -l
    um
    dois
    três
    quatro
    ^D
    4

---
# man

Você pode ler a documentação a qualquer momento em seu
shell digitando `man foo` para qualquer comando` foo`.

Por exemplo, para ler todas as opções que você pode
dar ao comando `wc`, faça:

     ~ $ man wc

A página de ajuda abrirá em seu `$PAGER`. Tipo
`q` para voltar ao seu shell.

---
# mais em opções

As opções (também chamadas de flags ou switches) são argumentos especiais que começam com `-` ou` --`
seguido por uma letra ou palavra.

---
De um modo geral, eles são distintos de outros
argumentos em que sua ordem geralmente não
importam. Por exemplo:

    grep -i uau

é o mesmo que

    grep wow -i

onde `-i` apenas informa o comando` grep` para
realizar uma pesquisa que não diferencia maiúsculas de minúsculas.

---
Às vezes, as opções têm um valor que se segue:

    head -n 1

significa que `-n` tem o valor` 1`.

Às vezes, você pode omitir o espaço:

    head -n1

mas cada programa decide individualmente como
interpretar seus argumentos.

---
# caminhos absolutos e relativos

Os caminhos que começam com `.` ou` ..` são caminhos relativos.
Caminhos que começam com `/` são caminhos absolutos.

---
Caminhos relativos são resolvidos de acordo com o
diretório de trabalho atual:

```bash
~/doc $ cat ../media/warp/mac.sh
#!/bin/ bash
youtube-dl 'https://www.youtube.com/watch?v=i9qOJqNjalE'
ffmpeg -i * .mp4 -vn mac_startup.wav
sox mac_startup.wav mac_warp.mp3 chorus 0,6 0,9 25 0,9 1 8 -s \
   echos 0,8 0,7 40 0,25 63 0,3 phaser 1 0,7 3 0,7 0,5 -t
   play mac_startup.wav
```

---
Os caminhos absolutos são os mesmos, não importa o que
o diretório de trabalho atual é:

    ~/projects/workshops $ cat /etc/issue
    Debian GNU/Linux 7 \n \l
---
# echo

O comando echo apenas imprime texto de seus argumentos:

    ~ $ echo uau legal
    uau legal

Isso não é muito útil por si só, mas se torna
útil quando combinado com redirects  e pipes.

---
# escrever em um arquivo

Usando o caractere `>`, você pode escrever a saída
de um comando para um arquivo.

Por exemplo, para criar um novo arquivo `greetings.txt`
com o conteúdo "ahoy thar", podemos fazer:

     ~ $ echo ahoy thar> greetings.txt

e para imprimir o conteúdo de greetings.txt, use `cat`:

     ~ $ cat greetings.txt
     ahoy thar

---
Você pode redirecionar a saída de qualquer programa para um arquivo:

     ~ $ ls / > list.txt

---
# anexar a um arquivo

O operador de redirecionamento `>` irá sobrescrever um arquivo
com novos conteúdos se já existirem.

Há um operador `>>` que anexa ao final
de um arquivo se ele já existir:

     ~ $ echo uau > cool.txt
     ~ $ ls >> cool.txt
     ~ $ cat cool.txt
     uau
     cool.txt
     doc
     media
     notes.txt
     projects

# ler de um arquivo

Podemos ler um arquivo e inserir no stdin de outro programa com o `<`.

Lembre-se de que se `wc` não obtiver um arquivo como um
argumento, ele lerá de stdin. Podemos carregar um
arquivo em `wc` com` <` ao invés:

     ~ $ wc -c <notes.txt
     35

---
# pipes!

O último porém o mais importante tipo de redirecionamento é
o operador de pipe `|`.

Com `|` você pode jogar a saída de um programa para
a entrada do próximo.

Por exemplo, o comando `ls -1` irá listar arquivos,
um por linha, para stdout. O comando `wc -l`,
entretanto, contará o número de linhas.

---
Conectando esses dois programas, podemos
contar o número de arquivos e subdiretórios em um
diretório:

    ~ $ ls -1 | wc -l
    5

e, de fato, existem cinco arquivos e
subdiretórios neste diretório:

    ~ $ ls -1
    cool.txt
    doc
    meios de comunicação
    notes.txt
    projetos

Você pode encadear quantos comandos `|` quiser
Como você quiser.

---
Aqui está um exemplo usando dois novos comandos `curl`
e `sed` que buscará Moby Dick do Project
Gutenberg e contar o número de ocorrências de
"whale", não diferencia maiúsculas de minúsculas:

```bash
~ $ curl -s http://www.gutenberg.org/cache/epub/2701/pg2701.txt | sed -r 's/\s+/\n/g' | grep -i whale | wc -l
1691
```

---
Podemos até salvar esse número de um arquivo. Basta adicionar
`> whale_count.txt` ao final da pipeline:

```bash
~ $ curl -s http://www.gutenberg.org/cache/epub/2701/pg2701.txt |
sed -r 's/\s+/\n/g' | grep -i whale | wc -l > whalecount.txt
```

# pipeline breakdown: curl

Aqui está uma análise de cada parte do pipeline
e o que faz:

```bash
curl -s http://www.gutenberg.org/cache/epub/2701/pg2701.txt
```

busca Moby Dick do Project Gutenberg e
imprime os resultados em stdout.

---
# pipeline breakdown: sed

     sed -r 's / \ s + / \ n / g'

converte todos os espaços em branco (tabs, espaços, novas linhas) em novas linhas.

Isso significa que cada palavra tem sua própria linha:

```bash
~ $ echo 1 dois três beep boop | sed -r 's/\s+/\n/g'
1
dois
três
beep
boop
```

---
# pipeline breakdown: grep

    grep -i whale

filtra a saída para que apenas as linhas que contenham
a palavra "whale" será mostrada. `-i` torna a
pesquisa case-insensitive.

---
Por exemplo, se tivermos um arquivo `tale.txt`:

    Wow
    such
    a
    whale.
    A
    whale
    of
    a
    WHALE!

---
então nosso comando grep mostrará:

    ~ $ grep -i whale < tale.txt
    baleia.
    baleia
    BALEIA!