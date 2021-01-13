# vim

vim é um editor de texto de linha de comando popular

---
# por que vim?

* edite arquivos em um servidor remoto via ssh
* funciona sem um ambiente gráfico de desktop
* muitos recursos específicos para programação
* edição muito rápida

---
# por que vim - edição remota

Quando você loga via ssh para administrar um servidor,
tudo o que você tem é uma interface de linha de comando.

Se você se sentir confortável com o vim, pode trabalhar
com o sistema remoto da mesma forma que seu ambiente local.

---
# por que vim - gráficos não necessários

Nem todos os sistemas possuem ambientes gráficos!

O que você faz se o ambiente gráfico
seu computador para de funcionar?

E se você quiser configurar um dispositivo que
não tem placa gráfica?

---
# por que vim - recursos específicos de programação

vim é cuidadosamente ajustado para ser eficaz para
programação.

* alterar facilmente a identação dos blocos de código
* sintaxe highlighting para muitas linguagens de programação
* interface fluida com o shell do sistema

---
# por que vim - edição muito rápida

O vim foi projetado desde o início para ser muito rápido
para usar, uma vez que você tenha aprendido seus comandos 

Muitos dos comandos são projetados para manter seu
dedos na linha inicial do teclado para que
você pode flutuar perfeitamente entre a edição e
digitando.

---
# alternativas

Alguns outros editores de texto de linha de comando:

* nano
* emacs
* vi

nano é muito mais fácil de aprender do que vim pois
não possui muitos recursos.

emacs tem um grande número de recursos e é muito
configurável

vi é um precursor do vim, ele é de 1983. as características do vi são um subconjunto do vim, e o vi tende a já ser
instalado em muitos sistemas.

---
# interface

Ao contrário de muitos programas de linha de comando, o vim é
interativo.

vim usa códigos ANSI para controlar um cursor e
posicionar blocos de texto na tela.

---
# códigos ansi

Os códigos ANSI são instruções especiais que o seu
o terminal interpreta e renderiza.

Os códigos ANSI podem:

* mover o cursor de texto
* mudar cores
* definir modos

---
# códigos ansi - cores!

Tente este comando:

```bash
$ echo -e '\x1b[38;5;44mwow'
```

também tente alterar "44" para alguns outros valores.

Tente empilhar vários códigos de cores:

```bash
$ echo -e '\x1b[38;5;44mso \x1b[38;5;33mcool'
```

---
versão mais brilhante:

```bash
$ echo -e '\x1b[1m\x1b[38;5;44mso\x1b[38;5;1mcool'
```

---
# códigos ansi

Aplicativos como o vim fazem uso intenso de códigos ansi.

---
# e agora:vamos aprender vim!

Primeiro:digite `vim`

---
# agora estamos no vim!

Digite `i` para entrar no modo de inserção.

Agora você pode digitar normalmente.

---
# salvar e sair

Pressione `esc` para sair do modo de inserção.

Agora digite:

    :w foo.txt

para salvar seu arquivo como `foo.txt`.

---
Você pode voltar ao modo de inserção digitando `i`
novamente ou você pode sair digitando:

    :q

Depois de sair, você pode abrir o arquivo de backup
novamente executando:

    $ vim foo.txt

---
ou podemos fazer apenas `vim` e então a partir do comando
modo fazer:

    :o foo.txt

Se já abrimos um arquivo, basta digitar
`:w` para salvar o arquivo, não preciamos digitar o
nome sempre.

---
# modos

A primeira coisa que você notará é que vim tem 2
modos: modo de comando e modo de inserção.

Se estivermos no modo de comando, pressionamos `i` para entrar
modo de inserção.

Se estvermos no modo de inserção, pressionamos `esc` para entrar modo de comando.

---
Se disser `- INSERT --` na parte inferior esquerda de
seu terminal, você está no modo de inserção!

Caso contrário, você está no modo de comando.

---
# vim é uma linguagem

A seguir, vamos combinar alguns comandos.

Tente `:wq` para salvar e então saia.

Tente `:q!` Sair sem salvar.

---
# movendo-se - hjkl

No modo de inserção, as teclas de seta funcionam, mas você
deve praticar não usá-los!

Em vez disso, no modo de comando:

* h - move um caractere para a esquerda
* j - desce uma linha
* k - sobe uma linha
* l - move um caractere para a direita

---
# hjkl em outros lugares...

* o comando `less` usa j e k para cima e para baixo
* https://twitter.com - j e k
* muitos gerenciadores de janela de mosaico, como o xmonad

---
# movendo-se - ainda mais!

Você pode mover todos para todos tipos de lugares rapidamente em modo de comando:

* ^ ou 0 - mover para o início da linha atual
* $ - mover para o final da linha atual
* gg - pula para o início do arquivo
* G - pula para o final do arquivo

---
# deletar

Existem muitas maneiras de excluir!

* x - exclui o caractere sob o cursor
* dd - exclui a linha atual
* d$ ou D - exclui do cursor até o final de
  a linha atual
* d0 ou d^ - exclui do cursor para o início
  da linha atual

