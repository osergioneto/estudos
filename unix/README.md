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

    ~/doc $ mkdir wow
    ~/doc $ ls
    a.txt b.txt wow
    ~/doc $ cp a.txt wow

agora `wow/` tem um arquivo `a.txt` nele:

    ~/doc $ ls wow
    a.txt

Você pode copiar para um arquivo de destino específico:

```bash
~/doc $ cp a.txt wow/whatever.txt
~/doc $ ls wow
a.txt whatever.txt
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
~ $ echo robot-{um,dois,três,quatro}-x
robot-um-x robot-dois-x robot-três-x robot-quatro-x
```

---
Com brace extenions, você pode ter múltiplas expansões:

```bash
~/doc $ echo robot/{c3po,r2d2}/{sound.mp3,info.txt}
robot/c3po/sound.mp3 robot/c3po/info.txt robot/r2d2/sound.mp3 robot/r2d2/info.txt
```

Você pode até aninhar as expansões!

```bash
~/doc $ echo x-{wing,b{ee,oo}p}
x-wing x-beep x-boop
```

```bash
$ mkdir folder{1..100}
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
    3 7 35 /home/osergioneto/notes.txt

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

    ~ $ echo ahoy thar > greetings.txt

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

    ~ $ echo wow > cool.txt
    ~ $ ls >> cool.txt
    ~ $ cat cool.txt
    wow
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

    ~ $ wc -c < notes.txt
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

     sed -r 's/\s+/\n/g'

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
    whale.
    whale
    WHALE!

---
# pipeline breakdown: wc -l

    wc -l

conta o número de linhas de stdin e imprime o resultado.

---
# head

O comando head imprime a primeira parte de um arquivo.

Se um arquivo não for fornecido, `head` lê stdin.

Leia as primeiras 3 linhas de um arquivo com `head -n3`:

```bash
$ head -n3 mobydick.txt
O EBook do Project Gutenberg de Moby Dick; ou The Whale, de Herman Melville

Este e-book deve ser usado por qualquer pessoa em qualquer lugar, sem custo e com
```

---
Leia os primeiros 20 bytes de um arquivo com `head -c20`:

```bash
~ $ head -c20 mobydick.txt
O Projeto Guten
```

---
# tail

O comando tail imprime a última parte de um arquivo.

Se um arquivo não for fornecido, `tail` lê stdin.

Leia as últimas 4 linhas de um arquivo com `tail -n4`:

```bash
~ $ tail -n4 mobydick.txt
Este site inclui informações sobre o Project Gutenberg-tm, incluindo como fazer doações para o Project Gutenberg Literary Archive Foundation, como ajudar a produzir nossos novos e-books e como inscreva-se em nosso boletim informativo por e-mail para saber mais sobre novos e-books.
```

---
Leia os últimos 9 bytes de um arquivo com `tail -c9`:

```bash
~ $ tail -c9 mobydick.txt
eBooks.
```

---
# cal

Se você precisar de um calendário de texto, basta digitar `cal`:

```bash
~ $ cal
   December 2014      
Su Mo Tu We Th Fr Sa  
    1  2  3  4  5  6  
 7  8  9 10 11 12 13  
14 15 16 17 18 19 20  
21 22 23 24 25 26 27  
28 29 30 31           
```

---
Você pode mostrar o mês atual, o anterior e o próximo:

```bash
~ $ cal -3
   November 2014         December 2014          January 2015      
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  
                   1      1  2  3  4  5  6               1  2  3  
 2  3  4  5  6  7  8   7  8  9 10 11 12 13   4  5  6  7  8  9 10  
 9 10 11 12 13 14 15  14 15 16 17 18 19 20  11 12 13 14 15 16 17  
16 17 18 19 20 21 22  21 22 23 24 25 26 27  18 19 20 21 22 23 24  
23 24 25 26 27 28 29  28 29 30 31           25 26 27 28 29 30 31  
30                                                          
```
---
Ou você pode mostrar um ano inteiro:
```bash
~ $ cal 2021
                            2021
      Janeiro              Fevereiro               Março          
