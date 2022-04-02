defmodule PingPong do
  def run do
    ping = spawn(PingPong, :ping, [])
    pong = spawn(PingPong, :pong, [])

    send(ping, {self(), :ping})
    send(pong, {self(), :pong})

    receive do
      {_sender, :pong} -> IO.inspect("Ping respondeu primeiro")
      {_sender, :ping} -> IO.inspect("Pong respondeu primeiro")
    end

    receive do
      {_sender, :pong} -> IO.inspect("Ping respondeu depois")
      {_sender, :ping} -> IO.inspect("Pong respondeu depois")
    end
  end

  def ping do
    receive do
      {sender_pid, :ping} -> send(sender_pid, {self(), :pong})
    end
  end

  def pong do
    receive do
      {sender_pid, :pong} -> send(sender_pid, {self(), :ping})
    end
  end
end
