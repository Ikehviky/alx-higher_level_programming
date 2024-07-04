#!/bin/bash
# Sends a request to 0.0.0.0:5000/catch_me that causes the server to respond with "You got me!"

# Send a PUT request with a custom header to trigger the server response
curl -sX PUT -d "user_id=98" -H "Origin: HolbertonSchool" "0.0.0.0:5000/catch_me"
