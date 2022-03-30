import React from "react";

class Ex1 extends React.Component {
  state = {
    name: "",
    channel: "1 con meo",
  };
  handleOnChangeName = (event) => {
      console.log(this.state.value, 'event.target: ' , event.target, 'event object: ', event)
    this.setState({
      name: event.target.value,
    });
  };

  handleOnClick = () => {
    console.log("Click me");
    alert("Click me");
  };
  render() {
      console.log(">>> call render: ", this.state)
    return (
      <>
        <h1>Hello my Ex1 with React</h1>
        <div className="first">
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
          <br/>
          My name is {this.state.name}
        </div>
        <div className="second">My Youtube Channel is {this.state.channel}</div>
        <div className="third">
          <button onClick={() => this.handleOnClick()}>Click me</button>
        </div>
      </>
    );
  }
}
export default Ex1;
