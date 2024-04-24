"""Defines a rectangle class."""

from models.base import Base


class Rectangle(Base):
    """Represent a rectangle."""

    def __init__(self, width, height, x=0, y=0, id=None):
        """Initialize a new Rectangle.

        Args:
            width (int): The width of the new Rectangle.
            height (int): The height of the new Rectangle.
            x (int): The x coordinate of the new Rectangle.
            y (int): The y coordinate of the new Rectangle.
            id (int): The identity of the new Rectangle. Defaults to None.
        Raises:
            TypeError: If width, height, x, or y is not an int.
            ValueError: If width, height, x, or y is less than 0.
        """
        ...

    def area(self):
        """Return the area of the Rectangle."""
        ...

    def display(self):
        """Print the Rectangle using the `#` character."""
        ...

    def update(self, *args, **kwargs):
        """Update the Rectangle.

        Args:
            *args (ints): New attribute values in the order:
                id, width, height, x, y.
            **kwargs (dict): New key/value pairs of attributes.
        """
        ...

    def to_dictionary(self):
        """Return the dictionary representation of a Rectangle."""
        ...

    def __str__(self):
        """Return the string representation of the Rectangle."""
        ...
