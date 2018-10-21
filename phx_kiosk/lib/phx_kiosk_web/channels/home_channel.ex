defmodule PhxKioskWeb.HomeChannel do
  require Logger

  alias PhxKiosk.Desk

  use PhxKioskWeb, :channel

  def join("home:lobby", payload, socket) do
    if authorized?(payload) do
      send(self(), :after_join)
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (home:lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  def handle_in("raise_desk", _payload, socket) do
    broadcast socket, "raise_desk", %{}
    Desk.raise_desk()
    {:noreply, socket}
  end

  def handle_in("lower_desk", _payload, socket) do

    broadcast socket, "lower_desk", %{}
    Desk.lower_desk()

    {:noreply, socket}
  end

  def handle_in("stop_desk", _payload, socket) do

    broadcast socket, "stop_desk", %{}
    Desk.stop_desk()

    {:noreply, socket}
  end

  def handle_in("turn_on_desk", _payload, socket) do

    broadcast socket, "power_on", %{}
    Desk.power_on()

    {:noreply, socket}
  end

  def handle_in("turn_off_desk", _payload, socket) do

    broadcast socket, "power_on", %{}
    Desk.power_off()

    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
