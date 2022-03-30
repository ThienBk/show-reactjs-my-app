import React from "react";
import { toast } from "react-toastify";

class AddListTodo extends React.Component {
    state = {
        title: '',
    }

    handleOnChange = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    handleOnChangeAddTodo = () =>{
        if(!this.state.title){
            toast.error("Missing data")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
  render() {
      let {title} = this.state
    return (
      <>
        <div className="add-todo">
          <input type="text" value={title}
            onChange={(event) => this.handleOnChange(event)}
          >
          </input>
          <button className="btn-add-todo" type="button"
            onClick={() => this.handleOnChangeAddTodo()}
          >Add</button>
        </div>
      </>
    );
  }
}
export default AddListTodo;
