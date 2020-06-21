import React from "react";
import Todo from "./Todo";
import {getTodosByVisibilityFilter} from "../redux/selectors";
import {connect} from "react-redux";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStatetoProps = state =>{
  const {visibilityFilter} = state;
  console.log(visibilityFilter);
  const todos = getTodosByVisibilityFilter(state,visibilityFilter);
  return {todos};
}

export default connect(mapStatetoProps,null)(TodoList);
