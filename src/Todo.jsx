import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
const Todo = () => {
  const [todoItem, setTodoItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [indexNumber, setIndexNumber] = useState("");
  const [updateInput, setupdateInput] = useState("");

  const addTodo = () => {
    inputValue === ""
      ? alert("Input Field Is Empty...")
      : todoItem.push(inputValue);
    setTodoItem([...todoItem]);
    setInputValue("");
  };

  const delAll = () => {
    setTodoItem([]);
  };

  const delTodo = (ind) => {
    todoItem.splice(ind, 1);
    setTodoItem([...todoItem]);
  };

  const editTodo = (ind) => {
    setupdateInput(todoItem[ind]);
  };

  const upDateTodo = (ind) => {
    todoItem.splice(ind, 1, updateInput);
    setTodoItem([...todoItem]);
    setIndexNumber("");
    setupdateInput("");
  };

  const handler = (e) => {
    e.preventDefault();
    inputValue === ""
      ? alert("Input Field Is Empty...")
      : todoItem.push(inputValue);
    setTodoItem([...todoItem]);
    setInputValue("");
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h1 className="bg-info opacity-75 rounded">TODO APP</h1>
            <form onSubmit={handler}>
              <InputGroup size="lg">
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  value={inputValue}
                  placeholder="Enter todo...?"
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </InputGroup>
            </form>
            <div className="d-flex gap-3 my-2">
              <Button variant="info" onClick={addTodo}>
                Add TODO
              </Button>
              <Button variant="danger" onClick={delAll}>
                Delete All
              </Button>
            </div>
            <section>
              {todoItem.map((todo, ind) => {
                return (
                  <React.Fragment key={ind}>
                    {indexNumber === ind ? (
                        <InputGroup size="lg">
                          <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            autoFocus
                            className="border-start-0 border-top-0 border-end-0 rounded-0 d-flex shadow-none"
                            onChange={(e) => {
                              setupdateInput(e.target.value);
                            }}
                            value={updateInput}
                          />
                          <div>
                            <GrUpdate
                              className="icon"
                              onClick={() => upDateTodo(ind)}
                            />
                          </div>
                        </InputGroup>
                    ) : (
                      <div className="alert alert-info d-flex justify-content-between">
                        {todo}
                        <div className="d-flex gap-2">
                          <FaEdit
                            color="black"
                            onClick={() => {
                              editTodo(ind);
                              setIndexNumber(ind);
                            }}
                            size={25}
                          />
                          <AiFillDelete
                            color="black"
                            onClick={() => {
                              delTodo(ind);
                            }}
                            size={25}
                          />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </section>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Todo