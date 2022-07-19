defmodule Tracer do
  @moduledoc """
  Documentation for `Tracer`.

  ➤ Exercise: LinkingModules-BehavioursAndUse-1
  In the body of the def macro, there’s a quote block that defines the actual method. It contains

  IO.puts "==> call: \#{Tracer.dump_dfn(unquote(name), unquote(args))}" "result = unquote(content)"
  IO.puts "<== result: \#{result}"

  Why does the first call to puts have to unquote the values in its interpolation but the second call does not?
  A: O primeiro block recebe valores que quando recebidos dentro da função irão expandir para visão de tupla de três valores, o unquote serve
  para mostrar o valor "evaluated". Já o segundo o block recebe o resultado da operação, que na maioria das vezes será representado que é representado
  por ele mesmo.

  ➤ Exercise: LinkingModules-BehavioursAndUse-2
  The built-in module IO.ANSI defines functions that represent ANSI escape sequences.
  You can use it to build output than will display (for example) colors and bold,
  inverse, or underlined text (assuming the terminal supports it).

  iex> import IO.ANSI
  iex> IO.puts [ "Hello, ", white(), green_background(), "world!"]
  Hello, world!

  Explore the module, and use it to colorize our tracing’s output.

  Why does passing a list of strings to IO.puts work?
  A: Na definição de tipos da função IO.puts, o segundo argumento, pode ser de dois tipos: chardata() | String.Chars.t(). O tipo
  chardata() comporta um tipo chamado maybe_improper_list(), dando a inforção que o o argumento pode ser uma lista impropria.
  """

  def dump_args(args) do
    args |> Enum.map(&inspect/1) |> Enum.join(", ")
  end

  def dump_defn(name, args) do
    "#{name}(#{dump_args(args)})"
  end

  defmacro def({:when, _, [{name, _, args} = definition, _]}, do: content) do
    quote do
      Kernel.def unquote(definition) do
        IO.puts("#{IO.ANSI.blue()}==> call:   #{Tracer.dump_defn(unquote(name), unquote(args))}")
        result = unquote(content)
        IO.puts("#{IO.ANSI.green()}<== result: #{result}")
      end
    end
  end

  defmacro def(definition = {name, _, args}, do: content) do
    quote do
      Kernel.def unquote(definition) do
        IO.puts("==> call: #{Tracer.dump_defn(unquote(name), unquote(args))}")
        result = unquote(content)
        IO.puts("<== result: #{result}")
        result
      end
    end
  end

  defmacro __using__(_opts) do
    quote do
      import Kernel, except: [def: 2]
      import unquote(__MODULE__), only: [def: 2]
    end
  end
end

defmodule Test do
  use Tracer
  def puts_sum_three(a, b, c), do: IO.inspect(a + b + c)
  def puts_minus_two(a, b) when a > 0 and b == 0, do: IO.inspect(a - b)
  def add_list(list), do: Enum.reduce(list, 0, &(&1 + &2))
end
