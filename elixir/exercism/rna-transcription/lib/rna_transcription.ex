defmodule RnaTranscription do
  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

  iex> RnaTranscription.to_rna('ACTG')
  'UGAC'
  """
  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    dna
    |> to_string()
    |> String.split("")
    |> Enum.map(fn nucleotide ->
      case nucleotide do
        "G" -> "C"
        "C" -> "G"
        "T" -> "A"
        "A" -> "U"
        "" -> ""
        _ -> raise "invalid nucleotide. Accepted values are: G, C, T and A"
      end
    end)
    |> Enum.join()
    |> to_charlist()
  end
end
