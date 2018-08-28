# 0 - Conceitos Básicos

## Índice

 * [Introdução](#intro)
 * [SGBD e funções](#sgbd)
 * [Conceitos Importantes](#hist)
 * [Independência de dados](#independecia-de-dados)
 * [Linguagem de acesso](#introducao)
 * [Vantagens de utilização](#introducao)


### Introdução <a id="intro"></a>
Dados são um conjunto de valores ou ocorrências em um estado bruto com o qual são obtidas informações com o objetivo de adquirir benefícios. Existem dois tipos de dados: estruturados e não estruturados. Os dados estruturados, que são dados formatados, organizados em tabelas - linhas e colunas - e são facilmente processados, geralmente é utilizado um __sistema gerenciador de banco de dados__ para armazenar esse tipo de dado, um exemplo são os dados gerados por aplicações empresariais. Os dados não estruturados não possuem uma formatação específica e são mais difíceis de serem processados. Por exemplo, mensagens de email, imagens, documentos de texto, mensagens em redes sociais.

Todos os dados que são registrados, precisam ser recuperados para serem utilizados. Antigamente, o registro era feito em papel e guardado de maneira física em gavetas/armarios/arquivos. Depois de ser recuperado, para um conjuntos de dados virarem informações, um processamento é necessário, seja esse processamento analógico ou digital. Com a informática, forams criada maneira mais eficiente de armazenar os dados, a primeira delas foi chamada de __sistema de arquivos__, depois a tecnlogica que é usada até hoje foi criada, tecnologia conhecida como __banco de dados__. Graças a essa tecnologia foi possivel armazenar mais informações, num menor espaço e com mais velocidade para encontrar um dado. Ao evoluir das tecnologias, os bancos de dados passaram a integrar os mais diversos sistemas.

Banco de dados é uma coleção de dados relacionados. Um banco de dados é projetado , construído e povoado com dados que possuem um objetivo específico. Ele possui um grupo provável de usuários e aplicações preconcebidas, nas quais estes usuários estão interessados

__Desvantagens dos Sistemas de Arquivos__:

* Redundância e inconsistência de dados
* Dificuldades no acesso aos dados
* Dificuldade de isolamento de dados e programas
* Dificuldade no acesso concorrente (compartilhamento de dados)
* Problemas de seguranças
* Problemas de integridade  

__Vantagens dos Bancos de Dados__:
* Persistência das estruturas dos dados e procedimentos
* Controle de redundâncias/consistência
* Compartilhamento
* Restrição de segurança
* Suporte a transação
* Utilização de regras de restrição de integridade
* Independência de dados
* Capacidade de recuperação e cópias
* Múltiplas interfaces para usuários
* Aderência a Padrões
* Aumento de desempenho



### SGBD e funções <a id="sgbd"></a>
Um __Sistema de Gerenciamento de Banco de Dados (SGBD)__ é o conjunto de softwares responsáveis pelo gerenciamento de um banco de dados. Seu principal objetivo é retirar da aplicação cliente a responsabilidade de gerenciar o acesso, a persistência, a manipulação e a organização dos dados. O SGBD disponibiliza uma interface para que seus clientes possam incluir, alterar ou consultar dados previamente armazenados. Em bancos de dados relacionais a interface é constituída pelas APIs (Application Programming Interface) ou drivers do SGBD, que executam comandos na linguagem __SQL (Structured Query Language)__.

Um SGDB implica a criação e manutenção das bases de dados, elimina a necessidade de especificação de definição de dados, age como interface entre os programas de aplicação e os ficheiros de dados físicos, e separa as visões lógica e de concepção dos dados. Assim sendo, são basicamente três os componentes de um SGBD:

* __Linguagem de definição de dados__ (especifica conteúdos, estrutura a base de dados e define os elementos de dados);
* __Linguagem de manipulação de dados__ (para poder alterar os dados na base);
* __Dicionário de dados__ (guarda definições de elementos de dados e respetivas caraterísticas — descreve os dados, quem os acede, etc.);

__Funções do SGBD__:

* Definição de dados;
* Manipulação de dados;
* Segurança e Integridade;
* Utilitários para Salvar, Recuperação e Reorganização;
* Controle de Concorrência;
* Catálogo/Otimizador;
* Desempenho;

__Usuários do SGBD__:


### Usuários <a id="independecia-de-dados"></a>

### SQL <a id="independecia-de-dados"></a>

### Conceitos Importantes <a id="conceitos-importantes"></a>


