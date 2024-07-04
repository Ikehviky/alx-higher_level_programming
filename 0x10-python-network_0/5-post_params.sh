#!/bin/bash
# Sends a POST request to the URL with email and subject parameters, displays the body of the response
curl -s -X POST "$1" -d "email=test@gmail.com&subject=I will always be here for PLD"
