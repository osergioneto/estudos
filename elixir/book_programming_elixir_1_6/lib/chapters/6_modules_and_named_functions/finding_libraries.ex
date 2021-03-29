defmodule FindindLibraries do
  @moduledoc """
  ➤ Exercise: ModulesAndFunctions-7
  Find the library functions to do the following, and then use each in IEx.
  (If the word Elixir or Erlang appears at the end of the challenge, then you’ll
  find the answer in that set of libraries.)
  – Convert a float to a string with two decimal digits. (Erlang)
  – Get the value of an operating-system environment variable. (Elixir)
  – Return the extension component of a file name (so return .exs if given
  "dave/test.exs" ). (Elixir)
  – Return the process’s current working directory. (Elixir)
  – Convert a string containing JSON into Elixir data structures. (Just
  find; don’t install.)
  – Execute a command in your operating system’s shell.
  """

  @doc """
  – Convert a float to a string with two decimal digits. (Erlang)
  """
  def float_to_string_with_two_decimal(float) when is_float(float) do
    :erlang.float_to_binary(float, decimals: 2)
  end

  @doc """
  – Get the value of an operating-system environment variable. (Elixir)
  """
  def get_ENV(var) do
    case System.fetch_env(var) do
      {:ok, value} -> {:ok, value}
      :error -> {:error, :env_not_found}
    end
  end

  @doc """
  – Return the extension component of a file name (so return .exs if given
  "dave/test.exs" ). (Elixir)
  """
  def file_extension(filename) when is_binary(filename) do
    Path.extname(filename)
  end

  @doc """
  – Execute a command in your operating system’s shell.
  """
  def exec(command, args), do: System.cmd(command, args)
end
