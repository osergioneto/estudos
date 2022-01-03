defmodule Darts do
  @type position :: {number, number}

  @doc """
  Calculate the score of a single dart hitting a target
  """
  @spec score(position :: position) :: integer
  def score({x, y}) do
    {x, y}
    |> radius()
    |> points()
  end

  defp radius({x, y}), do: :math.pow(x, 2) + :math.pow(y, 2) |> :math.sqrt()

  defp points(radius) when radius <= 1, do: 10
  defp points(radius) when radius <= 5, do: 5
  defp points(radius) when radius <= 10, do: 1
  defp points(_radius), do: 0
end
