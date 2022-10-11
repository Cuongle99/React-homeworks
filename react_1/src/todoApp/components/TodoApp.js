import React, { useState } from "react";
import shortid from "shortid";

const TodoApp = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            name: "nau com",
            isCheck: false,
            isEdit: false,
        },
        {
            id: 2,
            name: "rua bat",
            isCheck: false,
            isEdit: false,
        },
        {
            id: 3,
            name: "quet nha",
            isCheck: false,
            isEdit: false,
        },
        {
            id: 4,
            name: "hoc bai",
            isCheck: false,
            isEdit: false,
        },
    ]);
    const [todosCopy, setTodosCopy] = useState(todos);
    const [todoValue, setTodoValue] = useState("");
    const [selectAll, setSelectAll] = useState(false);

    const [statusActive, setStatusActive] = useState(0);

    const onChangeTodoValue = (e) => {
        setTodoValue(e.target.value);
    };

    let complete = 0;
    let unComplete = 0;

    const addTodo = () => {
        if (todoValue.trim()) {
            let copy;

            if (statusActive === 0) {
                copy = [...todos];
            } else {
                copy = [...todosCopy];
                setStatusActive(0);
            }
            copy = [
                {
                    id: shortid.generate(),
                    name: todoValue,
                    isCheck: false,
                    isEdit: false,
                },
                ...copy,
            ];
            setTodoValue("");
            setSelectAll(false);
            setTodos(copy);
            setTodosCopy(copy);
        }
    };

    const delTodo = (e) => {
        let newTodo;
        if (statusActive === 0) {
            newTodo = todos.filter((item, index) => {
                return item.id !== e;
            });
        } else {
            newTodo = todosCopy.filter((item, index) => {
                return item.id !== e;
            });
            setStatusActive(0);
        }
        setTodos(newTodo);
        setTodosCopy(newTodo);
    };

    const completeTodo = (i) => {
        i.isCheck = !i.isCheck;
        let newTodo = [...todos];

        checkSelectTodo();

        setTodos(newTodo);
    };

    const checkSelectTodo = () => {
        let count = 0;

        todos.forEach((item) => {
            if (item.isCheck) {
                count++;
            }
        });

        if (count === todos.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    };

    const statusEditTodo = (e) => {
        e.isEdit = !e.isEdit;
        let newTodo = [...todos];
        setTodos(newTodo);
        // console.log(todos);
    };

    const onChangeEditValue = (e, index) => {
        let newTodo = [...todos];
        newTodo[index].name = e.target.value;
        setTodos(newTodo);
    };

    const updateTodo = (index) => {
        let newTodo = [...todos];
        newTodo[index].isEdit = false;
        setTodos(newTodo);
    };

    const checkAllTodo = (e) => {
        let newTodo = [...todos];

        if (e.target.checked) {
            newTodo.map((item) => {
                return (item.isCheck = true);
            });
            setSelectAll(true);
        } else {
            newTodo.map((item) => {
                return (item.isCheck = false);
            });
            setSelectAll(false);
        }

        setTodos(newTodo);
    };

    const clearSelect = () => {
        let newTodo;
        if (statusActive === 0) {
            newTodo = todos.filter((item) => {
                return item.isCheck === false;
            });
        } else {
            newTodo = todosCopy.filter((item) => {
                return item.isCheck === false;
            });
            setStatusActive(0);
        }

        setSelectAll(false);
        setTodos(newTodo);
        setTodosCopy(newTodo);
    };

    return (
        <div className="main">
            <div className="header">
                <h1>TodoApp</h1>
            </div>
            <div className="body">
                <div className="form-add">
                    <input
                        type="text"
                        name=""
                        id=""
                        value={todoValue}
                        onChange={onChangeTodoValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                addTodo();
                            }
                        }}
                    />
                    <button className="btn btn-add" onClick={addTodo}>
                        add
                    </button>
                </div>
                <div className="form-checkAll">
                    <input
                        className="checkbox"
                        type="checkbox"
                        onClick={checkAllTodo}
                        checked={selectAll}
                    ></input>
                    <label>Select All</label>
                </div>
                <ul className="list-todo">
                    {todos.map((item, index) => {
                        return (
                            <li
                                key={item.id}
                                style={{
                                    marginBottom: "15px",
                                    marginTop: "15px",
                                    cursor: "pointer",
                                }}
                                className={`${item.isCheck ? "checkdone" : ""}`}
                            >
                                {item.isEdit ? (
                                    <input
                                        className="form-checkItem"
                                        type="text"
                                        value={item.name}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                updateTodo(index);
                                            }
                                        }}
                                        onChange={(e) => {
                                            onChangeEditValue(e, index);
                                        }}
                                        onBlur={(e) => {
                                            updateTodo(index);
                                        }}
                                    />
                                ) : (
                                    <div className="form-checkItem">
                                        <input
                                            type="checkbox"
                                            onClick={() => completeTodo(item)}
                                            checked={item.isCheck}
                                            className="checkbox"
                                        ></input>
                                        <span
                                            // onClick={() => completeTodo(item)}
                                            onDoubleClick={() => {
                                                statusEditTodo(item);
                                            }}
                                        >
                                            {item.name}
                                        </span>{" "}
                                    </div>
                                )}

                                <button
                                    className="btn btn-delete"
                                    onClick={() => delTodo(item.id)}
                                >
                                    del
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <button className="btn btn-delete" onClick={clearSelect}>
                    Clear Select
                </button>
            </div>
            <div className="footer">
                <span>
                    {" "}
                    <button
                        className={`btn-link ${
                            statusActive === 0 ? "active" : ""
                        }`}
                        onClick={() => {
                            if (statusActive !== 0) {
                                setTodos(todosCopy);
                                setStatusActive(0);
                            }
                        }}
                    >
                        All
                    </button>
                    : {todosCopy.length} item
                </span>

                {todosCopy.forEach((item) => {
                    if (item.isCheck) {
                        complete++;
                    } else {
                        unComplete++;
                    }
                })}

                <span>
                    {" "}
                    <button
                        className={`btn-link ${
                            statusActive === 1 ? "active" : ""
                        }`}
                        onClick={() => {
                            if (statusActive !== 1) {
                                let newTodo = [...todosCopy];
                                let result = newTodo.filter((item) => {
                                    return item.isCheck;
                                });
                                setTodos(result);
                                setStatusActive(1);
                            }
                        }}
                    >
                        Complete
                    </button>
                    : {complete} item
                </span>
                <span>
                    {" "}
                    <button
                        className={`btn-link ${
                            statusActive === -1 ? "active" : ""
                        }`}
                        onClick={() => {
                            if (statusActive !== -1) {
                                let newTodo = [...todosCopy];
                                let result = newTodo.filter((item) => {
                                    return !item.isCheck;
                                });
                                setTodos(result);
                                setStatusActive(-1);
                            }
                        }}
                    >
                        Incomplete
                    </button>
                    : {unComplete} item
                </span>
            </div>
        </div>
    );
};

export default TodoApp;
