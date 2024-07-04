#!/bin/bash
# Sends a GET request to the URL with X-School-User-Id header and displays the body of the response
curl -sX GET $1 -H "X-HolbertonSchool-User-Id: 98" -L
