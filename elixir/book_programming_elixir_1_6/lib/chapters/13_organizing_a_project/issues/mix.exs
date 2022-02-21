defmodule Issues.MixProject do
  use Mix.Project

  def project do
    [
      app: :issues,
      escript: escript_config(),
      version: "0.0.1",
      name: "Issues",
      source_url:
        "https://github.com/osergioneto/estudos/tree/master/elixir/book_programming_elixir_1_6/lib/chapters/13_organizing_a_project/issues",
      elixir: "~> 1.12",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:httpoison, "~> 1.8"},
      {:poison, "~> 3.1"},
      {:ex_doc, "~> 0.27", only: :dev, runtime: false},
      {:earmark, "~> 1.4.18"}
    ]
  end

  defp escript_config() do
    [
      main_module: Issues.CLI
    ]
  end
end
