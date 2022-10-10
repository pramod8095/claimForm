import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
import {
  StyledStepBarContainer,
  StyledStepProgressWrapper,
  StyledSteps,
  StyledContent,
  StyledFooter,
} from "./StepProgress.styled";

const StepProgress = memo(
  ({ startingStep, onSubmit, steps }) => {
    const [selectedStep, setSelectedStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState([]);
    const [errorOnStep, setErrorOnStep] = useState();

    useEffect(() => {
      if (steps.length) setCompletedSteps(new Array(steps.length).fill(false));
    }, []);

    useEffect(() => {
      setSelectedStep(startingStep);
    }, [startingStep]);

    function handlePreviousClick() {
      console.log(selectedStep);
      if (selectedStep - 1 >= 0) {
        setErrorOnStep();

        setCompletedSteps((p) => {
          p[selectedStep - 1] = false;
          return p;
        });
        setSelectedStep((p) => p - 1);
      }
    }

    function handleNextClick() {
      console.log("seleted + 1: ", selectedStep + 1);
      console.log("len: ", steps.length);

      if (selectedStep + 1 < steps.length) {
        const validator = steps[selectedStep].validator;
        let isStateValid = true;
        if (validator) isStateValid = validator();

        if (isStateValid) {
          setErrorOnStep();
          setCompletedSteps((p) => {
            p[selectedStep] = true;
            return p;
          });
          setSelectedStep((p) => p + 1);
          return;
        } else {
          setErrorOnStep(selectedStep);
        }
      }
    }

    function submitSteper() {
      if (onSubmit) onSubmit();
    }

    function getLabelStyle(index) {
      if (completedSteps[index]) return "completedStelLabel";
      if (errorOnStep === index) return "errorStepLabel";
      return selectedStep === index ? "activeStepLabel" : "stepLabel";
    }

    return (
      <StyledStepProgressWrapper>
        <StyledStepBarContainer>
          {steps.map((step, i) => (
            <StyledSteps
              key={`${step.label + step.title + step.subtitle}`}
              className={getLabelStyle(i)}
              selectedStep={selectedStep === i}
            >
              {completedSteps[i] && (
                <span className="step-icon">
                  <svg
                    width="1.5rem"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3.5L4.5 7.5L12 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              )}

              {errorOnStep === i && <span className="step-icon">!</span>}
              {!completedSteps[i] && errorOnStep !== i && (
                <span className="step-index">{i + 1}</span>
              )}
              <div className="step-label">
                <span className="step-label-title">{step.label}</span>
              </div>
            </StyledSteps>
          ))}
        </StyledStepBarContainer>

        <StyledContent className="step-content">
          {steps[selectedStep] && steps[selectedStep].content}
        </StyledContent>

        <StyledFooter>
          {
            <button
              type="button"
              class="btn btn-light"
              onClick={handlePreviousClick}
              style={{
                marginLeft: "50px",
              }}
            >
              previous
            </button>
          }

          {selectedStep + 1 === steps.length ? (
            <button
              type="button"
              class="btn btn-primary"
              onClick={submitSteper}
              style={{ marginLeft: "450px" }}
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleNextClick}
              style={{ marginLeft: "450px" }}
            >
              Next
            </button>
          )}
        </StyledFooter>
      </StyledStepProgressWrapper>
    );
  },
  () => false
);

StepProgress.propTypes = {
  startingStep: PropTypes.number,
  onSubmit: PropTypes.func,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      subtitle: PropTypes.string,
      name: PropTypes.string,
      content: PropTypes.node,
      validator: PropTypes.func,
    })
  ),
};

StepProgress.defaultProps = {
  startingStep: 0,
  onSubmit: () => {},
  steps: [
    {
      label: "Step 1",
      subtitle: "10%",
      name: "step 1",
      content: <p> asd </p>,
      validator: null,
    },
  ],
};

export default StepProgress;
