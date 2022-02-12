defmodule StringAndBinaries do
  @moduledoc """
    ➤ Exercise: StringsAndBinaries-1
      Write a function that returns true if a single-quoted string contains only printable ASCII characters (space through tilde).
  """
  def ascii_printable?(str) do
    str
    |> Enum.find(fn char -> char not in 33..126 end)
    |> case do
      nil -> true
      _ -> false
    end
  end

  @doc """
  ➤ Exercise: StringsAndBinaries-2
    Write an anagram?(word1, word2) that returns true if its parameters are anagrams.
  """
  def anagram?(word1, word2) do
    word1 = word1 |> String.to_charlist() |> Enum.sort()
    word2 = word2 |> String.to_charlist() |> Enum.sort()

    word1 == word2
  end

  @doc """
  ➤ Exercise: StringsAndBinaries-5
    Write a function that takes a list of double-quoted strings and prints each on a separate line,
    centered in a column that has the width of the longest string. Make sure it works with UTF characters.
    iex> center(["cat", "zebra", "elephant"])
        cat
       zebra
      elephant
  """
  def center(list) do
    sorted_list = Enum.sort_by(list, &String.length/1, :desc)
    count = sorted_list |> Enum.at(0) |> String.length()

    reduced =
      Enum.reduce(sorted_list, [], fn word, acc ->
        length_word = String.length(word)
        pad = (count - length_word) |> div(2)
        [String.pad_leading(word, length_word + pad) | acc]
      end)

    for word <- reduced, do: IO.puts(word)
  end

  @doc """
  ➤ Exercise: StringsAndBinaries-6
    Write a function to capitalize the sentences in a string. Each sentence is terminated by a period and a space.
    Right now, the case of the characters in the string is random.

    iex> capitalize_sentences("oh. a DOG. woof. ") "Oh. A dog. Woof. "
  """
  def capitalize_sentences(string) do
    string
    |> String.split(". ")
    |> Enum.map(&String.capitalize/1)
    |> Enum.join(". ")
  end

  @doc """
  ➤ Exercise: StringsAndBinaries-7
    Chapter 7 had an exercise about calculating sales tax on page 114.
    We now have the sales information in a file of comma-separated id, ship_to, and amount values. The file looks like this:
      id,ship_to,net_amount
      123,:NC,100.00
      124,:OK,35.50
      125,:TX,24.00
      126,:TX,44.80
      127,:NC,25.00
      128,:MA,10.00
      129,:CA,102.00
      120,:NC,50.00

    Write a function that reads and parses this file and then passes the result to the sales_tax function.
    Remember that the data should be formatted into a keyword list, and that the fields
    need to be the correct types (so the id field is an integer, and so on).
  """

  @doc """
  ➤ Exercise: ListsAndRecursion-8
    The Pragmatic Bookshelf has offices in Texas (TX) and North Carolina (NC), so we have to charge sales tax on orders shipped to these states.
    The rates can be expressed as a keyword list (I wish it were that simple....):
        tax_rates = [ NC: 0.075, TX: 0.08 ]

    Here’s a list of orders:
        orders = [
            [ id: 123, ship_to: :NC, net_amount: 100.00 ],
            [ id: 124, ship_to: :OK, net_amount:  35.50 ],
            [ id: 125, ship_to: :TX, net_amount:  24.00 ],
            [ id: 126, ship_to: :TX, net_amount:  44.80 ],
            [ id: 127, ship_to: :NC, net_amount:  25.00 ],
            [ id: 128, ship_to: :MA, net_amount:  10.00 ],
            [ id: 129, ship_to: :CA, net_amount: 102.00 ],
            [ id: 130, ship_to: :NC, net_amount:  50.00 ] ]

    Write a function that takes both lists and returns a copy of the orders, but with an extra field, total_amount,
    which is the net plus sales tax. If a shipment is not to NC or TX, there’s no tax applied.
  """
  def sales_tax(tax_rates, orders) do
    Enum.map(orders, &apply_tax/1)
  end

  defp apply_tax(order) do
    IO.inspect(calculate_tax(order), label: "calculate_tax(order)")
    IO.inspect(order, label: "order")

    Keyword.put_new(order, :total_amount, calculate_tax(order))
  end

  defp calculate_tax(id: _, ship_to: :NC, net_amount: net_amount),
    do: net_amount + net_amount * 0.075

  defp calculate_tax(id: _, ship_to: :TX, net_amount: net_amount),
    do: net_amount + net_amount * 0.08

  defp calculate_tax(order), do: order[:net_amount]
end
