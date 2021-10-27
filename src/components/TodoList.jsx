import React from "react";
import "../css/TodoList.css";

export default class TodoItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }

  render() {
    const { text, checked, id, color, onToggle, onRemove } = this.props;

    return (
      <div
        className="todo-item"
        onClick={() => {
          onToggle(id);
        }}
      >
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          &times;
        </div>

        <div className={`todo-text ${checked ? "checked" : ""}`}>
          <div>{text}</div>
        </div>

        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}
