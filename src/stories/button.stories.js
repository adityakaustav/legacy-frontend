import React from "react";
import {
  PrimaryButtonLarge,
  PrimaryButtonMedium,
  PrimaryButtonSmall,
  SecondaryButtonLarge,
  SecondaryButtonMedium,
  SecondaryButtonSmall,
  DangerButtonLarge,
  DangerButtonMedium,
  DangerButtonSmall,
  SuccessButtonLarge,
  SuccessButtonMedium,
  SuccessButtonSmall,
  DisabledButtonLarge,
  DisabledButtonMedium,
  // eslint-disable-next-line comma-dangle
  DisabledButtonSmall,
} from "../Infra/Components/common/buttons/button.jsx";

export default {
  title: "Button",
  component: PrimaryButtonLarge,
  PrimaryButtonMedium,
  PrimaryButtonSmall,
  SecondaryButtonLarge,
  SecondaryButtonMedium,
  SecondaryButtonSmall,
  DangerButtonLarge,
  DangerButtonMedium,
  DangerButtonSmall,
  SuccessButtonLarge,
  SuccessButtonMedium,
  SuccessButtonSmall,
  DisabledButtonLarge,
  DisabledButtonMedium,
  // eslint-disable-next-line comma-dangle
  DisabledButtonSmall,
};

export const LargePrimary = () => <PrimaryButtonLarge>Primary</PrimaryButtonLarge>;
export const MediumPrimary = () => <PrimaryButtonMedium>Primary</PrimaryButtonMedium>;
export const SmallPrimary = () => <PrimaryButtonSmall>Primary</PrimaryButtonSmall>;

export const LargeSecondary = () => (
  <SecondaryButtonLarge>Secondary</SecondaryButtonLarge>
);
export const MediumSecondary = () => (
  <SecondaryButtonMedium>Secondary</SecondaryButtonMedium>
);
export const SmallSecondary = () => (
  <SecondaryButtonSmall>Secondary</SecondaryButtonSmall>
);

export const LargeDanger = () => <DangerButtonLarge>Danger</DangerButtonLarge>;
export const MediumDanger = () => <DangerButtonMedium>Danger</DangerButtonMedium>;
export const SmallDanger = () => <DangerButtonSmall>Danger</DangerButtonSmall>;

export const LargeSuccess = () => <SuccessButtonLarge>Success</SuccessButtonLarge>;
export const MediumSuccess = () => <SuccessButtonMedium>Success</SuccessButtonMedium>;
export const SmallSuccess = () => <SuccessButtonSmall>Success</SuccessButtonSmall>;

export const LargeDisabled = () => <DisabledButtonLarge>Disabled</DisabledButtonLarge>;
export const MediumDisabled = () => <DisabledButtonMedium>Disabled</DisabledButtonMedium>;
export const SmallDisabled = () => <DisabledButtonSmall>Disabled</DisabledButtonSmall>;
