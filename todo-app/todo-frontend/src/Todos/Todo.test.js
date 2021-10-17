import Todo from "./Todo";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
const todos = [
  { _id: "616a60b888f1171e4a89a661", text: "Write code", done: true },
  {
    _id: "616a60b888f1171e4a89a662",
    text: "Learn about containers",
    done: false,
  },
  {
    _id: "616a6710c0cb79583c37c18a",
    text: "adding a new todo",
    done: false,
    __v: 0,
  },
  {
    _id: "616a672cc0cb79583c37c18c",
    text: "added a new todo from 3001",
    done: false,
    __v: 0,
  },
];
describe("Todo component", () => {
  test("renders without failure", () => {
    const component = render(<Todo todo={todos[0]} />);
    expect(component).toBeDefined();
  });
});
