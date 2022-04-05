defmodule SleepyProcess2 do
  @moduledoc """
  ➤ Exercise: WorkingWithMultipleProcesses-4
  Do the same as the previous, but have the child raise an exception. What difference do you see in the tracing?

  Resposta: O comportamento é parecido. Nos dois o processo pai morre apos o processo filho morrer, a diferença é no retorno mostrado.
  Em Sleepy2, o processo pai recebe um RuntimeError.
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
    send(parent_pid, "SleepProcess2")
    raise(":a_casa_caiu")
  end
end
