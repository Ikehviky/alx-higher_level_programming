#!/bin/bash
# Takes in a URL, sends a GET request to that URL, and displays the body of a 200 status code response
curl -sL "$1"
