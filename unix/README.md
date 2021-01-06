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