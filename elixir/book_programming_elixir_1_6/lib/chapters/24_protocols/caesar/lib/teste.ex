defmodule Teste do
  @alphabet [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]

  def encrypt(string, shift) do
    string
    |> String.split("")
    |> Enum.filter(fn letter -> letter != "" end)
    |> Enum.reduce("", fn letter, acc -> shift_letter(letter, shift, acc) end)
  end

  def rot13(string) do
    encrypt(string, 13)
  end

  def shift_letter(letter, shift, acc) when letter not in [" "] do
    shifted_letter =
      letter
      |> get_index_from_letter()
      |> get_shift_number(shift)
      |> get_letter_from_index()

    acc <> shifted_letter
  end

  def shift_letter(letter, _, acc) do
    acc <> letter
  end

  def get_shift_number(number, shift) when number + shift <= 25 do
    number + shift
  end

  def get_shift_number(number, shift) when number + shift > 25 do
    get_shift_number(number - 26, shift)
  end

  def get_index_from_letter(letter) do
    Enum.find_index(@alphabet, fn alphabet_letter -> alphabet_letter == letter end)
  end

  def get_letter_from_index(index) do
    Enum.at(@alphabet, index)
  end
end
