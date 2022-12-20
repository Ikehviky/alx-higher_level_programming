#!/usr/bin/python3


def print_last_digit(number):
    """ Prints the last digit of a number """
    if number < 0:
        last_digit = ((-1 * number) % 10)
    elif number == 0:
        last_digit = number
    else:
        last_digit = number % 10
    print("{:d}".format(last_digit), end='')
    return last_digit
