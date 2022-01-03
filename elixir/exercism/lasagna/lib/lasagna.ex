defmodule Lasagna do
  def expected_minutes_in_oven, do: 40

  def remaining_minutes_in_oven(minutes) when minutes > 0, do: expected_minutes_in_oven() - minutes

  def preparation_time_in_minutes(layers) when layers > 0, do: layers * 2

  def total_time_in_minutes(layers, minutes_in_oven), do: minutes_in_oven + preparation_time_in_minutes(layers)

  def alarm, do: "Ding!"
end
