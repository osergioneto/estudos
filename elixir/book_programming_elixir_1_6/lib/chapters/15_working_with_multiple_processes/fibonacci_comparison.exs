defmodule FibSolver do
  def run(n) do
    {time, result} = :timer.tc(FibSolver, :do_fib, [n])

    IO.inspect(time / 1_000_000.0, label: "time")
    IO.inspect(result, label: "result")
  end

  def do_fib(n), do: fib_calc(n)

  # very inefficient, deliberately
  defp fib_calc(0), do: 0
  defp fib_calc(1), do: 1
  defp fib_calc(n), do: fib_calc(n - 1) + fib_calc(n - 2)
end

defmodule FibAgent do
  def start_link do
    Agent.start_link(fn -> %{0 => 0, 1 => 1} end)
  end

  def fib(pid, n) when n >= 0 do
    Agent.get_and_update(pid, &do_fib(&1, n))
  end

  defp do_fib(cache, n) do
    case cache[n] do
      nil ->
        {n_1, cache} = do_fib(cache, n - 1)
        result = n_1 + cache[n - 2]
        IO.inspect(result, label: "result do_fib(#{n})")
        {result, Map.put(cache, n, result)}

      cached_value ->
        {cached_value, cache}
    end
  end
end
