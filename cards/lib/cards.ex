defmodule Cards do
  @moduledoc """
    Provider methods for creating and handling a deck of cards`.
  """

  @doc """
    Generate cards.

  ## Examples

      iex> Cards.create_deck
      iex> ["Ace", "Two", "Three"]

  """
  def create_deck do
    values = ["Ace", "Two", "Three", "Four", "Five"]
    suits = ["Spades", "Clubs", "Hearts", "Diamonds"]

    for value <- values, suit <- suits do
      "#{value} of #{suit}"
    end
  end

  @doc """
  Shuffle cards.

  ## Examples

      iex> deck = Cards.create_deck
      iex> Cards.shuffle(deck)
      iex> ["Three", "Ace", "Two"]

  """
  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  @doc """
    Determines whether a deck contains a given card

  ## Examples

      iex> deck = Cards.create_deck()
      iex> Cards.contains?(deck, "Ace of Spades")
      true

  """
  def contains?(deck, card) do
    Enum.member?(deck, card)
  end

  @doc """
    Divides a deck into a hand and the remainder of the deck. The `hand_size` argument
    indicates how many cards should be in the hand.

  ## Examples

      iex> deck = Cards.create_deck
      iex> { hand, deck } = Cards.deal(deck, 1)
      iex> hand
      ["Ace of Spades"]

  """
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

  def create_hand(hand_size) do
    Cards.create_deck |> Cards.shuffle |> Cards.deal(hand_size)
  end

  def hello do
    :world
  end
end
