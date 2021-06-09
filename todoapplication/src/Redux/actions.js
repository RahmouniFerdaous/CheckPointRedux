import { v4 as uuidv4 } from "uuid";
// To avoid strings -> variables
export const ADD_INPUT = "ADD_INPUT";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECK_TODO = "CHECK_TODO";

export function addTodo(input) {
  return {
    type: ADD_INPUT,
    payload: { id: uuidv4(), ...input },
  };
}
export function updateToDo(task) {
  return {
    type: UPDATE_TODO,
    payload: task,
  };
}
export function deleteToDo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}
export function toogleToDo(id) {
  return {
    type: CHECK_TODO,
    payload: id,
  };
}
