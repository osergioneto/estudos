defmodule MyList do
  @moduledoc """
  ➤ Exercise: ListsAndRecursion-1
  Write a mapsum function that takes a list and a function. It applies the function to each element of the list and then sums the result, so
    iex> MyList.mapsum [1, 2, 3], &(&1 * &1)
    14
  """
  def mapsum(list, function) do
    list
    |> apply_function(function)
    |> sum_values()
  end

  defp apply_function([], _function), do: []
  defp apply_function([head | tail], function), do: [function.(head), mapsum(tail, function)]

  defp sum_values([]), do: 0
  defp sum_values([head | tail]), do: head + sum_values(tail)
end
