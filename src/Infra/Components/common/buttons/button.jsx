import React from "react";
import styled from "styled-components";
import {
  currentPrimaryBlue,
  currentPrimaryLight,
  currentTertiaryLight,
  currentSecondaryLight,
  currentPrimaryDark,
  currentPrimaryRed,
  // eslint-disable-next-line comma-dangle
  // eslint-disable-next-line prettier/prettier
  currentPrimaryGreen
} from "../../../Assets/Style/globalColors";
import {
  mediumFont,
  // eslint-disable-next-line comma-dangle
  // eslint-disable-next-line prettier/prettier
  regularFont
} from "../../../Assets/Style/globalFontWeights";
import {
  buttonLarge,
  buttonMedium,
  // eslint-disable-next-line comma-dangle
  // eslint-disable-next-line prettier/prettier
  buttonSmall
} from "../../../Assets/Style/globalTypography";

const StyledButton = styled.button`
  outline: none;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
  width: fit-content;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`;
// -------------Primary Buttons---------------
const PrimaryButton = styled(StyledButton)`
  background-color: ${currentPrimaryBlue};
  color: ${currentPrimaryLight};
`;

export const PrimaryButtonLarge = styled(PrimaryButton)`
  font-size: ${buttonLarge};
  font-weight: ${mediumFont};
  padding: 10px 30px;
`;

export const PrimaryButtonMedium = styled(PrimaryButton)`
  font-size: ${buttonMedium};
  font-weight: ${regularFont};
  padding: 8px 24px;
`;

export const PrimaryButtonSmall = styled(PrimaryButton)`
  font-size: ${buttonSmall};
  font-weight: ${regularFont};
  padding: 6px 18px;
`;

// -------------Secondary Buttons---------------

const SecondaryButton = styled(StyledButton)`
  background-color: ${currentTertiaryLight};
  color: ${currentPrimaryDark};
`;

export const SecondaryButtonLarge = styled(SecondaryButton)`
  font-size: ${buttonLarge};
  font-weight: ${mediumFont};
  padding: 10px 30px;
`;

export const SecondaryButtonMedium = styled(SecondaryButton)`
  font-size: ${buttonMedium};
  font-weight: ${regularFont};
  padding: 8px 24px;
`;

export const SecondaryButtonSmall = styled(SecondaryButton)`
  font-size: ${buttonSmall};
  font-weight: ${regularFont};
  padding: 6px 18px;
`;

// -------------Danger Buttons---------------
const DangerButton = styled(StyledButton)`
  background-color: ${currentPrimaryRed};
  color: ${currentPrimaryLight};
`;

export const DangerButtonLarge = styled(DangerButton)`
  font-size: ${buttonLarge};
  font-weight: ${mediumFont};
  padding: 10px 30px;
`;

export const DangerButtonMedium = styled(DangerButton)`
  font-size: ${buttonMedium};
  font-weight: ${regularFont};
  padding: 8px 24px;
`;

export const DangerButtonSmall = styled(DangerButton)`
  font-size: ${buttonSmall};
  font-weight: ${regularFont};
  padding: 6px 18px;
`;

// -------------Success Buttons---------------
const SuccessButton = styled(StyledButton)`
  background-color: ${currentPrimaryGreen};
  color: ${currentPrimaryLight};
`;

export const SuccessButtonLarge = styled(SuccessButton)`
  font-size: ${buttonLarge};
  font-weight: ${mediumFont};
  padding: 10px 30px;
`;

export const SuccessButtonMedium = styled(SuccessButton)`
  font-size: ${buttonMedium};
  font-weight: ${regularFont};
  padding: 8px 24px;
`;

export const SuccessButtonSmall = styled(SuccessButton)`
  font-size: ${buttonSmall};
  font-weight: ${regularFont};
  padding: 6px 18px;
`;

// -------------Disabled Buttons---------------
const DisabledButton = styled(StyledButton)`
  background-color: ${currentSecondaryLight};
  color: ${currentPrimaryDark};
  pointer-events: none;
  cursor: default;
`;

export const DisabledButtonLarge = styled(DisabledButton)`
  font-size: ${buttonLarge};
  font-weight: ${mediumFont};
  padding: 10px 30px;
`;

export const DisabledButtonMedium = styled(DisabledButton)`
  font-size: ${buttonMedium};
  font-weight: ${regularFont};
  padding: 8px 24px;
`;

export const DisabledButtonSmall = styled(DisabledButton)`
  font-size: ${buttonSmall};
  font-weight: ${regularFont};
  padding: 6px 18px;
`;
