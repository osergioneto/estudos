defmodule SleepyProcess1 do
  @moduledoc """
  ➤ Exercise: WorkingWithMultipleProcesses-3
  Use spawn_link to start a process, and have that process send a message to the parent and then exit immediately.
  Meanwhile, sleep for 500 ms in the parent, then receive as many messages as are waiting. Trace what you receive.
  Does it matter that you weren’t waiting for the notification from the child when it exited?

  Resposta: Não importa que não o processo pai estava dormindo. Após o exit do processo filho, o processo pai é morto.
  """

  def parent() do
    spawn_link(SleepyProcess1, :create_child_process, [self()])
    :timer.sleep(5000)

    receive do
      message -> IO.inspect("Exit with message: #{message}")
    end
  end

  def create_child_process(parent_pid) do
    IO.inspect(parent_pid, label: "parent_pid")
    send(parent_pid, "SleepProcess1")
    exit(:a_casa_caiu)
  end
end
