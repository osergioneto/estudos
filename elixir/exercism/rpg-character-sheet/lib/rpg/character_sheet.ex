defmodule RPG.CharacterSheet do
  @spec welcome() :: String.t()
  def welcome() do
    IO.puts("Welcome! Let's fill out your character sheet together.")
  end

  @spec ask_name() :: String.t()
  def ask_name() do
    "What is your character's name?\n"
    |> IO.gets()
    |> String.trim()
  end

  @spec ask_class() :: String.t()
  def ask_class() do
    "What is your character's class?\n"
    |> IO.gets()
    |> String.trim()
  end

  def ask_level() do
    "What is your character's level?\n"
    |> IO.gets()
    |> String.replace("\n", "")
    |> String.to_integer()
  end

  def run() do
    welcome()

    name = ask_name()
    class = ask_class()
    level = ask_level()
    character = %{class: class, level: level, name: name}

    IO.inspect(character, label: "Your character")
  end
end
