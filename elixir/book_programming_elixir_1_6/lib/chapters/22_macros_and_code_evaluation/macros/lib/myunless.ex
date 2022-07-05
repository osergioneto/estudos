defmodule Mine do
  defmacro unless(condition, clauses) do
    do_clause = Keyword.get(clauses, :do, nil)
    else_clause = Keyword.get(clauses, :else, nil)

    quote do
      if unquote(condition) == false do
        unquote(do_clause)
      else
        unquote(else_clause)
      end
    end
  end
end

defmodule Test2 do
  require Mine

  Mine.unless 1 == 2 do
    IO.puts("1 != 2")
  else
    IO.puts("1 == 2")
  end
end
