defmodule PhxKiosk.Desk do
  use GenServer
  alias ElixirALE.GPIO

  @pin_up 18
  @pin_down 16
  @power_pin 12


  #  Public API {{{ #
  def start_link(options) do
    GenServer.start_link(__MODULE__, options, name: __MODULE__)
  end

  def raise_desk() do
    GenServer.cast(__MODULE__, :raise_desk)
  end

  def lower_desk() do
    GenServer.cast(__MODULE__, :lower_desk)
  end

  def stop_desk() do
    GenServer.cast(__MODULE__, :stop)
  end

  def turn_on_desk() do
    GenServer.cast(__MODULE__, :power_on)
  end

  def turn_off_desk() do
    GenServer.cast(__MODULE__, :power_off)
  end

  #  Callbacks {{{ #
  def init(_) do
    {:ok, up_pid} = GPIO.start_link(@pin_up, :output, start_value: 0)
    {:ok, down_pid} = GPIO.start_link(@pin_down, :output, start_value: 0)
    {:ok, power_pid} = GPIO.start_link(@power_pin, :output, start_value: 0)
    {:ok, %{up: up_pid, down: down_pid, on: power_pid}}
  end

  def handle_cast(:power_off, state) do
    GPIO.write(state[:on], 0)
    {:noreply, state}
  end

  def handle_cast(:power_on, state) do
    GPIO.write(state[:on], 1)
    {:noreply, state}
  end

  def handle_cast(:lower_desk, state) do
    GPIO.write(state[:up], 0)
    GPIO.write(state[:down], 1)
    {:noreply, state}
  end

  def handle_cast(:raise_desk, state) do
    GPIO.write(state[:down], 0)
    GPIO.write(state[:up], 1)
    {:noreply, state}
  end

  def handle_cast(:stop, state) do
    GPIO.write(state[:up], 0)
    GPIO.write(state[:down], 0)
    {:noreply, state}
  end
end

