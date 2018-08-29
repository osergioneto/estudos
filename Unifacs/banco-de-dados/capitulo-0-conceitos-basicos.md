# 0 - Conceitos Básicos

## Índice

 * [Introdução](#intro)
 * [SGBD e funções](#sgbd)
 * [SQL](#sql)
 * [Conceitos Importantes](#conceitos-importantes)
 



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

__Vantagens do SGBD__:

* __Maior disponibilidade:__ Uma das principais vantagens de um SGBD é que a mesma informação pode ser disponibilizada a utilizadores diferentes, ou seja, compartilhamento de dados.

* __Redundância minimizada:__ Os dados de um SGBD são mais concisos, porque, como regra geral, a informação nela aparece apenas uma vez. Isto reduz a redundância de dados, ou em outras palavras, a necessidade de repetir os mesmos dados uma e outra vez. Minimizando a redundância pode, portanto, reduzir significativamente o custo de armazenamento de informações em discos rígidos e outros dispositivos de armazenamento.

* __Precisão:__ dados precisos, consistentes são um sinal de integridade dos dados. SGBDs fomentam a integridade dos dados, porque as atualizações e alterações dos dados só tem que ser feitas em um só lugar. As chances de se cometer um erro são maiores se você é obrigado a alterar os mesmos dados em vários lugares diferentes do que se você só tem que fazer a mudança em um só lugar.

* __Programa e arquivo de consistência:__ Usando um sistema de gerenciamento de banco de dados, formatos de tabelas e programas do sistema são padronizados. Isso faz com que os tabelas de dados sejam mais fáceis de manter, porque as mesmas regras e diretrizes se aplicam a todos os tipos de dados. O nível de consistência entre os tabelas e programas também torna mais fácil de gerenciar dados quando vários programadores estão envolvidos.

* __User-friendly:__ Os dados são é mais fáceis de acessar e manipular com um SGBD do que sem ele. Na maioria dos casos, SGBDs também reduzem a dependência de usuários individuais à especialistas em computação para atender às necessidades de seus dados.

* __Maior segurança:__ Como afirmado anteriormente, SGBDs permitem que múltiplos usuários acessem os recursos dos mesmos dados. Esta capacidade é geralmente vista como um benefício, mas há riscos potenciais para a organização. Algumas fontes de informação devem ser protegidas ou garantida e vista apenas por indivíduos selecionados. Através do uso de senhas, sistemas de gerenciamento de banco de dados podem ser usado para restringir o acesso aos dados a apenas aqueles que devem vê-lo.

* __Outros:__ Tempo de desenvolvimento de aplicações é reduzido, Maior flexibilidade para realizar alterações (independência de dados) e Maior economia, informações atualizadas, menor volume de papel.

__Desvantagens do SGBD__:

__Custo:__ A Implementação de um sistema de SGBD pode ser cara e demorada, especialmente em grandes organizações. Requisitos de formação pode ser bastante oneroso.

__Segurança:__ Mesmo com salvaguardas no lugar, pode ser possível para alguns usuários não autorizados acessar o banco de dados. Em geral, o acesso de banco de dados é uma proposição de tudo ou nada. Uma vez que um usuário não autorizado fica no banco de dados, eles têm acesso a todos os tabelas, e não apenas algumas. Dependendo da natureza dos dados envolvidos, essas quebras na segurança também pode representar uma ameaça à privacidade individual. Cuidados também devem ser tomados regularmente para fazer cópias de backup das tabelas e armazená-las por causa da possibilidade de incêndios e terremotos que poderiam destruir o sistema.

__Usuários do SGBD__:

* Administrador de Banco de Dados (DBA): responsável pela autorização de acesso ao banco de dados e pela coordenação e monitoração de seu uso. Ou seja ele coordena todas as atividades do sistema de banco de dados; possui boa compreensão dos recursos de informação da empresa e suas necessidades.<br>
Funções do DBA:

  * Definição do esquema;
  * Estrutura de armazenamento e definição de acesso aos dados;
  * Esquema físico e organização;
  * Concede acesso aos usuários;
  * Cuida da integridade dos dados;
  * Atua como elo com os usuários;
  * Acompanha a desempenho, e responde as mudanças exigidas;
  * Atividades de manutenção (Backups);

* __Projetista de Banco de Dados:__ responsável pela identificação dos dados que devem ser armazenados no banco de dados, escolhendo a estrutura correta para representar e armazenar dados. Muitas vezes, os projetistas de banco de dados atuam como "staff" do DBA, assumindo outras responsabilidades após a construção do banco de dados. É função do projetista também avaliar as necessidades de cada grupo de usuários para definir as visões que serão necessárias, integrando-as, fazendo com que o banco de dados seja capaz de atender a todas as necessidades dos usuários.

* __Usuários Finais__: Existem basicamente três categorias de usuários finais que são os usuários finais do banco de dados, fazendo consultas, atualizações e gerando documentos:

  * _Usuários casuais_: acessam o banco de dados casualmente, mas que podem necessitar de diferentes informações a cada acesso; utilizam sofisticadas linguagens de consulta para especificar suas necessidades;
  * _Usuários novatos ou paramétricos_: utilizam porções pré-definidas do banco de dados,utilizando consultas pre estabelecidas que já foram exaustivamente testadas;
  * _Usuários sofisticados_: são usuários que estão familiarizados com o SGBD e realizam consultas complexas.

* __Analistas de Sistemas e Programadores de Aplicações:__ Os analistas determinam os requisitos dos usuários finais e desenvolvem especificações para transações que atendam estes requisitos, e os programadores implementam estas especificações como programas, testando, depurando, documentando e dando manutenção no mesmo. É importante que, tanto analistas quanto programadores, estejam a par dos recursos oferecidos pelo SGBD.


### SQL <a id="sql"></a>

### Conceitos Importantes <a id="conceitos-importantes"></a>


