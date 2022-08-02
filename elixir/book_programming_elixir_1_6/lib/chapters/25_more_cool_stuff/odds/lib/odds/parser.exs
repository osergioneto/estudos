defmodule ParserSigil do
  def sigil_v(text, _opts) do
    text
    |> String.split("\n")
    |> Enum.filter(&Kernel.!=(&1, ""))
    |> Enum.map(&String.split(&1, ","))
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
    1,2,3
    cat,dog
    """
  end
end

IO.inspect(Example2.teste())
