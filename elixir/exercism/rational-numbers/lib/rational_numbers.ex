defmodule RationalNumbers do
  @type rational :: {integer, integer}

  @doc """
  Add two rational numbers
  """
  @spec add(a :: rational, b :: rational) :: rational
  def add({a1, b1}, {a2, b2}) do
    numerator = a1 * b2 + a2 * b1
    denominator = b1 * b2

    reduce({numerator, denominator})
  end

  @doc """
  Subtract two rational numbers
  """
  @spec subtract(a :: rational, b :: rational) :: rational
  def subtract({a1, b1}, {a2, b2}) do
    numerator = a1 * b2 - a2 * b1
    denominator = b1 * b2

    reduce({numerator, denominator})
  end

  @doc """
  Multiply two rational numbers
  """
  @spec multiply(a :: rational, b :: rational) :: rational
  def multiply({a1, b1}, {a2, b2}) do
    numerator = a1 * a2
    denominator = b1 * b2

    reduce({numerator, denominator})
  end

  @doc """
  Divide two rational numbers
  """
  @spec divide_by(num :: rational, den :: rational) :: rational
  def divide_by({a1, b1}, {a2, b2}) when a2 != 0 do
    numerator = a1 * b2
    denominator = a2 * b1

    reduce({numerator, denominator})
  end

  @doc """
  Absolute value of a rational number
  """
  @spec abs(a :: rational) :: rational
  def abs({a, b}), do: {Kernel.abs(a), Kernel.abs(b)}

  @doc """
  Exponentiation of a rational number by an integer
  """
  @spec pow_rational(a :: rational, n :: integer) :: rational
  def pow_rational({a, b}, n) do
    numerator = :math.pow(a, n) |> trunc()
    denominator = :math.pow(b, n) |> trunc()

    reduce({numerator, denominator})
  end

  @doc """
  Exponentiation of a real number by a rational number
  """
  @spec pow_real(x :: integer, n :: rational) :: float
  def pow_real(x, {a, b}) do
    pow = :math.pow(x, a)
    root(b, pow)
  end

  @doc """
  Reduce a rational number to its lowest terms
  """
  @spec reduce(a :: rational) :: rational
  def reduce({a, b}) do
    gcd = Integer.gcd(a, b)
    numerator = div(a, gcd)
    denominator = div(b, gcd)

    fix_signal({numerator, denominator})
  end

  def root(n, x, precision \\ 1.0e-5) do
    f = fn prev -> ((n - 1) * prev + x / :math.pow(prev, n - 1)) / n end
    fixed_point(f, x, precision, f.(x))
  end

  defp fixed_point(_, guess, tolerance, next) when Kernel.abs(guess - next) < tolerance, do: next
  defp fixed_point(f, _, tolerance, next), do: fixed_point(f, next, tolerance, f.(next))

  defp fix_signal({numerator, denominator}) when numerator > 0 and denominator < 0,
    do: {numerator * -1, denominator * -1}

  defp fix_signal({numerator, denominator}) when numerator < 0 and denominator < 0,
    do: {numerator * -1, denominator * -1}

  defp fix_signal({numerator, denominator}), do: {numerator, denominator}
end
