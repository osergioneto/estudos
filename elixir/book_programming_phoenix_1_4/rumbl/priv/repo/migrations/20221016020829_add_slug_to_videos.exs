defmodule Rumbl.Repo.Migrations.AddSlugToVideos do
  use Ecto.Migration

  def change do
    alter table(:videos) do
      add :slug, :string
    end

    create unique_index(:videos, [:slug])
  end
end