do se te qu qu se sá  do se te qu qu se sá  do se te qu qu se sá  
                1  2      1  2  3  4  5  6      1  2  3  4  5  6  
 3  4  5  6  7  8  9   7  8  9 10 11 12 13   7  8  9 10 11 12 13  
10 11 12 13 14 15 16  14 15 16 17 18 19 20  14 15 16 17 18 19 20  
17 18 19 20 21 22 23  21 22 23 24 25 26 27  21 22 23 24 25 26 27  
24 25 26 27 28 29 30  28                    28 29 30 31           
31                                                                

       Abril                  Maio                 Junho          
do se te qu qu se sá  do se te qu qu se sá  do se te qu qu se sá  
             1  2  3                     1         1  2  3  4  5  
 4  5  6  7  8  9 10   2  3  4  5  6  7  8   6  7  8  9 10 11 12  
11 12 13 14 15 16 17   9 10 11 12 13 14 15  13 14 15 16 17 18 19  
18 19 20 21 22 23 24  16 17 18 19 20 21 22  20 21 22 23 24 25 26  
25 26 27 28 29 30     23 24 25 26 27 28 29  27 28 29 30           
                      30 31                                       

       Julho                 Agosto               Setembro        
do se te qu qu se sá  do se te qu qu se sá  do se te qu qu se sá  
             1  2  3   1  2  3  4  5  6  7            1  2  3  4  
 4  5  6  7  8  9 10   8  9 10 11 12 13 14   5  6  7  8  9 10 11  
11 12 13 14 15 16 17  15 16 17 18 19 20 21  12 13 14 15 16 17 18  
18 19 20 21 22 23 24  22 23 24 25 26 27 28  19 20 21 22 23 24 25  
25 26 27 28 29 30 31  29 30 31              26 27 28 29 30        
                                                                  

      Outubro               Novembro              Dezembro        
do se te qu qu se sá  do se te qu qu se sá  do se te qu qu se sá  
                1  2      1  2  3  4  5  6            1  2  3  4  
 3  4  5  6  7  8  9   7  8  9 10 11 12 13   5  6  7  8  9 10 11  
10 11 12 13 14 15 16  14 15 16 17 18 19 20  12 13 14 15 16 17 18  
17 18 19 20 21 22 23  21 22 23 24 25 26 27  19 20 21 22 23 24 25  
24 25 26 27 28 29 30  28 29 30              26 27 28 29 30 31     
31
```

---
# date

Para imprimir a data, basta fazer:

```bash
~ $ date
sáb 09 jan 2021 22:29:13 -03
```

---
Você pode formatar a data como quiser:

```bash
~ $ date + '% Y-% m-% d% H:% M:% S'
09-01-2021 22:30:07
```

Verifique a página de manual (`man date`) para mais informações sobre quais opções estão
disponível para strings de data.

---
# fold

Às vezes, é útil quebrar linhas longas em linhas mais curtas.

---
Podemos usar o comando dobrar para quebrar algum texto em 30 caracteres:

```bash
~ $ head -n250 mobydick.txt | tail -n3 | fold -w 30
can see a whale, for the first
 discoverer has a ducat for hi
