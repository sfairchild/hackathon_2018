defmodule DexientWeb.ApiController do
  use DexientWeb, :controller

  def connect(conn, _params) do
    random_number = Enum.random(500..5000)
    IO.puts(random_number)
    # Process.sleep(random_number)
    json conn, %{success: true}
  end

  def desk(conn, %{"type" => type}) do
    json conn, %{success: type}
  end

  def power(conn, %{"status" => status}) do
    json conn, %{sucess: status}
  end
end
