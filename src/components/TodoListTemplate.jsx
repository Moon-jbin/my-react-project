import React from "react";
import "../css/TodoListTemplate.css";

export default function TodoListTemplate({ form, palette, children }) {
  return (
    <main className="todo-list-template">
      <div className="title">ToDo</div>
      <section className="palette-wrapper">{palette}</section>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
}
