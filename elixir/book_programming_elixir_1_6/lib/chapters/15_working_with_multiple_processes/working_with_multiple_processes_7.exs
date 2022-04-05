defmodule WorkingWithMultipleProcesses7 do
  @moduledoc """
  ➤ Exercise: WorkingWithMultipleProcesses-7
  Change the ^pid in pmap to _pid. This means the receive block will take responses in the order the processes send them.
  Now run the code again. Do you see any difference in the output?
  If you’re like me, you don’t, but the program clearly contains a bug.
  Are you scared by this? Can you find a way to reveal the problem (perhaps by passing in a different function, by sleeping, or by increasing the number of processes)?
  Change it back to ^pid and make sure the order is now correct.
  """
  def pmap(collection, fun) do
    me = self()

    collection
    |> Enum.map(fn elem ->
      spawn_link(fn -> send(me, {self(), fun.(elem)}) end)
    end)
    |> Enum.map(fn pid ->
      receive do
        {^pid, result} -> result
      end
    end)
  end

  def pmap_without(collection, fun) do
    me = self()

    collection
    |> Enum.map(fn elem ->
      spawn_link(fn -> send(me, {self(), fun.(elem)}) end)
    end)
    |> Enum.map(fn pid ->
      :timer.sleep(2000)

      receive do
        {_pid, result} -> result
      end
    end)
  end

  fn num ->
    milliseconds = :rand.uniform(2000)
    :timer.sleep(milliseconds)
    num + 1
  end
end

WorkingWithMultipleProcesses7.pmap(1..10, fn x -> x + 1 end)

WorkingWithMultipleProcesses7.pmap_without(1..10, fn num ->
  milliseconds = :rand.uniform(2000)
  :timer.sleep(milliseconds)
  num + 1
end)
