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
  def share_payments(shopping_list, buyers_emails) do
    total =
      shopping_list
        |> File.read()
        |> handle_file_read()
        |> sum_prices()

    buyers_emails
      |> File.read()
      |> handle_file_read()
      |> split_values(total)
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

  defp split_values(buyers, total) do
    total 
    |> div_and_mod(Enum.count(buyers))
    |> merge_values(buyers)
  end

  defp merge_values({quotient, reminder}, buyers) do
    splited_values = List.duplicate(quotient, Enum.count(buyers))

    buyers
    |> Enum.zip(List.insert_at(splited_values,0, (quotient + reminder)))
    |> Enum.into(%{})
  end

  defp div_and_mod(divident, divisor) do
    quotient = div(divident, divisor)
    reminder = rem(divident, divisor)

    {quotient, reminder}
  end

  defp handle_file_read({ok, list}) do
    json =
      list
      |> Poison.decode!()

    json
  end

  defp handle_file_read({:error, reason}), do: {:error, "Error reading the file: #{reason}"}
end
