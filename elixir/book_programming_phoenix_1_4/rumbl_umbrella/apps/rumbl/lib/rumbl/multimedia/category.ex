defmodule Rumbl.Multimedia.Category do
  use Ecto.Schema
  import Ecto.{Changeset, Query}

  schema "categories" do
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(category, attrs) do
    category
    |> cast(attrs, [:name])
    |> validate_required([:name])
    |> foreign_key_constraint(:videos, name: :videos_category_id_fkey, message: "still exist")
  end

  def alphabetical(query \\ __MODULE__) do
    from c in query, order_by: c.name
  end
end
