#!/bin/bash
#Stopping existing node servers
echo "Stopping any existing node servers"
if pgrep -x "node" > /dev/null
then
    pkill node
else
    echo "already stopped"
fi