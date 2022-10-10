import React from "react";
import Laptop from "./../../../Assests/shopping.png";
export default function DetailsPanel() {
  return (
    <div
      className="card mb-3"
      style={{
        maxWidth: "340px",
        padding: "20px",
      }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={{ Laptop }}
            className="img-fluid rounded-start"
            alt="#"
            style={{
              width: "80px",
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              <b>Diane's Macbook</b>
            </h5>
            <p className="card-text">MacBook Pro</p>
          </div>
        </div>
      </div>
      <div style={{ width: "18rem" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Policy Number</li>
          <li class="list-group-item">Serial Number</li>
          <li class="list-group-item">Policy Start Date</li>
          <li class="list-group-item">Policy End Date</li>
        </ul>
      </div>
    </div>
  );
}
