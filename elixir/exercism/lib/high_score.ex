defmodule HighScore do
  @initial_score 0

  @spec new :: map
  def new() do
    Map.new()
  end

  @spec add_player(map, String.t(), integer) :: map
  def add_player(scores, name, score \\ @initial_score) do
    Map.put(scores, name, score)
  end

  def remove_player(scores, name) do
    Map.delete(scores, name)
  end

  def reset_score(scores, name) do
    reseted_score = Map.replace(scores, name, @initial_score)

    case Map.get(reseted_score, name) do
      nil -> add_player(scores, name, 0)
      _ -> reseted_score
    end
  end

  def update_score(scores, name, score) do
    Map.update(scores, name, score, fn value -> value + score end)
  end

  def get_players(scores) do
    Map.keys(scores)
  end
end
