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
end
