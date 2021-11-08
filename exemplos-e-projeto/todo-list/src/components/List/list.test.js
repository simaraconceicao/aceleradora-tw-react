import { render, screen, fireEvent } from "@testing-library/react"
import List from './List'

describe('List', () => {
  it('should be able to add a task', async () => {
    render(<List />);

    const taskInput = screen.getByPlaceholderText('Adicionar nova tarefa')
    const addTaskButton = screen.getByTestId('add-task-button')

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar react'
      }
    })
    fireEvent.click(addTaskButton)

    const addedFirstTaskTitle = screen.getByText('Estudar react')

    expect(addedFirstTaskTitle).toHaveTextContent('Estudar react')
    expect(addedFirstTaskTitle.parentElement).not.toHaveClass('completed')

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar javascript'
      }
    });
    fireEvent.click(addTaskButton);

    const addedSecondTaskTitle = screen.getByText('Estudar javascript')

    expect(addedFirstTaskTitle).toBeInTheDocument();
    expect(addedFirstTaskTitle).toHaveTextContent('Estudar react')
    expect(addedFirstTaskTitle.parentElement).not.toHaveClass('completed')

    expect(addedSecondTaskTitle).toHaveTextContent('Estudar javascript')
    expect(addedSecondTaskTitle.parentElement).not.toHaveClass('completed')
  })

  it('should not be able to add task empty', () => {

  })
})