import React, { useState } from "react"

const InputTodo = props =>{
  const[inputText, setInputText]=useState({
    title: "",
  })

  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.addTodoProps(inputText.title);
    setInputText({
      title: "",
    })
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="input-text" name="title" type="text" placeholder="Add another dog task..." value={inputText.title} onChange={onChange}/>
      <input className="input-submit" type="submit" value="Add It!" />
    </form>
  )
  
}

export default InputTodo