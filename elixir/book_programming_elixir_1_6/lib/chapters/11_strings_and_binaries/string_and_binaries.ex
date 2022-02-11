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
end
