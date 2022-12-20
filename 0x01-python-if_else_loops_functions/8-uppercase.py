#!/usr/bin/python3


def uppercase(str):
    for string in str:
        ascii_value = ord(string)
        if ascii_value in range(97, 123):
            string = chr(ascii_value - 32)
        print("{:s}".format(string), end="")
    print()
