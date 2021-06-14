defmodule LiveViewStudioWeb.LicenseLive do
  use LiveViewStudioWeb, :live_view
  use Number

  alias LiveViewStudio.Licenses

  def mount(_params, _session, socket) do
    {:ok, assign(socket, seats: 2, amount: 60)}
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
    </div>
    """
  end

  def handle_event("update", %{"seats" => seats}, socket) do
    seats = String.to_integer(seats)
    {:noreply, assign(socket, amount: Licenses.calculate(seats), seats: seats)}
  end

  defp singularize(seats) do
    if seats == 1, do: "seat", else: "seats"
  end
end
