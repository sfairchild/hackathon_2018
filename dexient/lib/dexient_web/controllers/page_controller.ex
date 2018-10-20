defmodule DexientWeb.PageController do
  use DexientWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
