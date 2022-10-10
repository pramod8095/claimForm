import styled, { keyframes } from "styled-components";

const springDown = keyframes`
  0% { transform: scale(1.2); }
  35%, 100% { transform: scale(1); }
`;

const shake = keyframes`
  0% { transform: translateX(0); }
  15% { transform: translateX(0.2rem); }
  30%, 60% { transform: translateX(-0.4rem); }
  45%, 75% { transform: translateX(0.4rem); }
  90% { transform: translateX(-0.2rem); }
  100% { transform: translateX(0); }
`;

export const StyledStepProgressWrapper = styled.div``;

export const StyledStepBarContainer = styled.ul`
  margin: 0 0 3rem 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const StyledSteps = styled.li`
  list-style: none;
  position: relative;
  text-align: center;
  flex: 1 1 auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    height: 3px;
    width: 100%;
    right: 50%;
    transform: translateY(-50%);
    z-index: -1;
    background: linear-gradient(to left, #e7eaf3 50%, #4db193 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: background-position 200ms ease-in-out;
  }

  &:first-child::before {
    content: none;
  }

  & .step-index,
  & .step-icon {
    background-color: #e7eaf3;
    color: white;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    line-height: 2.5rem;
    display: inline-flex;
    transform-origin: center;
    align-items: center;
    justify-content: center;
  }

  .step-index,
  .step-icon {
    transition: background-color 250ms ease;
  }

  & .step-label {
    color: ${(props) => (!props.selectedStep ? "#b7b7b7" : "#387cf6")};
    /* color: #b7b7b7; */
    position: absolute;
    top: 115%;
    left: 50%;
    transform: translateX(-50%);
  }

  & .step-label-title {
    font-weight: bold;
  }

  & .step-label-subtitle {
    display: block;
    font-size: 0.85rem;
  }

  &.completedStelLabel .step-icon {
    background-color: #4db193;
    color: white;
    /* animation: ${springDown} 400ms ease-in-out forwards; */

    &:hover {
      background-color: #42997f;
    }
  }

  &.activeStepLabel .step-index {
    background-color: #387cf6;
    color: white;
    animation: ${springDown} 400ms ease-out forwards;

    &:hover {
      background-color: #316ddb;
    }
  }

  &.completedStelLabel::before,
  &.activeStepLabel::before,
  &.errorStepLabel::before {
    background-position: left bottom;
  }

  &.errorStepLabel .step-icon {
    color: white;
    background-color: #bb392d;
    animation: ${shake} 350ms ease-in-out forwards;
  }
`;

export const StyledContent = styled.div`
  min-height: 100px;
`;

export const StyledFooter = styled.div`
  display: flex;
`;
