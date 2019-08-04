import React from "react";

class Todo extends React.Component {
  render = () => {
    return (
      <li>
        onClick=
        {() => {
          this.props.onToClick();
        }}
        className={this.props.done === false ? "" : "selected"}><span>X</span>
        {" " + this.props.title}
      </li>
    );
  };
}

class App extends React.Component {
  state = {
    todos: [
      { title: "Learn to code", done: true },
      { title: "Rule the world", done: false }
    ],
    inputValue: "Titre"
  };

  handleClick = () => {
    const todosCopy = [...this.state.todos]; //on copie todos avant de le modifier
    todosCopy.push({ title: this.state.inputValue, done: false });
    this.setState({ todos: todosCopy });
  };

  render() {
    return (
      <div className="container">
        <h1>To-Do list</h1>
        <ul>
          {this.state.todos.map((item, index) => {
            return (
              <Todo
                key={index}
                done={item.done}
                title={item.title}
                onToClick={() => {
                  const changedTodo = { ...this.state.todos[index] };
                  changedTodo.done = !changedTodo.done;
                  const changedTodos = [...this.state.todos];
                  changedTodos[index] = changedTodo;
                  this.setState({ todos: changedTodos });
                }}
              />
            );
          })}
        </ul>
        <input
          value={this.state.inputValue}
          onChange={event => {
            this.setState({ inputValue: event.target.value });
          }}
        />
        <div>
          <button
            onClick={() => {
              this.handleClick();
            }}
          >
            {"AJOUTER UNE TÀCHE"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
