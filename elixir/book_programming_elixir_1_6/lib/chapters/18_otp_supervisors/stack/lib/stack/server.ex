defmodule Stack.Server do
  use GenServer
  alias Stack.Impl

  @impl true
  def init(stack) do
    {:ok, Stack.Stash.get()}
  end

  @impl true
  def handle_call(:pop, _from, []) do
    {:reply, [], []}
  end

  @impl true
  def handle_call(:pop, _from, [hd | tail]) do
    {:reply, hd, tail}
  end

  @impl true
  def handle_cast({:push, value}, stack) when value < 10 do
    {:stop, value}
  end

  @impl true
  def handle_cast({:push, value}, stack) do
    {:noreply, Impl.push(value, stack)}
  end

  @impl true
  def terminate(_reason, state) do
    Stack.Stash.update(state)
  end
end
