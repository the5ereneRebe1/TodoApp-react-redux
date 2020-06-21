import React from "react";
import { connect } from "react-redux";
import {addTodo} from "../redux/actions";
import "./AddTodo.css";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({input: ""});
  };

  render() {
    return (
      <div className="AddTodo">
        <input className="AddTodo_input"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="AddTodo_button" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  {addTodo}
)(AddTodo);
