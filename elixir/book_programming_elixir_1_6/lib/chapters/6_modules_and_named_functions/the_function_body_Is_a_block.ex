defmodule Times do
  def double(n), do: n * 2

  @doc """
  Extend the Times module with a triple function that multiplies its parameter
  by three.
  """
  def triple(n), do: n * 3

  def quadruple(n), do: double(n) * 2
end
