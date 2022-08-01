defimpl MyEnum, for: [List, Map, Range] do
  def each(enumerable, fun) do
    IO.inspect(enumerable)
  end

  def filter(enumerable, fun) do
    IO.inspect(enumerable)
  end

  def map(enumerable, fun) do
    reducer = fn x, acc -> {:cont, [fun.(x) | acc]} end
    Enumerable.reduce(enumerable, {:cont, [], reducer}) |> elem(1) |> :lists.reverse()
  end
end
