defmodule StringAndBinaries do
  @moduledoc """
    ➤ Exercise: StringsAndBinaries-1
      Write a function that returns true if a single-quoted string contains only printable ASCII characters (space through tilde).
  """
  def ascii_printable?(str) do
    str
    |> Enum.find(fn char -> char not in 33..126 end)
    |> case do
      nil -> true
      _ -> false
    end
  end

  @doc """
  ➤ Exercise: StringsAndBinaries-2
    Write an anagram?(word1, word2) that returns true if its parameters are anagrams.
  """
  def anagram?(word1, word2) do
    word1 = word1 |> String.to_charlist() |> Enum.sort()
    word2 = word2 |> String.to_charlist() |> Enum.sort()

    word1 == word2
  end

  @doc """
  ➤ Exercise: StringsAndBinaries-5
    Write a function that takes a list of double-quoted strings and prints each on a separate line,
    centered in a column that has the width of the longest string. Make sure it works with UTF characters.
    iex> center(["cat", "zebra", "elephant"])
        cat
       zebra
      elephant
  """
  def center(list) do
    sorted_list = Enum.sort_by(list, &String.length/1, :desc)
    count = sorted_list |> Enum.at(0) |> String.length()

    reduced =
      Enum.reduce(sorted_list, [], fn word, acc ->
        length_word = String.length(word)
        pad = (count - length_word) |> div(2)
        [String.pad_leading(word, length_word + pad) | acc]
      end)

    for word <- reduced, do: IO.puts(word)
  end
end
