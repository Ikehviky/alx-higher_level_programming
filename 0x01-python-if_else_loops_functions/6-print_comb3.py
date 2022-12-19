#!/usr/bin/python3

for num1 in range(10):
    for num2 in range(10):
        if num1 >= num2:
            continue
        elif  num1 > 7:
            print("{:d}{:d}".format(num1, num2))
        else:
            print("{:d}{:d}".format(num1, num2), end=", ")