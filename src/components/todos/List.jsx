import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function List() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  const dispatch = useDispatch();

  return (
    <>
      <h3>Working</h3>
      {todos
        .filter((todo) => todo.isDone === false)
        .map((todo) => {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <Link to={`/${todo.id}`}>상세보기</Link>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <p>{todo.isDone.toString()}</p>
              <button
                onClick={() => {
                  dispatch({
                    type: "DELETE_TODO",
                    payload: todo.id,
                  });
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "SWITCH_TODO",
                    payload: todo.id,
                  });
                }}
              >
                완료
              </button>
            </div>
          );
        })}
      <h3>Done</h3>
      {todos
        .filter((todo) => todo.isDone === true)
        .map((todo) => {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <Link to={`/${todo.id}`}>상세보기</Link>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.body}</p>
              <p>{todo.isDone.toString()}</p>
              <button
                onClick={() => {
                  dispatch({
                    type: "DELETE_TODO",
                    payload: todo.id,
                  });
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  dispatch({
                    type: "SWITCH_TODO",
                    payload: todo.id,
                  });
                }}
              >
                취소
              </button>
            </div>
          );
        })}
    </>
  );
}

export default List;
