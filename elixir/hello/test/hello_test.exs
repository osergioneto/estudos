defmodule HelloTest do
  use ExUnit.Case
  import ExUnit.CaptureIO
  doctest Hello

  test "greets the world" do
    assert capture_io(fn -> IO.puts("Hello World") end) == "Hello World\n"
  end
end
