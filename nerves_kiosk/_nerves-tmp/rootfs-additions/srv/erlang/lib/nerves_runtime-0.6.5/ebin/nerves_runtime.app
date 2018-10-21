{application,nerves_runtime,
             [{applications,[kernel,stdlib,elixir,logger,system_registry]},
              {description,"Small, general runtime libraries and utilities for Nerves devices\n"},
              {modules,['Elixir.Collectable.Nerves.Runtime.OutputLogger',
                        'Elixir.Nerves.Runtime',
                        'Elixir.Nerves.Runtime.Application',
                        'Elixir.Nerves.Runtime.Device',
                        'Elixir.Nerves.Runtime.Helpers',
                        'Elixir.Nerves.Runtime.Init',
                        'Elixir.Nerves.Runtime.KV',
                        'Elixir.Nerves.Runtime.Kernel',
                        'Elixir.Nerves.Runtime.Kernel.UEvent',
                        'Elixir.Nerves.Runtime.LogTailer',
                        'Elixir.Nerves.Runtime.OutputLogger']},
              {registered,[]},
              {vsn,"0.6.5"},
              {mod,{'Elixir.Nerves.Runtime.Application',[]}}]}.