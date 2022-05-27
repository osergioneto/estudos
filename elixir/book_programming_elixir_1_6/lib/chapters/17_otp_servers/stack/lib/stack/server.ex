defmodule Stack.Server do
  use GenServer
  alias Stack.Impl

  @impl true
  def init(stack) do
    {:ok, stack}
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
  def terminate(reason, state) do
    IO.puts("reason: #{inspect(reason)}. \nstate: #{inspect(state)}")
  end
end
