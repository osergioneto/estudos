defmodule RockChallenge.MixProject do
  use Mix.Project

  def project do
    [
      app: :rock_challenge,
      version: "0.1.0",
      elixir: "~> 1.11",
      start_permanent: Mix.env() == :prod,
      deps: deps(),

      # Docs
      name: "RockChallenge",
      source_url: "https://github.com/osergioneto/estudos/tree/master/elixir/rock_challenge",
      homepage_url: "https://github.com/osergioneto",
      docs: [
        main: "MyApp", # The main page in the docs
        extras: ["README.md"]
      ]
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
      {:ex_doc, "~> 0.23", only: :dev, runtime: false},
      {:poison, "~> 3.1"}
    ]
  end
end
