#!/usr/bin/env bash
retries=5
is_running=0
while (( retries > 0 && is_running == 0 ))
do
    if ((supervisorctl -c /etc/supervisord.conf status geth | grep -E RUNNING &> /dev/null))
    then
        is_running=1
    fi
    echo "Check for Ethereum running = $is_running"
    if [ $is_running -eq 1 ]
    then
        echo "Ethereum is healthy"
        exit 0
    else
        echo "Sleeping for 10s"
        sleep 10
    fi
    echo "Retrying..."
    ((retries--))
done

echo "Healthcheck was unsuccessful :("
exit 1
