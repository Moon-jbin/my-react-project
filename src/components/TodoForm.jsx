import React from "react";
import "../css/TodoForm.css";

export default function Form({ value, onChange, onCreate, onKeyPress, color }) {
  return (
    <div className="form">
      <input
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        style={{ color }}
      />
      {/* onCreate 버튼이 클릭될때 실행되는 함수 */}
      {/* onChange: 인풋 내용이 변경될 때 실행되는 함수 */}
      <div className="create-button" onClick={onCreate}>
        add
      </div>
    </div>
  );
}
