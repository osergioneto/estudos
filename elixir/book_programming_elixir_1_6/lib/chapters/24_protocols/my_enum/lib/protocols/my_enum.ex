defprotocol MyEnum do
  @fallback_to_any
  def each(enumerable, fun)
  def filter(enumerable, fun)
  def map(enumerable, fun)
end

defimpl MyEnum, for: [List, Map, Range] do
  def each(enumerable, fun) do
    reducer = fn x, acc -> {:cont, fun.(x)} end
    Enumerable.reduce(enumerable, {:cont, []}, reducer)
    :ok
  end

  def filter(enumerable, fun) do
    reducer = fn x, acc ->
      case fun.(x) do
        true -> {:cont, [x | acc]}
        false -> {:cont, acc}
      end
    end

    Enumerable.reduce(enumerable, {:cont, []}, reducer) |> elem(1) |> :lists.reverse()
  end

  def map(enumerable, fun) do
    reducer = fn x, acc -> {:cont, [fun.(x) | acc]} end
    Enumerable.reduce(enumerable, {:cont, []}, reducer) |> elem(1) |> :lists.reverse()
  end
end
