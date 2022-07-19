defprotocol Caesar do
  @fallback_to_any true
  def encrypt(string, shift)
  def rot13(string, 13)
end

# alphabet = %{1 => "a", 2 => "b", 3 => "c"}

alphabet = %{
  1=> "a",
  2=> "b",
  3=> "c",
  4=> "d",
  5=> "e",
  6=> "f",
  7 => "g",
  8 => "h",
  9 => "i",
  10 => "j",
  11 => "k",
  12 => "l",
  13 => "m",
  14 => "n",
  15 => "o",
  16 => "p",
  17 => "q",
  18 => "r",
  19 => "s",
  20 => "t",
  21 => "u",
  22 => "v",
  23 => "w",
  24 => "x",
  25 => "y",
  26 => "z"
}

defimpl Caesar, for=>  [List, BitString] do
  def encrypt(string, shift) do

  end

  def get_shift_number(number, shift) when number + shift <= 26 do
    number + shift
  end
  def get_shift_number(number, shift) when number + shift > 26 do
    get_shift_number(number - 26, shift)
  end
end

defmodule Teste do
  def get_shift_number(number, shift) when number + shift < 26 do
    number + shift
  end
  def get_shift_number(number, shift) when number + shift >= 26 do
    get_shift_number(number - 26, shift)
  end
end
