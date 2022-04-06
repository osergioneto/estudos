defmodule SleepyProcess1 do
  @moduledoc """
  ➤ Exercise: WorkingWithMultipleProcesses-3
  Use spawn_link to start a process, and have that process send a message to the parent and then exit immediately.
  Meanwhile, sleep for 500 ms in the parent, then receive as many messages as are waiting. Trace what you receive.
  Does it matter that you weren’t waiting for the notification from the child when it exited?

  Resposta: Não importa que não o processo pai estava dormindo. Após o exit do processo filho, o processo pai é morto.
  """

  def run do
    spawn_link(SleepyProcess1, :child, [self()])

    :timer.sleep(500)

    loop_receive
  end

  def loop_receive() do
    receive do
      message ->
        IO.puts("Exit with message: #{message}")
        loop_receive
    after
      500 -> IO.puts("All messages received")
    end
  end

  def child(parent_pid) do
    send(parent_pid, "SleepProcess1")
    # exit(:a_casa_caiu)
  end
end
