import React from "react";
import Foo from "../../Assests/assurant-footer-logo.png";
import SSLLogo from "../../Assests/ssl-logo.jpeg";
import PCILogo from "../../Assests/pci-logo.jpeg";

export default function Footer() {
  return (
    <div>
      <nav class="navbar fixed-bottom navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src={Foo}
              alt="#"
              style={{
                height: "40px",
              }}
            />
            <br />
            <br />
            <p style={{ fontSize: "14px", color: "white" }}>
              © 2022 Pramod, Inc. All right Reserved
            </p>
          </a>
          <a class="navbar-brand" href="#">
            <img
              src={PCILogo}
              style={{ float: "right", marginRight: "30px" }}
            />
            &nbsp;
            <img src={SSLLogo} style={{ float: "right" }} />
            <br />
            <br />
            <div>
              <ul
                class="navbar-nav"
                style={{
                  flexDirection: "row",
                  fontSize: "15px",
                  width: "10%",
                }}
              >
                <li class="nav-item">
                  <a class="nav-link active">Support Details &nbsp;</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">Privacy Policy&nbsp;</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">Terms of Service&nbsp;</a>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}
