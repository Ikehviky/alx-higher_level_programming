#!/bin/bash

# Function to check if a file contains valid JSON
is_valid_json() {
    jq . "$1" >/dev/null 2>&1
}

# Check if the number of arguments is correct
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <URL> <JSON_FILE>"
    exit 1
fi

# Assign arguments to variables
url="$1"
json_file="$2"

# Check if the JSON file is valid
if ! is_valid_json "$json_file"; then
    echo "Not a valid JSON"
    exit 1
fi

# Send a POST request with the JSON file contents as the body
curl -sX POST -H "Content-Type: application/json" -d @"$json_file" "$url"
