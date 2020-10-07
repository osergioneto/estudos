defmodule Fizzbuzz do
  @moduledoc """
  Documentation for `Fizzbuzz`.
  """

  @doc """
  Get FizzBuzz from list inside file.

  ## Examples

      iex> Fizzbuzz.build("sample.txt")
      {:ok, [1, 2, "Fizz", 4, "Buzz", "FizzBuzz"]}

  """
  def build(file_name) do
    file_name
    |> File.read()
    |> handle_file_read()
  end

  defp handle_file_read({:ok, array}) do
    result =
      array
      |> String.split(",")
      |> Enum.map(fn item -> item |> convert_and_evaluate() end)

    {:ok, result}
  end

  defp handle_file_read({:error, reason}), do: {:error, "Error reading the file: #{reason}"}

  defp convert_and_evaluate(elem) do
    String.trim(elem)
    |> String.to_integer()
    |> check_fizzbuzz()
  end

  defp check_fizzbuzz(num) when is_integer(num) do
    cond do
      divisible_by_15(num) -> "FizzBuzz"
      divisible_by_5(num) -> "Buzz"
      divisible_by_3(num) -> "Fizz"
      true -> num
    end
  end

  defp divisible_by_3(num) when is_integer(num), do: rem(num, 3) === 0
  defp divisible_by_5(num) when is_integer(num), do: rem(num, 5) === 0
  defp divisible_by_15(num) when is_integer(num), do: rem(num, 3) === 0 and rem(num, 5) === 0
end
