defmodule Anagram do
  @moduledoc """
  Documentation for `Anagram`.
  """

  @doc """
  Verify if two strings are anagram

  ## Examples

      iex> Anagram.anagrams?("Sérgio", "gioSér")
      true

      iex> Anagram.anagrams?("Sérgio", "Verônica")
      false

  """
  def anagrams?(word1, word2) when is_binary(word1) and is_binary(word2) do
    sort_string(word1) === sort_string(word2)
  end

  @doc """
  Downcase string and sort its graphemes

  ## Examples

      iex> Anagram.sort_string("Sérgio")
      ["g", "i", "o", "r", "s", "é"]

  """
  def sort_string(word) do
    word
    |> String.downcase()
    |> String.graphemes()
    |> Enum.sort()
    |> Enum.filter(fn x -> x != " " end)
  end
end
