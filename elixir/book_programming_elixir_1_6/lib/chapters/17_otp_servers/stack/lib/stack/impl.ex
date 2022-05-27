defmodule Stack.Impl do
  def push(value, stack), do: [value | stack]
end
