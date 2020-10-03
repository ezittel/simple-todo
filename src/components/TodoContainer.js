import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class TodoContainer extends React.Component {
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(response => 
      this.setState({todos: response.data}));
    }
    
  
    state = {
        todos: [],
       };
    handleChange = (id) => {

      this.setState({
        todos: this.state.todos.map(todo=> {
          if (todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });
      console.log("clicked", id);
    };
    delTodo = (id) => {
      this.setState({
        todos: [
          ...this.state.todos.filter(todo=> {
          return todo.id !== id;
        })
      ]
      });
      
      console.log("deleted", id);
    };
    addTodo = (title) => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
      
      console.log("added", title);
    };
    render() {
        return (
            
            <div className="container">
                <Header />
                <InputTodo addTodo={this.addTodo}/>
                <TodosList 
                todos={this.state.todos}
                handleChangeProps={this.handleChange} 
                deleteTodoProps={this.delTodo}
                />
            </div>
        );
    }
}
export default TodoContainer