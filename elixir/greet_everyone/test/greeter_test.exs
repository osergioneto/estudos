defmodule GreeterTest do
  use ExUnit.Case
  doctest Greeter

  test "greet a person" do
    assert Greeter.hello("Sérgio") == "Hello, Sérgio"
  end
end
