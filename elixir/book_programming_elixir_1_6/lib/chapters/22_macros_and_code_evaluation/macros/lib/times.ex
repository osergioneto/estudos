defmodule Times do
  defmacro times_n(number) do
    function_name = String.to_atom("times_#{number}")

    quote do
      def unquote(function_name)(argument) do
        unquote(number) * argument
      end
    end
  end
end

defmodule Test2 do
  require Times
  Times.times_n(3)
  Times.times_n(4)
  Times.times_n(10)
end
