defmodule Ticker do
  defmodule Server do
    @moduledoc """
    ➤ Exercise: Nodes-3
    Alter the code so that successive ticks are sent to each registered client
    (so the first goes to the first client, the second to the next client, and so on).
    Once the last client receives a tick, the process starts back at the first.
    The solution should deal with new clients being added at any time.
    """

    # 2 seconds
    @interval 2000
    @name :ticker

    def start do
      pid = spawn(__MODULE__, :generator, [[], nil])
      :global.register_name(@name, pid)
    end

    def register(client_pid) do
      send(:global.whereis_name(@name), {:register, client_pid})
    end

    def generator(clients, current) do
      receive do
        {:register, pid} ->
          IO.puts("registering #{inspect(pid)}")

          register_current([pid | clients], current)
      after
        @interval ->
          IO.puts("tick")

          interval_current(clients, current)
      end
    end

    defp register_current(clients, nil), do: generator(clients, 0)
    defp register_current(clients, current), do: generator(clients, current)

    defp interval_current(clients, current) when is_nil(current), do: generator(clients, current)

    defp interval_current(clients, current) when current >= length(clients) do
      current = 0
      send_message_to_client(clients, current)
      generator(clients, current)
    end

    defp interval_current(clients, current) do
      send_message_to_client(clients, current)
      generator(clients, current + 1)
    end

    defp send_message_to_client(clients, current) do
      client = Enum.at(clients, current)
      send(client, {:tick})
    end
  end

  defmodule Client do
    def start do
      pid = spawn(__MODULE__, :receiver, [])
      Ticker.Server.register(pid)
    end

    def receiver do
      receive do
        {:tick} ->
          IO.puts("tock in client")
          receiver()
      end
    end
  end
end
