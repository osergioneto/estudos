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

```
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
```
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

```
~/media/warp $ cd ..
~/media $
```

---
Você também pode listar o diretório pai sem
alterar o diretório atual fazendo `ls ..`:

```
~/media $ ls ..
doc notes.txt
```

Você também pode adicionar caminhos após `..`:

```
~/media $ ls ../projects/workshops
computers.markdown unix.markdown
```

---
Ou `ls .` é o mesmo que` ls`:

```
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

```
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

```
~/doc $ cp a.txt uau/qualquer-que-seja.txt
~/doc $ ls uau
a.txt qualquer-que-seja.txt
```

---
# cp (vários arquivos)

Você pode copiar vários arquivos de uma vez para um novo
lugar, basta colocar:

```
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

```
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

```
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

```
~/doc $ mv a.txt pigeon.txt
~/doc $ ls
b.txt newxyz pigeon.txt xyz
```

---
Ou podemos mover um arquivo para um novo diretório:

```
~/doc $ mv pigeon.txt xyz
~/doc $ ls xyz
123 a.txt b.txt pigeon.txt
```

---
Podemos renomear diretórios da mesma forma que os arquivos:

```
~/ doc $ mv xyz woo
~/ doc $ ls
b.txt newxyz woo
~/ doc $ ls woo
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

```
~ $ mkdir foo foo/bar foo/bar/baz foo/bar/qrs
```

Podemos apenas fazer:

```
~/doc $ mkdir -p foo/bar/baz foo/bar/qrs
```

e os diretórios pais necessários `foo/` e
`foo/bar/` serão criados automaticamente.