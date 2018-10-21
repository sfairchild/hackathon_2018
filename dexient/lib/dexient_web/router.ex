defmodule DexientWeb.Router do
  use DexientWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", DexientWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/api", DexientWeb do
    pipe_through :api
    
    get "/connect", ApiController, :connect
    get "/desk/:type", ApiController, :desk
    get "/power/:status", ApiController, :power
  end

  # Other scopes may use custom stacks.
  # scope "/api", DexientWeb do
  #   pipe_through :api
  # end
end
