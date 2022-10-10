import React from "react";

export default function Content1() {
  return (
    <div style={{ lineHeight: "60px" }}>
      <b>Please tell us what happened </b>
      <div>
        Date of Incident
        <input class="form-control" placeholder="Username" type="date" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Describe the issue or reason for your request
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Type here"
        ></textarea>
      </div>
      <div>
        Select the reason for your claim/request
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div>
        <input
          class="form-check-input"
          type="checkbox"
          style={{
            marginTop: "23px",
          }}
        />
        <label>
          &nbsp; I agree to <b style={{ color: "blue" }}>Terms of Use</b> and
          acknowledge that I have reviewed the Fraud Notice
        </label>
      </div>
    </div>
  );
}
