defmodule SimpleRecursion do
  @doc """
  Sum all numbers between 1 and n.

    iex> SimpleRecursion.sum(1)
    1

    iex> SimpleRecursion.sum(3)
    6

    iex> SimpleRecursion.sum(5)
    15
  """
  def sum(1), do: 1
  def sum(n) when is_integer(n) and n > 0, do: sum(n - 1) + n

  @doc """
  Return gcd(greatest common divisor) between two numbers.

    iex> SimpleRecursion.gcd(2,12)
    2

    iex> SimpleRecursion.gcd(12,30)
    6
  """
  def gcd(x, y) when y == 0, do: x
  def gcd(x, y), do: gcd(y, rem(x, y))
end
