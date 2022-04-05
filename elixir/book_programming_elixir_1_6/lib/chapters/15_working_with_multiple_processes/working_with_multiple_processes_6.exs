defmodule WorkingWithMultipleProcesses6 do
  @moduledoc """

  ➤ Exercise: WorkingWithMultipleProcesses-6
  In the pmap code, I assigned the value of self to the variable me at the top of the method and then used me
  as the target of the message returned by the spawned processes. Why use a separate variable here?

  Resposta: É necessário separar o PID do processo pai em variavel separada para salvar a referencia.
  Se não fizemos, quando executamos self() dentro do Enum.map, com o spawn_link, não saberiamos para retornar o resultado do calculo.
  """
end
