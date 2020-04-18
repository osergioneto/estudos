defmodule Cards do
  @moduledoc """
  Documentation for `Cards`.
  """

  @doc """
  Hello world.

  ## Examples

      iex> Cards.create_deck()
      ["Ace", "Two", "Three"]

  """
  def create_deck do
    values = ["Ace", "Two", "Three", "Four", "Five"]
    suits = ["Spades", "Clubs", "Hearts", "Diamonds"]

    for value <- values, suit <- suits do
      "#{value} of #{suit}"
    end
  end

  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  def contains(deck, card) do 
    Enum.member?(deck, card) 
  end

  def deal(deck, hand_size) do
    Enum.split(deck, hand_size)
  end

  def save(deck, filename) do
    binary = :erlang.term_to_binary(deck)
    File.write(filename, binary);
  end

  def load(filename) do
    case File.read(filename) do
      {:ok, binary} -> :erlang.binary_to_term(binary)
      {:error, _reason } -> "Esse arquivo não existe"
    end
  end
    case status do
      :ok -> :erlang.binary_to_term(binary)
      :error -> "Esse arquivo não existe"
    end
  end

  # def deal(deck, hand_size) do
  #   "My hand is #{Enum.join(elem(Enum.split(deck, hand_size), 0), ", ")}"
  # end
end