s pains....
I was told of a whale taken ne
ar Shetland, that had above a 
barrel of
herrings in his belly.... One 
of our harpooneers told me tha
t he caught
```

---
ou para quebrar em espaços, use `-s`:

```bash
~ $ head -n250 mobydick.txt | tail -n3 | fold -sw 30
can see a whale, for the 
first discoverer has a ducat 
for his pains....
I was told of a whale taken 
near Shetland, that had above 
a barrel of
herrings in his belly.... One 
of our harpooneers told me 
that he caught
```

---
# curl

curl é uma pequena ferramenta útil para transferir dados de/para um servidor. Dá para enviar requisições HTTP com ela.

Aqui está um trecho simples para buscar a Chave pública RSA mais recente do github do Substack, envolvendo a saída para
75 linhas de caracteres:

---
```bash
~ $ curl -s https://github.com/substack.keys | tail -n1 | fold -w75
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAEAQC7wF3cwpH+NVG+qNz0PLjEg9IqaNyXeeITme9
fksfJx/rTyoFAWW+JrJVKLPNBCe63JYvp3pTvPqJRg/8hEb/+uFlIIzUNhHAUSaS1mmKgnTHbb+
1d8CkFAZiZnDhFOKRkEXh5R9F9htNQVIjyzD3XL/H69mb8YzICItq/9klVTZ66s1thp7r3V5+qE
hbLB4yH6stXyuj2SZiMS+CJeVBJ8Pf/CCUH66NK2o7l1zliJwme+UJry1RtxWQBfEChj9qe36B/
bR3HACtx6ANMdYJsOxZm0znUjn/XJ9jxy22nVJY5otwZNeIZSSyA1lZB2mZRzTTWzPPx62VWdgH
eQdOmnqBP0YWpxPBSMJwn4kFt6aGImrm7WTU5sHwqqxRgNvcrecxPWgbdLcV+x/OWF5bug3s096
AWcP4wQI101w7QtI3cc5+JKHSGssuY17jyyNaHttE7GafBu3pbK93YolgNAMyYUHVicgK+uY6o+
sH4gcRx+RyQ4OkO7Js49wJi0AXPGhp5QRmIFpua/vVzhMTwMhqW+6luWgfPeAVqn95erc49cY+W
2B83ZgaDVSuRfDafVCSjUl+oXG/1KxzP2F/ZhGmNGmBRnF5N4OLHW6/KtVgxCpf3+1bcgye+yiq
NQuM5/NNWZRw3NJhk0XEppd5Ai4JpvguDLhWZ19/+XEvFj9kwKRMRbxf1M7hWDutAE46sQc9x4M
135M/SyuHW9asHBDCJPgD3nBAjYpMV0fQxIbcNiYWF+JsH6NzhRpLnsTNUvsfUcC/FQqX3VD0Xu
IEoYmKwDesv6PU60pQNEi6p4u+PnFHS/vvRASYLo/4s+99GQDWxqzi0jjYVWheQW9RLnTU+ghud
A+xPp7CK/tH8/RAutDdk3k0HdsNTsjHFN/HvM23UIHOpuY07yohayQididHt023IAZdys6m2daQ
RUKXM8cfaFdQqoj/vaby7pxBPWzO6tuXy1tI6gQ+nolZaXQfXUBHF1uBXo1UQI0dp8J5tCppty6
NvXmvv90PBGVXOlplyhXB9q0JXBInidATeT8zlgM4Iq1X6ZVlXN2OIU5CiWVA1NYmf05709e6SK
P0kK2oh19gA+qg1oPOw0WTpZGKz/9NCCw2ywK2/yNJRWuIbSE4RAv6N8v7qtPObwAU5Lohj8oQV
yC/bbLF6VuVJo6V/nfvP+EJKtsXlBBPBzdsmV1hikkGLJx7Up1s7WTZCwSeSGFPXCe7RdElz2mQ
YB6dwEbhaGl48MhuiIeER7KZqzQFOu74G0u5tyyCUeEc90BkeUcf/EhrxfS8R9ZRJ9ce7IpYQ4+
9wTBKFzVc1HinCSUwJTu7m+UHLaaNbK+WCIF+2fFvM1IJmTh2pWSMb
```

# grep

Você pode pesquisar padrões em arquivos ou no stdin
com o comando `grep`.

O primeiro argumento é o padrão para pesquisar como
uma expressão regular.

---
Aqui podemos pesquisar todas as linhas correspondentes
"whaling" ou "fishing":

```
~ $ grep -iE '(whal | fish) ing' mobydick.txt | tail -n5
Equatorial fishing-ground, and in the deep darkness that goes before the
the whaling season? See, Flask, only see how pale he looks--pale in the
preliminary cruise, Ahab,--all other whaling waters swept--seemed to
fixed upon her broad beams, called shears, which, in some whaling-ships,
years of continual whaling! forty years of privation, and peril, and
```

---
# backticks

Às vezes é útil incluir a saída de um
programa na lista de argumentos de outro.

Por exemplo, com o comando de data, podemos imprimir o
ano atual:

```bash
date +%Y
```

---
e podemos usar esse valor em uma mensagem com echo:

```bash
~ $ echo Greetings from the year `data +%Y`.
Greetings from the year 2021.
```

---
# aritmética

Com expressões `$((...))`, você pode fazer
aritmética na linha de comando!

```bash
~ $ echo $ ((4 * 5 + 1))
21
```

Eu não exageraria com esse recurso, mas às vezes é útil.

---
# variáveis de ambiente

Variáveis de ambiente são definidas pelo shell e scripts de shell.

Para listar as variáveis de ambiente atuais, digite
`export`:

---
```bash
~ $ export
declare -x DISPLAY=":0"
declare -x HOME="/home/osergioneto"
declare -x HUSHLOGIN="FALSE"
declare -x LANG="en_US.UTF-8"
declare -x LD_LIBRARY_PATH="/home/osergioneto/prefix/lib:/usr/local/lib:/usr/lib/x86_64-linux-gnu:/usr/lib:/lib64:/lib"
declare -x LIBGL_DRIVERS_PATH="/usr/lib/i386-linux-gnu/dri:/usr/lib/x86_64-linux-gnu/dri"
declare -x LOGNAME="substack"
declare -x MAIL="/var/mail/substack"
declare -x OLDPWD="/home/osergioneto/projects/workshops"
declare -x PATH="/home/osergioneto/prefix/bin:/usr/local/bin:/usr/bin:/bin:/sbin:/usr/sbin:/usr/local/games:/usr/games"
declare -x PREFIX="/home/osergioneto/prefix"
declare -x PWD="/home/osergioneto"
declare -x ROXTERM_ID="0x43962f0"
declare -x ROXTERM_NUM="15"
declare -x ROXTERM_PID="2521"
declare -x SHELL="/bin/bash"
declare -x SHLVL="3"
declare -x TERM="xterm"
declare -x USER="substack"
declare -x WINDOWID="8684328"
declare -x WINDOWPATH="7"
declare -x XAUTHORITY="/home/osergioneto/.Xauthority"
```

---
Você pode usar qualquer variável de ambiente referindo-se ao seu `$NAME`.

Por exemplo, para imprimir o valor de `$HOME` faça:

```bash
~ $ echo $HOME
/home/osergioneto
```

---
Você pode usar variáveis de ambiente em qualquer comando:

```bash
~ $ ls /home/$USER
doc  media  notes.txt  projects
```

---
Para definir sua própria variável de ambiente, basta colocar seu nome seguido 
por um sinal de igual (sem espaços) seguido de seu valor:

```bash
~ $ ANIMAL=gatos
~ $ echo $ANIMAL
gatos
```

---
Variáveis de ambiente são quase sempre letras maiúsculas para distingui-los 
das variáveis em scripts de shell, mas variáveis em minúsculas também funcionam.

---
# quotes

Se você quiser usar caracteres como `<` ou `>` nos argumentos de um programa, 
você precisará usar aspas para que o shell não tente interpretar eles.

Por exemplo, para imprimir a string `<b> wow </b>` nós pode usar aspas simples:

```bash
~ $ echo '<b> uau </b>'
<b> uau </b>
```

---
As aspas duplas são semelhantes, mas as variáveis de ambiente e crases serão
interpolado no local (substituído por seu valor):

```bash
~ $ echo "Não há lugar como $HOME."
Não há nenhum lugar como /home/osergioneto.
~ $ echo "Até logo` data +%Y`... "
Até logo 2021 ...
~ $ echo "Até logo` data +%Y ... próxima parada $((`data +%Y`+1))"'!'
Até logo 2021... próxima parada 2022!
```

---
Você também precisará usar aspas se um dos
os argumentos que você deseja fornecer têm um espaço em branco
caractere nele, porque o espaço em branco é diferente
usado para dividir argumentos.

---
# scripts

Sempre que você se pegar digitando a mesma
sequência de comandos várias vezes, considere
fazer um script!

Basta colocar os comandos que você normalmente digitaria em
um arquivo e adicione `#!/bin/bash` no topo do arquivo:
```sh
#!/bin/bash
mkdir uau
cd uau
echo "yay" > zing.txt
```

