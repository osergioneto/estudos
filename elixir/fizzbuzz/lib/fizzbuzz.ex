defmodule Fizzbuzz do
  @moduledoc """
  Documentation for `Fizzbuzz`.
  """

  @doc """
  Hello world.

  ## Examples

      iex> Fizzbuzz.hello()
      :world

  """
  def run(array) when is_list(array) do
    array |> Enum.map(fn item -> check_fizzbuzz(item) end)
  end

  def check_fizzbuzz(num) when is_integer(num) do
    cond do
      divisible_by_15(num) -> "FizzBuzz"
      divisible_by_5(num) -> "Buzz"
      divisible_by_3(num) -> "Fizz"
      true -> num
    end
  end

  def divisible_by_3(num) when is_integer(num), do: rem(num, 3) === 0
  def divisible_by_5(num) when is_integer(num), do: rem(num, 5) === 0
  def divisible_by_15(num) when is_integer(num), do: rem(num, 3) === 0 and rem(num, 5) === 0
end
