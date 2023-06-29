import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div
      style={{
        border: "1px solid",
        padding: "10px",
        margin: "10px",
      }}
    >
      <button onClick={() => navigate("/")}>이전으로</button>
      {todos.map((todo) => {
        console.log(todo, id);
        if (todo.id === id) {
          return (
            <>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <p>{todo.isDone.toString()}</p>
            </>
          );
        }
      })}
    </div>
  );
}

export default Detail;
