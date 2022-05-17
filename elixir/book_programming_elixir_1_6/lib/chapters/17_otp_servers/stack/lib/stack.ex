defmodule Stack do
  @moduledoc """
  Documentation for `Stack`.
  """

  use GenServer

  @impl true
  def init(stack) do
    {:ok, stack}
  end

  @doc """
  Remove o primeiro item a pilha.

  ## Examples

      iex> {:ok, pid} = GenServer.start_link(Stack, [1, 2, 3])
      iex> GenServer.call(pid, :pop)
      1
  """
  @impl true
  def handle_call(:pop, _from, []) do
    {:reply, [], []}
  end

  @impl true
  def handle_call(:pop, _from, [hd | tail]) do
    {:reply, hd, tail}
  end

  @doc """
  Callback que lida com as mensagens de `:push`.

  Nesse callback o valor enviado como argumento é adicionado ao topo da pilha.
  Nada é retornado.
  """
  @impl true
  def handle_cast({:push, value}, stack) do
    {:noreply, [value | stack]}
  end
end
