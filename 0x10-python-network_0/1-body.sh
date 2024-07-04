#!/bin/bash
# Sends a GET request to the URL and displays the body of a 200 status code response
response=$(curl -s -w "%{http_code}" "$1")
body=$(echo "$response" | sed '$ d')
status=$(echo "$response" | tail -n 1)

if [ "$status" -eq 200 ]; then
    echo "$body"
fi
