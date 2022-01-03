defmodule HighSchoolSweetheart do
  def first_letter(name) do
    name
    |> String.trim()
    |> String.first()
  end

  def initial(name) do
    name
    |> first_letter()
    |> String.upcase()
    |> Kernel.<>(".")
  end

  def initials(full_name) do
    full_name
    |> String.split(" ")
    |> Enum.reduce(fn initial, acc -> initial(acc) <> " " <> initial(initial) end)
  end

  def pair(full_name1, full_name2) do
    initial_1 = initials(full_name1)
    initial_2 = initials(full_name2)

    generate_heart(initial_1, initial_2)
  end

  defp generate_heart(i1, i2) do
    """
         ******       ******
       **      **   **      **
     **         ** **         **
    **            *            **
    **                         **
    **     #{i1}  +  #{i2}     **
     **                       **
       **                   **
         **               **
           **           **
             **       **
               **   **
                 ***
                  *
    """
  end
end
