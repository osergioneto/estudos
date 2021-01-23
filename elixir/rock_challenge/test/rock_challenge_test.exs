defmodule RockChallengeTest do
  use ExUnit.Case
  doctest RockChallenge
  
  test "sum_prices" do
    list = RockChallenge.handle_file_read("files/shopping_list.test.json")

    assert RockChallenge.sum_prices(list) == 209350
  end

  test "sum_prices when list is empty" do
    list = RockChallenge.handle_file_read("files/empty_list.test.json")

    assert RockChallenge.sum_prices(list) == 0
  end

  test "split_values" do
    total = 
      RockChallenge.handle_file_read("files/shopping_list.test.json")
        |> RockChallenge.sum_prices()
    buyers = 
      RockChallenge.handle_file_read("files/buyers_list.test.json")

    assert RockChallenge.split_values(buyers, total) == %{"a@gmail.com" => 41870,"b@gmail.com" => 41870,"c@gmail.com" => 41870,"d@gmail.com" => 41870,"e@gmail.com" => 41870 }
  end

  test "merge_values" do
    buyers = RockChallenge.handle_file_read("files/buyers_list.test.json")

    assert RockChallenge.merge_values({120, 3}, buyers) == %{"a@gmail.com" => 123,"b@gmail.com" => 120,"c@gmail.com" => 120,"d@gmail.com" => 120,"e@gmail.com" => 120 }
  end

  test "div_and_mod" do
    assert RockChallenge.div_and_mod(100, 6) == {16, 4}
  end

  test "handle_file_read" do
    assert RockChallenge.handle_file_read("files/buyers_list.json") == ["sergio@gmail.com","veronica@gmail.com","gaia@gmail.com","diana@gmail.com"]
  end

  test "handle_file_read when file dont exists" do
    assert_raise File.Error, fn -> RockChallenge.handle_file_read("not_exists.json") end
  end
end
