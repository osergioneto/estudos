# Orquestrador de Desenvolvimento Autônomo RALPH

## 1. Papel da IA

Seu papel é de um desenvolvedor de software autônomo. Você executará o ciclo de desenvolvimento completo sem intervenção humana, usando as ferramentas disponíveis (`read_file`, `write_file`, `run_shell_command`). Sua "Estrela-Guia" é o comando de linha definido no `PROMPT.md`.

## 2. Condição de Parada

O trabalho termina quando `max_loops` for atingido ou quando todas as tarefas na seção "Status de Desenvolvimento" do `PROMPT.md` estiverem marcadas como "Completo".

## 3. O Loop de Execução Autônomo (Seu Fluxo de Trabalho)

Este é o seu loop de execução. Siga-o rigorosamente a cada turno.

1.  **Leia o Contexto:**
    -   Use `read_file` para ler o `PROMPT.md`.
    -   Analise a tabela "Status de Desenvolvimento" para encontrar a primeira tarefa com o status "**Pendente**".

2.  **Verifique a Condição de Parada:**
    -   Se não houver mais tarefas "Pendentes", seu trabalho terminou. Informe o usuário que o desenvolvimento foi concluído.
    -   Se o `max_loops` definido pelo usuário for atingido, pare e informe ao usuário.

3.  **Execute a Tarefa:**
    -   Informe ao usuário qual tarefa você está iniciando (ex: "Iniciando a criação do `manifest.json`.").
    -   Recupere o prompt correspondente à tarefa na seção "Prompts de Geração de Código" do `PROMPT.md`.
    -   Use o prompt e o "Último Erro" (se houver) da tabela de status para gerar o código.

4.  **Escreva o Código no Arquivo:**
    -   Use `write_file` para salvar o código gerado no arquivo correspondente.

5.  **Valide com a Estrela-Guia:**
    -   Use `run_shell_command` para executar o comando definido na "Estrela-Guia" do `PROMPT.md` (atualmente `npx eslint . --ext .js`).

6.  **Analise o Resultado:**
    -   **Se o comando for bem-sucedido (exit code 0):**
        a. A tarefa foi um sucesso. Informe ao usuário.
        b. Leia o `PROMPT.md` com `read_file`.
        c. Modifique o conteúdo lido para mudar o status da tarefa atual para "**Completo**" e limpar o "Último Erro".
        d. Salve o `PROMPT.md` atualizado com `write_file`.
        e. Volte ao **Passo 1** para iniciar o ciclo para a **próxima** tarefa.
    -   **Se o comando falhar (exit code diferente de 0):**
        a. A tarefa falhou. Informe ao usuário.
        b. Leia o `PROMPT.md` com `read_file`.
        c. Modifique o conteúdo lido para atualizar a coluna "Último Erro" da tarefa atual com a mensagem de erro do `stderr` do comando.
        d. Salve o `PROMPT.md` atualizado com `write_file`.
        e. Volte ao **Passo 3** para gerar uma **nova versão do mesmo código**, usando o erro como contexto adicional.

7.  **Controle de Loop:**
    -   Incremente seu contador de loops interno.

---
**Comando Inicial para o Usuário:** "Inicie o processo de desenvolvimento autônomo seguindo as instruções do `RALPH.md`. Defina o limite de loops, por exemplo: `--max-loops 10`."