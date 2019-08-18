import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import Account from "../Account/Account";

class Accounts extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts = async () => {
    const getData = await fetch("/accounts");
    const fetchedData = await getData.json();
    console.log(fetchedData);
    this.setState({
      data: fetchedData
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Hello from Accounts Page</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Account ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          {data.map(account => {
            return (
              <tbody key={account.accountID}>
                <tr>
                  <td>
                    <Link to={`accounts/${account.accountID}`}>
                      {account.accountID}
                    </Link>
                  </td>
                  <td>{account.firstName}</td>
                  <td>{account.lastName}</td>
                  <td>{account.phone1}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    );
  }
}

export default Accounts;
