defmodule GuessingGame do
  def compare(secret_number, guess \\ :no_guess)
  def compare(secret_number, guess) when secret_number == guess, do: "Correct"
  def compare(secret_number, guess) when abs(secret_number - guess) == 1, do: "So close"
  def compare(secret_number, guess) when secret_number - guess < -1, do: "Too high"
  def compare(secret_number, guess) when secret_number - guess > 1, do: "Too low"
  def compare(_, _), do: "Make a guess"
end
