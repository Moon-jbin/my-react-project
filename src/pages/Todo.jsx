import React from "react";
import TodoListTemplate from "../components/TodoListTemplate";
import TodoForm from "../components/TodoForm";
import TodoItemList from "../components/TodoItemList";
import Palette from "../components/Palette";

const colors = ["red", "#343a40", "#4f0e3e", "#12b886", "#228ae6"];

export default class Todo extends React.Component {
  id = 3;

  state = {
    input: "",
    todos: [
      { id: 0, text: "React Example", checked: false },
      { id: 1, text: "Todo List", checked: false },
      { id: 2, text: "React 공부", checked: false },
    ],
    color: "#343a40",
  };

  componentWillMount() {
    const storageTodos = localStorage.getItem("Todo");
    if (storageTodos) {
      this.state.todos = JSON.parse(storageTodos);
    }
  }

  componentDidUpdate(prevPreps, prevState) {
    if (JSON.stringify(prevState.todos) !== JSON.stringify(this.state.todos)) {
      localStorage.setItem("Todo", JSON.stringify(this.state.todos));
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color,
      }),
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index]; // 선택한 객체
    const nextTodos = [...todos]; //배열을 복사한다.

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    this.setState({
      todos: nextTodos,
    });
  };

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  handleSelectColor = (color) => {
    this.setState({
      color,
    });
  };

  render() {
    const { input, todos, color } = this.state;

    const {
      handleRemove,
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleSelectColor,
    } = this;

    return (
      <TodoListTemplate
        form={
          <TodoForm
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
        }
        palette={
          <Palette
            colors={colors}
            selected={color}
            onSelect={handleSelectColor}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}
