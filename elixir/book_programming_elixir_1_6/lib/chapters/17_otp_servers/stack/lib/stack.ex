defmodule Stack do
  @moduledoc """
  Documentation for `Stack`.
  """

  use GenServer

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
  def handle_call(:pop, _from, []) do
    {:reply, [], []}
  end

  def handle_call(:pop, _from, [hd | tail]) do
    {:reply, hd, tail}
  end
end
