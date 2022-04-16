defmodule Nodes1 do
  @doc """
  ➤ Exercise: Nodes-1
  Set up two terminal windows, and go to a different directory in each. Then start up a named node in each.
  In one window, write a function that lists the contents of the current directory.

  fun = fn -> IO.puts(Enum.join(File.ls!, ",")) end

  Run it twice, once on each node.

  Resp:
  iex> iex --sname node_one
  iex> iex --sname node_two

  On node_one window
  iex> Node.spawn(:node_two, fun)

  On node_two window
  iex> Node.spawn(:node_one, fun)
  """

  fun = fn -> IO.puts(Enum.join(File.ls!(), ",")) end
end
