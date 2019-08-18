import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/accounts">Accounts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/account">Account</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default NavBar;
