defmodule NameBadge do
  @spec print(pos_integer() | nil, String.t(), nil) :: String.t()
  def print(id, name, nil) do
      if id == nil do
        "#{name} - OWNER"
      else
        "[#{id}] - #{name} - OWNER"
      end
  end

  @spec print(pos_integer(), String.t(), String.t()) :: String.t()
  def print(id, name, department) do
    if id == nil do
      "#{name} - #{String.upcase(department)}"
    else
      "[#{id}] - #{name} - #{String.upcase(department)}"
    end
  end
end
