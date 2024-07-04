#!/bin/bash
# Sends a GET request to the URL and displays the body of a 200 status code response
curl -s -o response.txt -w "%{http_code}" "$1" | {
    read status
    if [ "$status" -eq 200 ]; then
        cat response.txt
    fi
    rm response.txt
}
