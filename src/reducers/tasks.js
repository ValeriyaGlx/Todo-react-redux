const TASKS = {
  todos: [
    {
      id: 1,
      text: "Learn JS",
      isComplited: false,
      change: false,
    },
    {
      id: 2,
      text: "Learn React",
      isComplited: false,
      change: false,
    },
    {
      id: 3,
      text: "Relax",
      isComplited: false,
      change: false,
    },
  ],

  texts: "",
};

export const DONE = [];

const tasks = (state = TASKS, { id, text, isComplited, type, change }) => {
  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id,
            text,
            isComplited,
            change,
          },
        ],
      };

    case "REMOVE_TASK":
      return {
        ...state,
        todos: [...state.todos].filter((el) => el.id !== id),
      };

    case "CHECK_TASK":
      DONE.push({ id, text, isComplited });
      return state;

    case "ADD_TEXT":
      return { ...state, texts: text };

    case "EDIT_TASK1":
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === +id) {
            return { ...el, text: text, change: !el.change  };
          } else {
            return el;
          }
        }),
      };

    case "EDIT_TASK2":

      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === +id) {
            return { ...el, change: !el.change };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
};

export default tasks;
