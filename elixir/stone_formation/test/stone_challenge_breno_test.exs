defmodule StoneChallengeBrenoTest do
  use ExUnit.Case, async: true
  use SplitHelpersTemplate
  doctest StoneChallengeBreno

  describe "split/2" do
    test "should return error when both arguments are empty lists" do
      assert StoneChallengeBreno.split([], []) == {:error, :empty_lists}
    end

    test "should return error when email list is empty", %{product_list: product_list} do
      assert StoneChallengeBreno.split(product_list, []) == {:error, :empty_emails_list}
    end

    test "should return error when shopping list is empty", %{email_list: email_list} do
      assert StoneChallengeBreno.split([], email_list) == {:error, :empty_shopping_list}
    end
  end
end
