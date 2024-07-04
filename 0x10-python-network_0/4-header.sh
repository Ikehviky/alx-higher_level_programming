#!/bin/bash
# Sends a GET request to the URL with X-School-User-Id header and displays the body of the response
curl -s -H "X-School-User-Id: 98" "$1"
