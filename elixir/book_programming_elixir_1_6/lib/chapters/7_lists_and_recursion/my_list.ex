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

  @moduledoc """
  Write a max(list) that returns the element with the maximum value in the list. (This is slightly trickier than it sounds.)
  """
  def max([]), do: []
  def max([head | tail]), do: max_internal(tail, head)

  def max_internal([], max), do: max

  def max_internal([head | tail], current_max) when head > current_max,
    do: max_internal(tail, head)

  def max_internal([head | tail], current_max) when head < current_max,
    do: max_internal(tail, current_max)
end
