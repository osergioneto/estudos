defmodule CatSolver do
  @moduledoc """
  ➤ Exercise: WorkingWithMultipleProcesses-9
  Take this scheduler code and update it to let you run a function that finds the number of times the word “cat” appears in each file in a given directory.
  Run one server process per file. The function File.ls! returns the names of files in a directory, and File.read! reads the contents of a file as a binary.
  Can you write it as a more generalized scheduler?

  Run your code on a directory with a reasonable number of files (maybe around 100) so you can experiment with the effects of concurrency.

  """
  def count_cat(scheduler) do
    send(scheduler, {:ready, self()})

    receive do
      {:count, file_path, client} ->
        send(client, {:answer, file_path, count_cat_calc(file_path), self()})
        count_cat(scheduler)

      {:shutdown} ->
        exit(:normal)
    end
  end

  defp count_cat_calc(file_path) do
    "./files_with_cat/#{file_path}"
    |> File.read!()
    |> String.split("\n")
    |> length()
  end
end

defmodule Scheduler do
  def run(num_processes, module, func, to_calculate) do
    1..num_processes
    |> Enum.map(fn _ -> spawn(module, func, [self()]) end)
    |> schedule_processes(to_calculate, [])
  end

  defp schedule_processes(processes, queue, results) do
    receive do
      {:ready, pid} when length(queue) > 0 ->
        [next | tail] = queue
        send(pid, {:count, next, self()})
        schedule_processes(processes, tail, results)

      {:ready, pid} ->
        send(pid, {:shutdown})

        if length(processes) > 1 do
          schedule_processes(List.delete(processes, pid), queue, results)
        else
          # IO.inspect(results)
          Enum.reduce(results, 0, fn {_file, count}, acc -> count + acc end)
        end

      {:answer, number, result, _pid} ->
        schedule_processes(processes, queue, [{number, result} | results])
    end
  end
end

defmodule CatFiles do
  def create_files(n) when n > 0 do
    Enum.each(1..n, fn file_number ->
      File.write!("./files_with_cat/file_#{file_number}.txt", append_cat())
    end)
  end

  defp append_cat() do
    String.duplicate("cat\n", :rand.uniform(10_000))
  end
end

to_process = File.ls!("./files_with_cat")

Enum.each(1..10, fn num_processes ->
  {time, result} =
    :timer.tc(
      Scheduler,
      :run,
      [num_processes, CatSolver, :count_cat, to_process]
    )

  if num_processes == 1 do
    IO.inspect(inspect(result), label: "gatos contados:")
    IO.puts("\n # time (s)")
  end

  :io.format("~2B ~.2f~n", [num_processes, time / 1_000_000.0])
end)
