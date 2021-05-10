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

  @spec list_concat(list_1 :: list(), list_2 :: list) :: list() | {:error, atom()}
  def list_concat(list_1 \\ [], list_2 \\ []) when is_list(list_1) and is_list(list_2) do
    list_concat = fn list_1, list_2 -> list_1 ++ list_2 end

    list_concat.(list_1, list_2)
  end

  @spec sum(n1 :: integer(), n2 :: integer(), n3 :: integer()) :: integer()
  def sum(n1, n2, n3) do
    sum = fn n1, n2, n3 -> n1 + n2 + n3 end

    sum.(n1, n2, n3)
  end

  @spec pair_tuple_to_list(tupla :: tuple()) :: list()
  def pair_tuple_to_list(tupla \\ {}) when is_tuple(tupla) do
    pair_tuple_to_list = fn tupla -> Tuple.to_list(tupla) end

    pair_tuple_to_list.(tupla)
  end

  @doc """
  |➤ Exercise: Functions-2
  Write a function that takes three arguments. If the first two are zero,
  return “FizzBuzz.” If the first is zero, return “Fizz.” If the second is zero,
  return “Buzz.” Otherwise return the third argument. Do not use any lan-
  guage features that we haven’t yet covered in this book.

  ## Examples

      iex> fizzbuzz.(0, 0, 1)
      "FizzBuzz"

      iex> fizzbuzz.(0, 1, 1)
      "Fizz"
  """
  fizzbuzz = fn
    0, 0, _ -> "FizzBuzz"
    0, _, _ -> "Fizz"
    _, 0, _ -> "Buzz"
    _, _, arg -> arg
  end

  @doc """
  ➤ Exercise: Functions-3
  The operator rem(a, b) returns the remainder after dividing a by b . Write a
  function that takes a single integer ( n ) and calls the function in the previ-
  ous exercise, passing it rem(n,3) , rem(n,5) , and n . Call it seven times with
  the arguments 10, 11, 12, and so on. You should get “Buzz, 11, Fizz, 13,
  14, FizzBuzz, 16.”

  ## Examples

    iex> rem_fizzbuzz.(10)
    "Buzz"

    iex> rem_fizzbuzz.(11)
    11

    iex> rem_fizzbuzz.(12)
    "Fizz"
  """
  rem_fizzbuzz = fn
    n -> fizzbuzz.(rem(n, 3), rem(n, 5), n)
  end

  @doc """
  ➤ Exercise: Functions-4
  Write a function prefix that takes a string. It should return a new function
  that takes a second string. When that second function is called, it will
  return a string containing the first string, a space, and the second string.

  ## Examples

    iex> mrs = prefix.("Mrs")
    iex> mrs.("Smith")
    "Mrs Smith"

    iex> prefix.("Elixir").("Rocks")
    "Elixir Rocks"
  """
  prefix = fn prefix -> fn string -> "#{prefix} #{string}" end end

  @doc """
  ➤ Exercise: Functions-5
  Use the & notation to rewrite the following:
  – Enum.map [1,2,3,4], fn x -> x + 2 end
  – Enum.each [1,2,3,4], fn x -> IO.inspect x end
  """
  map = Enum.map([1, 2, 3, 4], &(&1 + 2))
  each = Enum.each([1, 2, 3, 4], &IO.inspect(&1))
end
