# defmodule Solutions do
#   @moduledoc false

#   @doc """
#   "turma de elixir formacao elixir de elixir"
#   %{"turma" => 1, "de" => 2, "elixir" => 3, "formacao" => 1}
#   """
#   def get_words_occurrence(sentence) when is_binary(sentence) do
#     sentence
#     |> String.split()
#     |> Enum.frequencies()
#   end

#   @doc """
#   [1, 5, 0, 8, 10, 9], 19
#   [0, 1, 5, 8, 9, 10], 10

#   [4, 5]
#   """
#   def get_two_sum_index(integers_list, target) do
#     integers_list
#     |> Enum.with_index()
#     # |> Enum.find_index(fn {val1, i} ->
#     #   Enum.fil(integers_list, fn {val2, j} when i != j ->
#     #     val1 + val2 == target
#     #   end)
#     # end)
#     # |> Enum.find_index(fn {val, index} -> val + Enum.at(integers_list, index + 1, 0) == target end)
#   end

#   def two_sum_index(integers_list, target) do
#     indexed_list = Enum.with_index(integers_list)
#     resp = []

#     result =
#       indexed_list
#       |> Enum.filter(fn {val, i1} ->
#         Enum.flat_map(indexed_list, fn {x, i2} ->
#           cond do
#             i1 == i2 -> resp
#             val + x == target -> Enum.into(resp ++ [i2], resp)
#             true -> resp
#           end
#         end)
#         |> IO.inspect()
#       end)
#       |> IO.inspect()

#     # IO.inspect(result)
#     result
#   end

#   def two_number_sum(integers_list, target) do
#     integers_map =
#       integers_list
#       |> Enum.sort()
#       |> Enum.with_index()
#       |> Enum.into(%{})

#     integers_map
#     |> Enum.reduce_while(%{left: 0, right: length(integers_list)-1}, fn x, acc ->
#       if acc.left < acc.right do
#         cond do
#           Map.get(integers_map, acc.left) == Map.get(integers_map, acc.right) -> acc
#           Map.get(integers_map, acc.left) + Map.get(integers_map, acc.right) < target -> acc.left+1
#           Map.get(integers_map, acc.left) + Map.get(integers_map, acc.right) > target -> acc.right-1
#         end
#       else
#         {:halt, acc}
#       end
#     end)
#   end
# end
