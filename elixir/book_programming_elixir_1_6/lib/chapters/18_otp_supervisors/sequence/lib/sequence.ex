defmodule Sequence do
  @moduledoc """
  API externa para comunicar com o servidor de sequence
  """

  @server Sequence.Impl

  def hello do
    :world
  end
end
