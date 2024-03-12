#!/usr/bin/python3
import random

# Generate a random integer between -10000 and 10000
number = random.randint(-10000, 10000)

# Calculate the last digit
last_digit = number % 10 

# Check and print messages based on conditions
if last_digit > 5:
    print(f"Last digit of {number} is {last_digit} and is greater than 5")
elif last_digit == 0:
    print(f"Last digit of {number} is {last_digit} and is 0")
elif 0 < last_digit < 6:
    print(f"Last digit of {number} is {last_digit} and is less than 6 and not 0")
