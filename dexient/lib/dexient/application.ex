defmodule Dexient.Application do
  use Application

  def start(_type, _args) do
    import Supervisor.Spec
    # List all child processes to be supervised
    children = [
      # Start the endpoint when the application starts
      supervisor(DexientWeb.Endpoint, [])
      # Starts a worker by calling: Dexient.Worker.start_link(arg)
      # {Dexient.Worker, arg},
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Dexient.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    DexientWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
