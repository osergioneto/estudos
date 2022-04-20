defmodule Ticker do
  defmodule Server do
    @moduledoc """
    ➤ Exercise: Nodes-3
    Alter the code so that successive ticks are sent to each registered client
    (so the first goes to the first client, the second to the next client, and so on).
    Once the last client receives a tick, the process starts back at the first.
    The solution should deal with new clients being added at any time.
    """

    # iex --sname two /Users/sn/Projects/Personal/estudos/elixir/book_programming_elixir_1_6/lib/chapters/16_nodes/nodes_3.ex
    # Node.connect :"server@Sergios-MBP"

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

          if current == nil do
            generator([pid | clients], 0)
          else
            generator([pid | clients], current)
          end
      after
        @interval ->
          IO.puts("tick")

          if current == nil do
            generator(clients, current)
          else
            client = Enum.at(clients, current)
            send(client, {:tick})

            current = current + 1

            if current >= length(clients) do
              generator(clients, 0)
            else
              generator(clients, current)
            end
          end
      end
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
