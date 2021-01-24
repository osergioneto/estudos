defmodule RockChallengeTest do
  use ExUnit.Case
  doctest RockChallenge
  
  test "sum_prices" do
    list = RockChallenge.handle_file_read("files/shopping_list.test.json")

    assert RockChallenge.sum_prices(list) == 209752
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

    assert RockChallenge.split_values(buyers, total) == {[41951, 41951, 41950, 41950, 41950], ["a@gmail.com", "b@gmail.com", "c@gmail.com", "d@gmail.com", "e@gmail.com"]}
  end

  test "merge_values" do
    buyers = RockChallenge.handle_file_read("files/buyers_list.test.json")

    assert RockChallenge.merge_values({[41951, 41951, 41950, 41950, 41950], buyers}) == %{"a@gmail.com" => 41951, "b@gmail.com" => 41951, "c@gmail.com" => 41950, "d@gmail.com" => 41950, "e@gmail.com" => 41950}
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
