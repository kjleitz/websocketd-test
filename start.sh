#!/usr/bin/env bash

# if an error occurs in a subprocess, fail here too
set -e

# if we get an interrupt/quit/exit/whatever signal, kill the child processes before dying
trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

websocketd --port=8080 ./capitalize.py &
python -m SimpleHTTPServer
