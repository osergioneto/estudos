defmodule Rumbl.MultimediaFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Rumbl.Multimedia` context.
  """

  @doc """
  Generate a video.
  """
  def video_fixture(attrs \\ %{}) do
    {:ok, video} =
      attrs
      |> Enum.into(%{
        url: "http://example.com",
        description: "a description",
        title: "A Title"
      })
      |> Rumbl.Multimedia.create_video()

    video
  end
end
