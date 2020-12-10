defmodule CardsTest do
  use ExUnit.Case
  doctest Cards

  test "create_deck makes deck with 20 cards" do
    deck = Cards.create_deck()
    assert length(deck) == 20
  end

  test "shuffled deck should different from created deck" do
    create_deck = Cards.create_deck()
    assert create_deck != Cards.shuffle(create_deck)
  end
end
