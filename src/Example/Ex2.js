import React from "react";
import Color from "../HOC/Color";

class Ex2 extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };
  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleSubMit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form action="/action_page.php">
          <label>First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnChangeFirstName(event)}
          />
          <br />
          <label>Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubMit(event)}
          />{" "}
          <br />
          <br/>
          <button
            type="button"
            onClick={(event) => this.handleSubMit(event)}
          > Hide</button>
        </form>
      </>
    );
  }
}
export default Ex2;
