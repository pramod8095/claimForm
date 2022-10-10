import React from "react";
import ClaimPreForm from "./ClaimPreForm";

export default function PreClaim() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#C0F9F7",
          height: "50px",
          fontSize: "20px",
        }}
      >
        <b
          style={{
            marginLeft: "30px",
          }}
        >
          File a Claim
        </b>
      </div>
      <ClaimPreForm />
    </>
  );
}
