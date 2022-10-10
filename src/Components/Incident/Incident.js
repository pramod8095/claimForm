import React, { useState } from "react";
import DetailsPanel from "../ProgressBar/Contents/DetailsPanel";
import StepProgress from "./../ProgressBar/StepProgress";
import Content1 from "../ProgressBar/Contents/Content1";
import Content2 from "../ProgressBar/Contents/Content2";
import Content3 from "../ProgressBar/Contents/Content3";
import Content4 from "../ProgressBar/Contents/Content4";

function Incident() {
  const [nome, setNome] = useState("eu");
  const [showSuccess, setShowSuccess] = useState(false);

  const onS = () => {
    if (nome) setShowSuccess(true);
  };

  const content1 = () => (
    <div>
      <Content1 />
    </div>
  );

  const content2 = () => (
    <div>
      <Content2 />
    </div>
  );

  const content3 = () => (
    <div>
      <Content3 />
    </div>
  );
  const content4 = () => (
    <div>
      <Content4 />
    </div>
  );

  const steps = [
    {
      label: "Step 1",
      subtitle: "AAAA",
      name: "step 1",
      content: content1(),
      validator: () => {
        return false || true;
      },
    },
    {
      label: "Step 2",
      subtitle: "",
      name: "step 2",
      content: content2(),
      validator: () => {
        if (nome !== "") {
          return true;
        }
        return false;
      },
    },
    {
      label: "Step 3",
      subtitle: "",
      name: "step 3",
      content: content3(),
      validator: () => {
        return true;
      },
    },
    {
      label: "Step 4",
      subtitle: "",
      name: "step 4",
      content: content4(),
      // validator: () => {},
    },
  ];

  return (
    <div>
      <div
        className="card"
        style={{
          width: "46rem",
          marginLeft: "20rem",
          float: "left",
          padding: "20px",
        }}
      >
        <div className="card-header">Incident Information</div>
        <StepProgress steps={steps} onSubmit={onS} />
        {showSuccess && "irraDEUCERTOAQ?"}
      </div>
      <DetailsPanel />
    </div>
  );
}

export default Incident;
