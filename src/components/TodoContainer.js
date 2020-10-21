import React, { useState, useEffect } from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

import axios from "axios"
import { v4 as uuid } from "uuid"

const TodoContainer = props => {
  const [todos, setTodos] = useState([])
  const [show, setShow] = useState(false)

  const handleChange = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
    setShow(!show)
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodo = title => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  useEffect(() => {
    //console.log("test")
    const todos= [
        {
          id: 6,
          title: "Brush Dog",
          completed: false
        },
        {
          id: 2,
          title: "Feed Dog - Morning",
          completed: false
        },
        {
          id: 1,
          title: "Dog Walk - Morning",
          completed: false
        },
        {
          id: 3,
          title: "Feed Dog - Night",
          completed: false
        },
        {
          id: 4,
          title: "Dog Walk - Night",
          completed: false
        },
        {
          id: 5,
          title: "Brush Dog's Teeth",
          completed: false
        }
      ]
     
    //axios
    //.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //.then(response => setTodos(response.data))
    setTodos(todos)
  },[]);

  return (
    <div className="container">
      <Header headerSpan={show} />
      <InputTodo addTodoProps={addTodo} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  )
}

export default TodoContainer