import React from "react";
import { BrowserNav } from "../Navbar/BrowserNav";
import { BrowserView, MobileView } from "react-device-detect";
// import { Card, Image, Button } from "react-bootstrap";
// import "./Home.css";

export function Home() {
  return (
    <>
      <BrowserView>
        <BrowserNav />
      </BrowserView>

      <MobileView></MobileView>
    </>
  );
}