---
Agora torne seu arquivo de script executável:

    ~ $ chmod +x yourscript.sh

E agora você pode fazer:

    ~ $ ./yourscript.sh

para executar os comandos do seu arquivo!

---
# argumentos de script

Quando você executa um script com argumentos na
linha de comando, variáveis de ambiente especiais `$1`,
 `$2`, `$3`... serão definidas para cada argumento.

Por exemplo, se nosso script for:

```sh
#!/bin/bash
echo first=$1
echo second=$2
```

---
Em seguida, imprimimos o primeiro e o segundo argumentos:

```
~ $ ./yourscript.sh beep boop
first=beep
second=boop
```

---
Existe uma variável especial `$*` que contém todos
os argumentos separados por espaços. Para um script
do:

```sh
#!/bin/bash
echo Os argumentos são: $*
```

---
E agora podemos obter todos os argumentos em um só lugar:

```bash
~ $ ./args.sh gatos cachorros patos lagartos
Os argumentos são: gatos cachorros patos lagartos
```

---
# $PATH

Existe uma variável de ambiente especial chamada `$PATH`:

```bash
~ $ echo $ PATH
/usr/local/bin:/usr/bin:/bin:/sbin:/usr/sbin:/usr/local/games:/usr/games
```

Esta variável contém uma lista de lugares separados
por `:` esse bash parecerá quando você digitar um
comando.

