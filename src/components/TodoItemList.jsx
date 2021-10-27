import React from "react";
import TodoItem from "./TodoList";

export default class TodoItemList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(({ id, text, checked, color }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        color={color}
        key={id} // key값은 배열을 렌더링 하기 위해 필요
      />
    ));

    return <div>{todoList}</div>;
  }
}
