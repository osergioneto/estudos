defmodule Sequence.Server do
  use GenServer
  alias Sequence.Impl

  @server __MODULE__
  #####
  # External API

  def start_link(current_number) do
    GenServer.start_link(@server, current_number, name: @server)
  end

  def next_number do
    GenServer.call(@server, :next_number)
  end

  def increment_number(delta) do
    GenServer.cast(@server, {:increment_number, delta})
  end

  #####
  # GenServer implementation

  def init(initial_number) do
    {:ok, Sequence.Stash.get()}
  end

  def handle_call(:next_number, _from, current_number) do
    {:reply, current_number, Impl.next(current_number)}
  end

  def handle_cast({:increment_number, delta}, current_number) do
    {:noreply, Impl.increment(current_number, delta)}
  end

  def terminate(_reason, current_number) do
    Sequence.Stash.update(current_number)
  end

  def format_status(_reason, [_pdict, state]) do
    [date: [{'State', "My current state is '#{inspect(state)}', and I'm happy"}]]
  end
end
