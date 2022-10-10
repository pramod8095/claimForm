import React from "react";

export default function ClaimPreForm() {
  return (
    <div style={{ lineHeight: "2" }}>
      <div
        class="card"
        style={{
          marginLeft: "200px",
          marginRight: "200px",
          overflow: "scroll",
          height: "600px",
          marginTop: "20px",
        }}
      >
        <div class="card-body">
          <b
            style={{
              fontSize: "25px",
            }}
          >
            Claim Pre-Qualification
          </b>
          <br />
          To get started with the claim process, please answer the following
          questions
          <br /> <br />
          <div>
            <b>Do you still have possession of the device</b> <br />
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="devicepossession"
                id="flexRadioDefault1"
                required
              />
              <label class="form-check-label">Yes, I have the device</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="devicepossession"
                id="flexRadioDefault2"
                required
              />
              <label class="form-check-label">No,I dont have the device </label>
            </div>
          </div>
          <br /> <br />
          <div>
            <b>Is your device damaged in some way?</b> <br />
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="damagecheck"
                id="flexRadioDefault1"
                required
              />
              <label class="form-check-label">Yes, I have the device</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="damagecheck"
                id="flexRadioDefault2"
                required
              />
              <label class="form-check-label">No,I dont have the device </label>
            </div>
          </div>
          <br /> <br />
          <b>
            Confirm the device Category, Brand and Model or select this
            information below.
          </b>
          <br />
          Device Type
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">Laptop</option>
            <option value="2">Tab</option>
            <option value="3">Mobile</option>
            <option value="4">Smart Appliance</option>
          </select>
          <br />
          Brand
          <select class="form-select" aria-label="">
            <option selected>Open this select menu</option>
            <option value="1">Apple</option>
            <option value="2">Google</option>
            <option value="3">Samsung</option>
            <option value="4">Blackberry</option>
          </select>
          <br />
          Model
          <select class="form-select" aria-label="">
            <option selected>Open this select menu</option>
            <option value="1">MacBook pro</option>
            <option value="2">Iphone</option>
            <option value="3">Mobile</option>
            <option value="4">Smart Devices</option>
          </select>
          <br />
          Device Nickname
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <br />
          Serial Number (optional)
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <br />
          Purchase Price
          <div class="input-group mb-3">
            <span class="input-group-text">$</span>
            <input type="text" class="form-control" />
          </div>
          <br />
          Purchase Date
          <div class="input-group mb-3">
            <input type="date" class="form-control" />
          </div>
          <br />
          Upon completion you'll be taken to our Assurant claim site
        </div>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          style={{
            width: "300px",
            borderRadius: "40px",
            marginLeft: "350px",
          }}
        >
          Start a Claim
        </button>
      </div>
    </div>
  );
}
