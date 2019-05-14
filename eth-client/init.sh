#!/bin/sh
touch password.txt
geth account new --datadir . --password password.txt
geth init genesis.json --datadir .
geth --nodiscover --datadir . --verbosity 6
