import React from "react";
import { TopNav } from "../Navbar/TopNav";
import { SideNav } from "../Navbar/SideNav";
import { BrowserView, MobileView } from "react-device-detect";
import { Container, DropdownButton, Dropdown, Table } from "react-bootstrap";

export function Projects() {
  return (
    <>
      <BrowserView>
        <div className="row">
          <DropdownButton
            className="mb-3"
            id="dropdown-basic-button"
            title="Projects"
            variant="success"
            className="mx-auto"
          >
            <Dropdown.Item href="">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>

          <Container className="col-md-10">
            <Container style={{ marginTop: "4rem" }}>
              <DropdownButton
                className="mb-3"
                id="dropdown-basic-button"
                title="Projects"
                variant="success"
              >
                <Dropdown.Item href="">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Container>
            <Container>
              <Table striped bordered hover size="sm">
                <thead
                  className="text-white"
                  style={{ backgroundColor: "#3b3737" }}
                >
                  <tr>
                    <th>Labor Category</th>
                    <th>Resource Name</th>
                    <th>Bill Rate</th>
                    <th>Total Hours</th>
                    <th>Remaining Hours</th>
                    <th>Budget</th>
                    <th>Bill Rate</th>
                    <th>Bill Rate</th>
                    <th>Bill Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Dropdown button"
                      >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Container>
        </div>
        {/* <div className="col-md-2">
            <SideNav />
          </div> */}
        <TopNav />
      </BrowserView>

      <MobileView></MobileView>
    </>
  );
}
