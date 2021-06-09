import { initialState } from "./states";
import { ADD_INPUT, UPDATE_TODO, DELETE_TODO, CHECK_TODO } from "./actions";

const reducer = (state = initialState, action) => {
  // reducer: fct js with (state,action) and return updated state!
  // state: defined state is a happy state!
  // action: object with minimum 2 params!  action= {type:"actionType", payload:"variable"}
  let newTask;
  switch (action.type) {
    case ADD_INPUT:
      return (state = [...state, action.payload]);
    case DELETE_TODO:
      newTask = [...state];
      newTask = newTask.filter((task) => task.id !== action.payload);
      return newTask;
    case CHECK_TODO:
      newTask = [...state];
      newTask = newTask.map((task) =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
      return newTask;
    case UPDATE_TODO:
      newTask = [...state];
      let index = -1;
      for (let i = 0; i < newTask.length; i++) {
        index++;
        if (newTask[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTask[index] = action.payload;
        return newTask;
      }
      break;
    default:
      return state;
  }
};
export default reducer;
