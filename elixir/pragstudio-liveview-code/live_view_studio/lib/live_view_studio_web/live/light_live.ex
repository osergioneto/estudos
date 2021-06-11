defmodule LiveViewStudioWeb.LightLive do
  use LiveViewStudioWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    socket = assign(socket, :brightness, 60)
    {:ok, socket}
  end

  @impl true
  def render(assigns) do
    ~L"""
    <h1>Front Porch Light</h1>
    <div id="light">
      <div class="meter">
        <span style="width: <%= @brightness %>%">
          <%= @brightness %>%
        </span>
      </div>

      <button phx-click="off">
        <img src="images/light-off.svg">
      </button>

      <button phx-click="on">
      <img src="images/light-on.svg">
    </button>

      <button phx-click="up">
        <img src="images/up.svg">
      </button>

      <button phx-click="down">
        <img src="images/down.svg">
      </button>

      <button phx-click="random">
        Light Me Up!
      </button>
    </div>
    """
  end

  @impl true
  def handle_event("on", _, socket) do
    {:noreply, assign(socket, :brightness, 100)}
  end

  def handle_event("off", _, socket) do
    {:noreply, assign(socket, :brightness, 0)}
  end

  def handle_event("up", _, socket) do
    {:noreply, update(socket, :brightness, &min(&1 + 10, 100))}
  end

  def handle_event("down", _, socket) do
    {:noreply, update(socket, :brightness, &max(&1 - 10, 0))}
  end

  def handle_event("random", _, socket) do
    {:noreply, assign(socket, :brightness, :rand.uniform(101) - 1)}
  end
end
