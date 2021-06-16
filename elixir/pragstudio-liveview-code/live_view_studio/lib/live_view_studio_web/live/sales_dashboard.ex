defmodule LiveViewStudioWeb.SalesDashboardLive do
  use LiveViewStudioWeb, :live_view

  alias LiveViewStudio.Sales

  @impl true
  def mount(_params, _session, socket) do
    if connected?(socket), do: :timer.send_interval(1000, self(), :refresh)

    socket = assign(socket, get_values)
    {:ok, socket}
  end

  @impl true
  def render(assigns) do
    ~L"""
      <h1>Sales Dashboard</h1>
      <div id="dashboard">
        <div class="stats">
          <div class="stat">
            <span class="value">
              <%= @new_orders %>
            </span>
            <span class="name">
              New Orders
            </span>
          </div>
          <div class="stat">
            <span class="value">
              $<%= @sales_amount %>
            </span>
            <span class="name">
              Sales Amount
            </span>
          </div>
          <div class="stat">
            <span class="value">
              <%= @satisfaction %>%
            </span>
            <span class="name">
              Satisfaction
            </span>
          </div>
      </div>
      <button phx-click="refresh"><img src="images/refresh.svg">Refresh</button>
    </div>
    """
  end

  defp get_values do
    [
      new_orders: Sales.new_orders(),
      sales_amount: Sales.sales_amount(),
      satisfaction: Sales.satisfaction()
    ]
  end

  @impl true
  def handle_event("refresh", _, socket) do
    {:noreply, assign(socket, get_values)}
  end

  def handle_info(:refresh, socket) do
    {:noreply, assign(socket, get_values)}
  end
end
