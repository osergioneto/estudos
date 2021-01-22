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
  def share_payments(shopping_list) do
    shopping_items =
      shopping_list
        |> File.read()
        |> handle_file_read()
        |> sum_prices()
        |> IO.inspect()
    
    # buyers_emails
    #  |> handle_file_read(buyers_list)
    :hello
  end

  defp sum_prices(items) do
    { sums, total } = 
    items
        |> Enum.map_reduce(0, 
          fn item,
            acc -> {item["amount"] * item["price"], 
            item["amount"] * item["price"] + acc} 
          end)

    total
  end
  end

  defp handle_file_read({ok, array}) do
    result =
      array
      |> Poison.decode!()

    {:ok, result}
  end

  defp handle_file_read({:error, reason}), do: {:error, "Error reading the file: #{reason}"}
end
