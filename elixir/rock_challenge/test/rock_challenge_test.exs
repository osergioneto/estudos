defmodule RockChallengeTest do
  use ExUnit.Case
  doctest RockChallenge

  test "greets the world" do
    assert RockChallenge.hello() == :world
  end
end
