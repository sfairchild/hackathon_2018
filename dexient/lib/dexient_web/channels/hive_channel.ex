defmodule DexientWeb.HiveChannel do
  use Phoenix.Channel

  def join("hive:connect", _message, socket) do
    {:ok, socket}
  end
end