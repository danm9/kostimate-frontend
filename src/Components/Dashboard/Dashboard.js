import React from "react";
import { TopNav } from "../Navbar/TopNav";
import { SideNav } from "../Navbar/SideNav";
import { BrowserView, deviceDetect, MobileView } from "react-device-detect";
import { Container, Table } from "react-bootstrap";
// import "./Home.css";

export function Dashboard() {
  return (
    <>
      <BrowserView>
        <div className="row">
          <div className="col-md-2">
            <SideNav />
          </div>

          <Container className="col-md-10">
            <Container style={{ marginTop: "4rem" }}>
              <h2 className="mb-3">Projects</h2>
              <Table striped bordered hover>
                <thead
                  className="text-white"
                  style={{ backgroundColor: "#3b3737" }}
                >
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
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

        <TopNav />
      </BrowserView>

      <MobileView></MobileView>
    </>
  );
}
