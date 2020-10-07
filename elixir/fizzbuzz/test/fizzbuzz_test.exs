defmodule FizzbuzzTest do
  use ExUnit.Case
  doctest Fizzbuzz

  test "evaluate fizzbuzz" do
    assert Fizzbuzz.build("sample.txt") == {:ok, [1, 2, "Fizz", 4, "Buzz", "FizzBuzz"]}
  end

  test "check fizzbuzz when file doesn't exist" do
    refute Fizzbuzz.build("invalid") == {:error, :enoent}
  end
end
