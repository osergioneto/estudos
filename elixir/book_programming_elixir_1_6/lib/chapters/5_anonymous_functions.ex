defmodule BookProgrammingElixir16.Chapters.AnonymousFunctions do
  @moduledoc """
  Implementation of exercises from chapter 5 (Anonymous Functions) of the book Programming Elixir 1.6.
  """

  @doc """
  Exercise: Functions-1
  – list_concat.([:a, :b], [:c, :d]) #=> [:a, :b, :c, :d]
  – sum.(1, 2, 3) #=> 6
  – pair_tuple_to_list.( { 1234, 5678 } ) #=> [ 1234, 5678 ]

  list_concat/2 Concatenate two lists
  sum/1 Sum all values of
  """

  @spec run_list_concat(list_1 :: list(), list_2 :: list) :: list() | {:error, atom()}
  def run_list_concat(list_1 \\ [], list_2 \\ []) when is_list(list_1) and is_list(list_2) do
    list_concat = fn list_1, list_2 -> list_1 ++ list_2 end

    list_concat.(list_1, list_2)
  end

end
