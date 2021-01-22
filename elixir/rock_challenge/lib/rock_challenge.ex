defmodule RockChallenge do
  @moduledoc """
  Documentation for `RockChallenge`.
  """

  @doc """
  Hello world.

  ## Examples

      iex> RockChallenge.hello()
      :world

  """
  def hello do
    :world
  end

  def sum_prices(file_name) do
    file_name
    |> File.read()
    |> handle_file_read()
  end

  defp handle_file_read({ok, array}) do
    result =
      array
      |> Poison.decode!()

    {:ok, result}
  end

  defp handle_file_read({:error, reason}), do: {:error, "Error reading the file: #{reason}"}
end
