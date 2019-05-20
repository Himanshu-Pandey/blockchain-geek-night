#!/bin/bash
set -e

export ETHEREUM_DIR="/ethereum"

# Only initialise the Ethereum data directory if this has not been done before
if [[ ! -e "${ETHEREUM_DIR}/geth/genesis.json" && ! -d "${ETHEREUM_DIR}/chaindata" ]]; then
    echo "Copying genesis.json to geth path ${ETHEREUM_DIR}/geth/genesis.json"
    mkdir -p ${ETHEREUM_DIR}/geth
    cp /data/genesis.json ${ETHEREUM_DIR}/geth/genesis.json

    echo "Initialising the Ethereum node"
    /usr/local/bin/geth --datadir ${ETHEREUM_DIR} init ${ETHEREUM_DIR}/geth/genesis.json

    echo "Copying public nodekey to geth path"

    echo ${NODEKEY} > ${ETHEREUM_DIR}/geth/nodekey
    echo "" > ${ETHEREUM_DIR}/password.txt
    echo "${ALL_NODES}" > ${ETHEREUM_DIR}/static-nodes.json

    echo "Setting up ethereum account"
    /usr/local/bin/geth -datadir ${ETHEREUM_DIR} account new --password ${ETHEREUM_DIR}/password.txt
else
    echo "Ethereum node already initialised. Reading state from provided directory ${ETHEREUM_DIR}"
fi

chmod +x /data/start_geth.sh
mkdir -p /var/log/supervisor

/usr/bin/supervisord -c /etc/upervisord.conf -n