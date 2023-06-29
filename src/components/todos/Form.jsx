import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";

function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(e) => {
        if (title === "" || body === "") {
          return alert("제목과 내용을 입력하세요.");
        }
        e.preventDefault();

        dispatch({
          type: "ADD_TODO",
          payload: {
            id: shortid.generate(),
            title,
            body,
            isDone: false,
          },
        });

        setTitle("");
        setBody("");
      }}
    >
      <label>제목</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>내용</label>
      <input
        type="text"
        name="body"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button type="submit">작성하기</button>
    </form>
  );
}

export default Form;
