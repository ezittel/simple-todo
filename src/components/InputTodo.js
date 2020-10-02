import React, { Component } from "react"

class InputTodo extends Component {
    state = {title: ""};
    onChange = e => {
        this.setState({
            title: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ""
        });
    };
  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input className="input-submit" type="text" placeholder="Add dodo..." value={this.state.title} onChange={this.onChange}/>
        <input className="input-submit" type="submit" value="Add It!" />
      </form>
    )
  }
}
export default InputTodo