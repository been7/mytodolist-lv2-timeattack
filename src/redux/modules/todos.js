import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "title 1",
    body: "body 1",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "title 2",
    body: "body 2",
    isDone: true,
  },
  {
    id: shortid.generate(),
    title: "title 3",
    body: "body 3",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

export default todos;
