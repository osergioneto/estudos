defmodule LiveViewStudioWeb.LicenseLive do
  use LiveViewStudioWeb, :live_view
  use Number
  use Timex

  alias Phoenix.LiveView.Socket
  alias LiveViewStudio.Licenses

  def mount(_params, _session, socket) do
    if connected?(socket), do: :timer.send_interval(1000, self(), :tick)
    expiration_time = Timex.shift(Timex.now(), minutes: 1)

    {:ok,
     assign(socket,
       seats: 2,
       amount: Licenses.calculate(2),
       expiration_time: expiration_time,
       time_remaining: time_remaining(expiration_time)
     )}
  end

  def render(assigns) do
    ~L"""
    <div id="license">
      <div class="card">
        <div class="content">
          <div class="seats">
            <img src="images/license.svg">
            <span>
              Your license is currently for
              <strong><%= @seats %></strong> <%= singularize(@seats) %>.
            </span>
          </div>
          <form phx-change="update">
            <input type="range" min="1" max="10"
                  name="seats" value="<%= @seats %>" />
          </form>
          <div class="amount">
            <%= number_to_currency(@amount) %>
          </div>
        </div>
      </div>

      <%= if @time_remaining > 0 do %>
        <div class="card mt-2">
          <div class="content">
            <div class="amount">
              <%= format_time(@time_remaining) %>
            </div>
          </div>
        </div>
      <% end %>
    </div>
    """
  end

  def handle_event("update", %{"seats" => seats}, socket) do
    seats = String.to_integer(seats)
    {:noreply, assign(socket, amount: Licenses.calculate(seats), seats: seats)}
  end

  def handle_info(:tick, %Socket{assigns: %{expiration_time: expiration_time}} = socket) do
    {:noreply, assign(socket, time_remaining: time_remaining(expiration_time))}
  end

  defp singularize(seats) do
    if seats == 1, do: "seat", else: "seats"
  end

  defp time_remaining(expiration_time) do
    DateTime.diff(expiration_time, Timex.now())
  end

  defp format_time(time) do
    time
    |> Timex.Duration.from_seconds()
    |> Timex.format_duration(:humanized)
  end
end
