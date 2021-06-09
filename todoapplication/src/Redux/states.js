import { v4 as uuidv4 } from "uuid";
export const initialState = [
    {
      id: uuidv4(),
      description: "todos",
      isDone: true,
    },
  ];