---
Se você colocar um arquivo executável em um dos
diretórios em seu `$PATH`, você pode fazer seus próprios
comandos sem a necessidade de especificar um caminho relativo ou absoluto!

`/usr/local/bin` é o lugar habitual para colocar
scripts específicos do sistema que não são gerenciados pela distribuição do seu sistema. Se você fizer:

```bash
~ $ sudo cp yourscript.sh /usr/local/bin
```

---
Então você será capaz de digitar `yourscript.sh` de
qualquer diretório na linha de comando!

Você pode renomear o comando que você digita
renomeando o arquivo:

```bash
~ $ sudo mv /usr/local/bin/{yourscript.sh,whatever}
```

e agora o comando é chamado de `whatever`.

---
# ~/.bashrc

Existe um script bash especial chamado `~/.bashrc`
que é executado sempre que você inicia o bash. Você pode editar este arquivo para configurar aliases, ambiente
variáveis e executar comandos ao iniciar um novo
sessão de terminal.

---
Na parte inferior do seu arquivo `~/.bashrc`, tente adicionar um comando:

```bash
echo Saudações $USER. Prazer em ver você de novo.
```

Agora abra um novo terminal e você verá uma nova mensagem amigável!

---
# permissões

Cada arquivo em um sistema UNIX pertence a um usuário e a um
grupo.

usuários são contas no sistema, como a que você
faz login. grupos são coleções de usuários.

---
Para ver a quais grupos você pertence, basta digitar
`grupos`:

```bash
~ $ groups
osergioneto adm cdrom sudo dip plugdev lpadmin lxd sambashare docker
```

---
Para inspecionar as permissões em um arquivo, use `ls -l`:

```bash
~/doc $ ls -l b.txt
-rw-r-r-- 1 osergioneto wharever 11 de janeiro, 00:29 b.txt
```

---
Aqui podemos ver que o arquivo `b.txt` é propriedade de
o usuário `osergioneto` e o grupo`whatever`.
Também há esta parte à esquerda:

```bash
-rw-r-r--
```

Esta string descreve as permissões do arquivo.

---
O primeiro caractere é reservado para alguns usos fancy, mas depois disso há 3 grupos de 3 caracteres:

```bash
rwxrwxrwx
```

---
Cada caractere descreve uma permissão: (r)ead,
(w)rite e e(x)ecute. Um `-` no lugar de uma dessas letras significa que a permissão não é acessível.

Se o bit e(x)ecute estiver habilitado em um arquivo para um
usuário, significa que o usuário pode executar o arquivo.

