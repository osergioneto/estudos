defmodule WordCount do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t()) :: map
  def count(sentence) do
    sentence
    |> String.downcase()
    |> clean_input()
    |> Enum.frequencies()
  end

  defp clean_input(sentence) do
    sentence
    # Remove special characters
    |> String.replace(~r{(!|!|&|@|\$|%|\^|&|,|:)}, "")
    # Turn consecutive whitespaces into one
    |> String.replace(~r{\s+}, " ")
    |> String.split(~r{( |_)})
  end
end
