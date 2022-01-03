defmodule FreelancerRates do
  def daily_rate(hourly_rate) do
    hourly_rate * 8.0
  end

  def apply_discount(before_discount, discount) do
    before_discount - (before_discount * (discount/100))
  end

  def monthly_rate(hourly_rate, discount) do
      hourly_rate  
      |> daily_rate
      |> Kernel.*(22)
      |> apply_discount(discount)
      |> Kernel.ceil()
  end

  def days_in_budget(budget, hourly_rate, discount) do
    daily_rate = 
      hourly_rate
      |> monthly_rate(discount)
      |> Kernel./(22)

    budget
    |> Kernel./(daily_rate)
    |> Float.floor(1)
  end
end