Se o bit e(x)ecute estiver habilitado em um diretório para
um usuário, isso significa que o usuário pode listar os arquivos em esse diretório.

---
* O primeiro `rwx` diz o que o proprietário pode fazer.
* O segundo `rwx` diz o que os usuários do grupo podem fazer.
* O terceiro `rwx` diz o que todos os outros podem fazer.

Essas três categorias são chamadas de usuário (u),
grupo (g) e outro (o).

---
# chmod

Para alterar as permissões em um arquivo, primeiro descubra
quais recursos você deseja conceder ou retirar
(rwx) de quais categorias de usuários (ugo).

---
Para permitir que o proprietário de um arquivo execute um script, você pode fazer:

    ~ $ chmod u+x script.sh

que é o mesmo que:

    ~ $ chmod +x script.sh

porque o `u` está implícito se não for especificado.

---
Você também pode revogar permissões com um `-`. Para
fazer com que outros usuários não possam escrever para um
arquivo:

    ~ $ chmod o-w wow.txt

---
Você pode conceder e revogar permissões ao mesmo tempo. Aqui estamos adicionando permissões de ler e executar para o usuário, ao mesmo tempo que revogamos leitura e escrita do grupo:

    ~ $ chmod u+rxg-rw status.sh

Você pode alterar o proprietário de um arquivo com `chown`
e o grupo com `chgrp`.

---
# controle de trabalho

O Bash foi desenvolvido para lidar com vários programas em execução em paralelo.

---
# time cat

Digite `time cat` e pressione ctrl-c antes de um
segundo, o mais próximo possível sem ultrapassar:

    $ time cat
    ^C

    0m0.920s reais
    usuário 0m0.004s
    sys 0m0.000s

---
# ctrl-c

Encerrar um processo em primeiro plano (foreground).

---
# ctrl-z

Coloque um processo em segundo plano (background).

---
# fg JOB

Move um processo do plano de fundo para o
primeiro plano por seu JOB.

    ~ $ cat
    ^Z
    [1]+  Stopped                 cat
    ~ $ echo wow
    wow
    ~ $ fg %1
    cat
    cool
    cool

---
# sintaxe de trabalho

Quando você coloca um processo em segundo plano com ctrl-z, o
shell imprime uma mensagem com `[N]`. `N` é o job. Use `%N` para se referir a um trabalho específico ou:

* `%%` - o trabalho mais recente

---
# &

Outra maneira de colocar um processo em segundo plano é usar `&`:

    $ ~ node &
    [1] 29877

O id do trabalho de `node` é 1 e o id do processo é
29877. Os IDs de trabalho são locais para uma sessão shell, mas IDs de processo são globais em todo o sistema.

---
    ~ $ perl &
    [1] 29870
    ~ $ pgrep perl
    29870
    ~ $ kill %1
    [1]+  Terminated              perl

---
# pgrep

Pesquise um processo pelo seu nome.

---
# kill ID

Elimine um processo por seu processo ou job id.

---
# screen

Você pode usar a tela para executar programas de linha de comando e manter eles rodando, mesmo quando você sai.

---
# instalação do screen

    $ sudo apt-get install screen

---
# cria uma nova tela nomeada

    $ screen -S website

---
# listar telas

    $ screen -list

---
# conectar a uma tela

    $ screen -x website

---
# desanexar de uma tela

De dentro de uma tela, pressione CTRL+A e, em seguida, `d`.

---
# cria uma nova janela dentro de uma tela

CTRL+A c

---
# ir para a próxima janela

CTRL+A n

---
# ir para a janela anterior

CTRL+A p

---
# fechar uma janela

Basta digitar `exit` para fechar a janela.

---
# executar um servidor web

Faça um servidor web.js:

```js
var http = require('http');
var server = http.createServer(function (req, res) {
    res.end("YOU'RE A WIZARD.\n");
});
server.listen(8000);
```

agora execute seu servidor com o node de dentro de uma tela:

```
$ node server.js
```

em seguida, destaque a tela com CTRL+A d.