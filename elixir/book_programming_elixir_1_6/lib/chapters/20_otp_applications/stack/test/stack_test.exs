defmodule StackTest do
  use ExUnit.Case
  doctest Stack

  alias Stack

  test "pop/1" do
    assert Stack.pop() == 4
    assert Stack.pop() == 5
    assert Stack.pop() == 6
  end

  test "push/1" do
    assert Stack.push(:a) == :ok
    assert Stack.pop() == :a
  end
end
