defmodule ParserSigil do
  def sigil_v(text, _opts) do
    text
    |> String.split("\n")
    |> Enum.filter(&Kernel.!=(&1, ""))
    |> Enum.map(&String.split(&1, ","))
    |> Enum.map(fn row ->
      Enum.map(row, fn word -> parse_float(word) end)
    end)
  end

  defp parse_float(word) do
    case Float.parse(word) do
      {number, ""} -> "#{number}"
      {number, word} -> ["#{number}", "#{word}"]
      :error -> word
    end
  end

  defmacro __using__(_opts) do
    quote do
      import Kernel, except: [sigil_vc: 2]
      import unquote(__MODULE__), only: [sigil_v: 2]
    end
  end
end

defmodule Example2 do
  use ParserSigil

  def teste do
    ~v"""
    1,2,3.14
    cat,dog
    """
  end

  def teste2 do
    ~v"""
    1,2,3.14abc
    cat,dog
    """
  end
end

IO.inspect(Example2.teste())
IO.inspect(Example2.teste2())
