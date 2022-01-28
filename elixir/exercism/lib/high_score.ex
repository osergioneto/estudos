defmodule HighScore do
  @spec new :: map
  def new() do
    Map.new()
  end

  @spec add_player(map, String.t(), integer) :: map
  def add_player(scores, name, score \\ 0) do
    Map.put(scores, name, score)
  end

  def remove_player(scores, name) do
    Map.delete(scores, name)
  end

  def reset_score(scores, name) do
    reseted_score = Map.replace(scores, name, 0)

    case Map.get(reseted_score, name) do
      nil -> add_player(scores, name, 0)
      _ -> reseted_score
    end
  end

  def update_score(scores, name, score) do
    scores
    |> Map.get(name)
    |> case do
      nil -> add_player(scores, name, score)
      player_score -> Map.replace(scores, name, player_score + score)
    end
  end

  def get_players(scores) do
    Map.keys(scores)
  end
end
