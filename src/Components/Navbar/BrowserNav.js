import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

export function BrowserNav() {
  return (
    <>
      <div>
        <Navbar fixed="top" style={{ backgroundColor: "#ff5733" }}>
          <Nav className="mx-auto">
            <Nav.Link
              href="/home"
              className="fw-bold"
              style={{ color: "#3b3737" }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              href="/about"
              className="fw-bold"
              style={{ color: "#3b3737" }}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="/contactUs"
              className="fw-bold"
              style={{ color: "#3b3737" }}
            >
              CONTACT US
            </Nav.Link>
            <Nav.Link
              href="/login"
              className="fw-bold"
              style={{ color: "#3b3737" }}
            >
              LOGIN
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}