---
Você notará que já vimos `0` e` $ `
antes! Você pode redirecionar cada um dos movimentos
em torno de comandos para excluir texto.
Tudo isso funciona:

* dG - excluir da posição atual até o final
  do arquivo
* dgg - excluir da posição atual para o
  início do arquivo
* dj - exclui a linha atual e a linha abaixo
* dk - exclui a linha atual e a linha acima
* 2dd, 3dd etc - exclua as próximas N linhas

---
Mesmo `dl` e` dh` funcionam!

Lembre-se de que o vim é uma linguagem!

---
# procurando

Você pode pesquisar texto usando expressões regulares.

* /PATTERN - busca para frente por PATTERN
* ?PATTERN - pesquisa para trás por PATTERN

Pressione:

* n - pula para a próxima partida
* N - pula para a partida anterior

---
PATTERN é uma expressão regular, mas você pode apenas
trate-o como uma correspondência de texto comum para a maioria
parte.

Você também pode combinar a pesquisa com a exclusão:

* d/ PATTERN - exclui para a próxima correspondência de PATTERN
* d? PATTERN - exclui a correspondência anterior de PATTERN
* dn - excluir para o próximo padrão já correspondido
* dN - excluir para o padrão anterior já correspondente

---
# pulando

Você também pode pular para caracteres individuais
de forma simples na linha atual:

* f + CHAR - busca adiante na linha atual para CHAR
* t + CHAR - pesquisa para frente na linha atual para
  o personagem antes de CHAR
* F + CHAR - pesquisa para trás na linha atual para CHAR
* T + CHAR - pesquisa para trás na linha atual
  para o personagem depois de CHAR

---
Eles são muito úteis em combinação com o
exclua operadores! Eles combinam como você pode
Espero:

* df + CHAR - deleta encaminha na linha atual para CHAR
* dt + CHAR - excluir para a frente na linha atual
  para o personagem antes de CHAR
* dF + CHAR - exclui para trás na linha atual para CHAR
* dT + CHAR - exclui para trás na linha atual
  para o personagem depois de CHAR

---
# pesquisar e substituir

    :s/PADRÃO/SUBSTITUIÇÃO/BANDEIRAS

Experimente em uma linha com os gatos da corda:

    :s/cat/dog/

---
# substituir tudo

    :%s/cat/dog/ig

Substitui "cat" por "dog" em todo o
arquivo, sem diferenciar minusculo e maisculo.

---
# regex flags

* i - não diferencia maiúsculas de minúsculas
* g - substituição global (por linha)

---
# seleção visual

Pressione `v` para entrar no modo de seleção visual.
Mova o cursor para selecionar o texto.

Depois de selecionar um bloco, você pode pressionar:

* `y` - "arranca" o texto para o buffer de colagem
* `x` ou `d` - exclui o texto selecionado
* `>>` - indente o texto à direita por shiftwidth
* `<<` - indente o texto à esquerda por shiftwidth

---
# colar

Depois de preencher o buffer de colagem cortando
ou excluindo, pressione `p` para colar.

---
# modos visuais

* `v` - selecionar por caracteres
* `V` - selecionar por linhas
* ctrl-`v` - seleciona em um bloco

---
# mais modos de inserção

Existem mais maneiras de inserir o modo do que apenas `i`:

* `o` - vai para o modo de inserção, inserindo uma nova linha
abaixo da linha atual
* `O` - vai para o modo de inserção, inserindo uma nova linha
* acima da linha atual
* `a` - entra no modo de inserção em um caractere para
o certo
* `A` - vá para o modo de inserção no final do
linha atual

---
# coisas "fancy"

* `J` - move a próxima linha para o final do
linha atual
* (backtick)+`.` - pula para a última edição

---
# inserir um arquivo

Você pode inserir um arquivo na posição do cursor com:

```
:r otherfile.txt
```

---
# inserir com um comando no lugar

Você pode inserir a saída de um comando no
posição do cursor com `:r!`.

Por exemplo, para inserir a saída do `pwd`
comando:

```
:r! pwd
```

---
# .vimrc

* autoindento
* expandtab
* tabstop
* shiftwidth (sw)

---
# set -o vi

Você também pode usar o atalho do vi no bash!

Apenas faça:

    $ set -o vi

agora pressione esc e hjkl ao seu redor!

----
# o esc está muito longe!

É comum os usuários do vim remapearem seus
teclados.

Uma coisa comum a fazer é trocar a tecla Caps Lock
com a tecla de esc porque esc é uma
chave muito comum no vim.

---
# xmodmap para esc

No Linux, você pode usar o xmodmap para remapear suas chaves.

Salve este texto em um arquivo chamado `.xmodmap` em seu
diretório inicial:

    remove Lock = Caps_Lock
    keysym Escape = Caps_Lock
    keysym Caps_Lock = Escape
    add Lock = Caps_Lockk

---
agora execute `xmodmap ~/.xmodmap` para habilitar seu
chaves trocadas.

Adicione este comando aos seus scripts de login para que
cada vez que você fizer login, não precisará se lembrar de
execute o comando sempre que fizer login.

---
# alternativa de esc integrada

Você também pode usar ctrl+`]` para sair do modo de inserção.

---
# EOF