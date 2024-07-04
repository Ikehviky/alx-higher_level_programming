#!/bin/bash
# Takes in a URL, sends a GET request to that URL, and displays the body of a 200 status code response
curl -s -o /dev/null -w "%{http_code}" "$1" | {
    read status
    if [ "$status" -eq 200 ]; then
        curl -s "$1"
    fi
}
