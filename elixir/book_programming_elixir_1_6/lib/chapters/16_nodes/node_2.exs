defmodule Nodes2 do
  @doc """
  ➤ Exercise: Nodes-2
  When I introduced the interval server, I said it sent a tick “about every 2 seconds.”
  But in the receive loop, it has an explicit timeout of 2,000 ms.
  Why did I say “about” when it looks as if the time should be pretty accurate?

  Resposta: O tempo de resposta do "tick" é por volta de 2 segundos pois
  a função generator também trata os casos de registro.
  Quando há novos cliente para serem registrados, o contador será reiniciado.
  """
end
