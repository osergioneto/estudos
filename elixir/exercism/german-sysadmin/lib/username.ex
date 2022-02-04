defmodule Username do
  def sanitize([]), do: []

  def sanitize(username) do
    username
    |> sanitize_recursive
    |> List.flatten()
  end

  defp sanitize_recursive([head | tail]) do
    case head do
      head when head > 96 and head < 123 -> [head | sanitize(tail)]
      head when head == 95 -> [head | sanitize(tail)]
      head when head == ?ä -> ['ae' | sanitize(tail)]
      head when head == ?ö -> ['oe' | sanitize(tail)]
      head when head == ?ü -> ['ue' | sanitize(tail)]
      head when head == ?ß -> ['ss' | sanitize(tail)]
      _ -> [sanitize(tail)]
    end
  end
end
