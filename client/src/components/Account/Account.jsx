import React, { Component } from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      data: []
    };
  }

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts = async () => {
    const fetchData = await fetch(`/accounts/${this.state.id}`);
    const accountData = await fetchData.json();

    this.setState({
      data: accountData[0]
    });
    console.log(this.state.data);
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Account Detail Page</h1>
        <h2>{data.firstName}</h2>
      </div>
    );
  }
}

export default Account;
