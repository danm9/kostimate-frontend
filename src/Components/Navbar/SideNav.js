import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export function SideNav() {
  return (
    <Navbar className="fixed-top">
      <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div
          class="sidebar-sticky"
          style={{ backgroundColor: "#3b3737", height: "100vh" }}
        >
          <ul className="nav flex-column">
            <li className="nav-item">
              <Nav.Link className="mt-5 active text-white" href="#">
                <span data-feather="home"></span>
                Dashboard
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="text-white" href="/projects">
                <span data-feather="file"></span>
                Projects
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link className="text-white" href="#">
                <span data-feather="shopping-cart"></span>
                Settings
              </Nav.Link>
            </li>
          </ul>
        </div>
      </Nav>
    </Navbar>
  );
}
