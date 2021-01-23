defmodule RockChallenge do
  @moduledoc """
  Documentation for `RockChallenge`.
  """

  @doc """
  Consume two json files, compute and return splited bills.

  ## Examples

      iex> RockChallenge.split_payments("files/shopping_list.json", "files/buyers_list.json")
      %{
        "diana@gmail.com" => 5087,
        "gaia@gmail.com" => 5087,
        "sergio@gmail.com" => 5089,
        "veronica@gmail.com" => 5087
      }

  """
  def split_payments(shopping_list, buyers_emails) do
    total =
      shopping_list
        |> handle_file_read()
        |> sum_prices()

    splited_values = 
      buyers_emails
        |> handle_file_read()
        |> split_values(total)

    splited_values
  end

  @doc """
  Multiply each product by its quantity and add up the total.

  ## Examples

      iex> items = RockChallenge.handle_file_read("file.json")
      iex> RockChallenge.sum_prices(items)
      iex> 12048

  """
  def sum_prices(items) do
    { sums, total } = 
      items
        |> Enum.map_reduce(0, 
          fn item,
            acc -> {item["amount"] * item["price"], 
            item["amount"] * item["price"] + acc} 
          end)

    total
  end

  def split_values(buyers, total) do
    total 
    |> div_and_mod(Enum.count(buyers))
    |> merge_values(buyers)
  end

  def merge_values({quotient, reminder}, buyers) do
    splited_values = List.duplicate(quotient, Enum.count(buyers))

    buyers
    |> Enum.zip(List.insert_at(splited_values,0, (quotient + reminder)))
    |> Enum.into(%{})
  end

  def div_and_mod(divident, divisor) do
    quotient = div(divident, divisor)
    reminder = rem(divident, divisor)

    {quotient, reminder}
  end

  def handle_file_read(file_name) do
    json =
      file_name
      |> File.read!()
      |> Poison.decode!()

    json
  end
end
