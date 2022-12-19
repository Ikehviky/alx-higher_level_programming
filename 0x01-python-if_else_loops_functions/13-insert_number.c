#include "lists.h"
#include <stdlib.h>

/**
 * insert_node - Inserts a number into a sorted singly linked list
 * @head: A double pointer to the start of the list
 * @number: Integer to be inserted
 *
 * Return: The address of the new node if success, otherwise NULL.
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *current;
	listint_t *new_node;

	current = *head;

	new_node = malloc(sizeof(listint_t));

	if (new_node == NULL)
		return (NULL);

	new_node->n = number;

	if (*head == NULL || number < current->n)
	{
		new_node->next = *head;
		*head = new_node;
	}
	else
	{
		while (current->next != NULL && current->next->n < number)
			current = current->next;
		new_node->next = current->next;
		current->next = new_node;
	}

	return (new_node);
}