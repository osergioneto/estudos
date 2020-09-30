defmodule AnagramTest do
  use ExUnit.Case
  doctest Anagram

  test "sort graphemes on string" do
    assert Anagram.sort_string("Sérgio") == ["g", "i", "o", "r", "s", "é"]
  end

  test "refute sort graphemes on string" do
    refute Anagram.sort_string("Verônica") == ["a", "c", "e", "i", "n"]
  end

  test "verify anagrams" do
    assert Anagram.anagrams?("Tom Marvolo Riddle", "I am Lord Voldemort")
  end

  test "refute verify anagrams" do
    refute Anagram.anagrams?("Sérgio", "Naruto")
  end
end
