import React from "react";
import {
  Navbar,
  Nav,
  Image,
  Offcanvas,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";

export function TopNav() {
  return (
    <>
      <Navbar
        className="fixed-top flex p-0 shadow"
        style={{ backgroundColor: "#ff5733" }}
      >
        <Navbar.Brand
          className="col-sm-3 col-md-2 me-auto p-2"
          href="/dashboard"
        >
          Kostimate
        </Navbar.Brand>
        <input
          className="form-control form-control-dark w-25"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </Navbar>
    </>
  );
}
