defmodule SleepyProcess3 do
  @moduledoc """
  ➤ Exercise: WorkingWithMultipleProcesses-5
  Repeat the two, changing spawn_link to spawn_monitor.

  Resposta: No primeiro caso, onde o processo finaliza com exit(), temos um "graceful shutdown".
  O código dentro do processo é executado, o timer dentro do precesso filho é executado e por fim é exibido a mensagem capturada no receive.

  No segundo caso, o processo de saída do processo é intermitente. Algumas vezes o processo pai recebe mensagem enviada, algumas vezes recebe
  a mensagem enviada dentro do raise.
  """

  def parent_1() do
    spawn_monitor(SleepyProcess3, :create_child_process_1, [self()])
    :timer.sleep(5000)

    receive do
      message -> IO.inspect("Exit with message: #{message}")
    end
  end

  def create_child_process_1(parent_pid) do
    IO.inspect(parent_pid, label: "parent_pid")
    send(parent_pid, "SleepyProcess3")
    exit(:a_casa_caiu_3)
  end

  def parent_2() do
    spawn_monitor(SleepyProcess3, :create_child_process_2, [self()])
    :timer.sleep(5000)

    receive do
      message -> IO.inspect(message)
    end
  end

  def create_child_process_2(parent_pid) do
    IO.inspect(parent_pid, label: "parent_pid")
    send(parent_pid, "SleepyProcess3")
    raise("a_casa_caiu_4")
  end
end
