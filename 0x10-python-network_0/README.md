# Network #0

## Description
This project involves creating Bash scripts and Python scripts for various networking tasks. The focus is on using tools like `curl` and Python's networking modules to accomplish these tasks. All scripts adhere to specified style and documentation guidelines.

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`
- All scripts will be tested on Ubuntu 20.04 LTS
- All Bash scripts should be exactly 3 lines long
- All files should end with a new line
- All files must be executable
- The first line of all Bash files should be exactly `#!/bin/bash`
- The second line of all Bash scripts should be a comment explaining what the script is doing
- All `curl` commands must have the option `-s` (silent mode)
- All files will be interpreted/compiled on Ubuntu 20.04 LTS using `python3` (version 3.8.5)
- The first line of all Python files should be exactly `#!/usr/bin/python3`
- Code should use `pycodestyle` (version 2.8.*)
- All modules should be documented
- All classes should be documented
- All functions (inside and outside a class) should be documented
- Documentation should be a real sentence explaining the purpose of the module, class, or method

## Project Tasks

### 0. cURL Body Size
**Script:** `0-body_size.sh`  
**Description:** This Bash script takes in a URL, sends a request to that URL, and displays the size of the body of the response in bytes.
```bash
#!/bin/bash
# Sends a request to the URL and displays the size of the response body in bytes
curl -s "$1" | wc -c
