defmodule Rumbl.MultimediaFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Rumbl.Multimedia` context.
  """

  alias Rumbl.Accounts.User

  @doc """
  Generate a video.
  """
  def video_fixture(%User{} = user, attrs \\ %{}) do
    attrs =
      Enum.into(attrs, %{
        url: "http://example.com",
        description: "a description",
        title: "A Title"
      })

    {:ok, video} = Rumbl.Multimedia.create_video(user, attrs)

    video
  end
end
