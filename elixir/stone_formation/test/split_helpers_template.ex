defmodule SplitHelpersTemplate do
  use ExUnit.CaseTemplate

  setup do
    email_list = create_email_list()
    product_list = create_product_list()

    {:ok, email_list: email_list, product_list: product_list}
  end

  defp create_email_list() do
    Enum.reduce(1..5, [], fn val, acc -> ["email_#{val}@gmail.com"] ++ acc end)
  end

  defp create_product_list() do
    Enum.reduce(1..5, [], fn val, acc -> [%{name: "product_#{val}", amount: :rand.uniform(100000), quantity: :rand.uniform(10)}] ++ acc end)
  end
end
