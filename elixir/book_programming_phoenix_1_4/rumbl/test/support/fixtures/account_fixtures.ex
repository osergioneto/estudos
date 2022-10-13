defmodule Rumbl.AccountFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Rumbl.Account` context.
  """

  @doc """
  Generate a user.
  """
  def user_fixture(attrs \\ %{}) do
    {:ok, user} =
      attrs
      |> Enum.into(%{
        name: "Some User",
        username: "user#{System.unique_integer([:positive])}",
        password: attrs[:password] || "supersecret"
      })
      |> Rumbl.Accounts.register_user()

    user
  end
end
