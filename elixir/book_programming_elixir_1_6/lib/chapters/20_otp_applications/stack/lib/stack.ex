defmodule Stack do
  @moduledoc """
  Documentation for `Stack`.
  """

  @server Stack.Server

  def start_link(stack) do
    GenServer.start_link(@server, stack, name: @server)
  end

  def child_spec(opts) do
    %{
      id: __MODULE__,
      start: {__MODULE__, :start_link, [opts]},
      type: :worker,
      restart: :permanent,
      shutdown: 500
    }
  end

  def pop do
    GenServer.call(@server, :pop)
  end

  def push(element) do
    GenServer.cast(@server, {:push, element})
  end
end
