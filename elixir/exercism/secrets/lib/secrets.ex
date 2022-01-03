defmodule Secrets do
  def secret_add(secret) do
    fn adder_value -> adder_value + secret end
  end

  def secret_subtract(secret) do
    fn subtract_value -> subtract_value - secret end
  end

  def secret_multiply(secret) do
    fn multiple_value -> multiple_value * secret end
  end

  def secret_divide(secret) do
    fn divide_value -> floor(divide_value / secret) end
  end

  def secret_and(secret) do
    fn and_value -> Bitwise.&&&(and_value, secret) end
  end

  def secret_xor(secret) do
    fn xor_value -> Bitwise.^^^(xor_value, secret) end
  end

  def secret_combine(secret_function1, secret_function2) do
    fn param -> 
        param 
        |> secret_function1.() 
        |> secret_function2.() 
    end
  end
end
