#!/bin/bash

/usr/local/bin/geth \
    --unlock "0" \
    --password ${ETHEREUM_DIR}/password.txt \
    --datadir ${ETHEREUM_DIR} \
    --rpc \
    --mine \
    --minerthreads 1 \
    --rpcaddr 0.0.0.0 \
    --rpccorsdomain "*" \
    --rpcapi admin,db,eth,debug,miner,net,shh,txpool,personal,web3 \
    --rpcport 22000 \
    --port 21000 \
    --verbosity 5 \
    --maxpeers 100 \
    --nodiscover \
    --gcmode archive \
    --rpcvhosts '*'