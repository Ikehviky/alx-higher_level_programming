#!/usr/bin/python3

from sys import argv

x = len(argv) - 1
y = "argument"

if __name__ == "__main__":
    """prints the number of and the list of its arguments
       in the command line
    """
    print("{} {}".format(x, y))\
    if x == 1 else print("{} {}".format(x, y))\
    if x == 0 else print("{} {}".format(x, y+"s:"))
    for i in range(x):
        print("{}: {}".format(i + 1, argv[i + 1]))