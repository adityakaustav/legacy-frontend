import React from "react";
import styled from "styled-components";
// eslint-disable-next-line comma-dangle
import {clientLogoFont} from "../../../Assets/Style/globalFontFamily";
// eslint-disable-next-line comma-dangle
import {regularFont} from "../../../Assets/Style/globalFontWeights";
// eslint-disable-next-line comma-dangle
import {title} from "../../../Assets/Style/globalTypography";

export const AccountLogo = styled.div`
  font-family: ${clientLogoFont};
  font-weight: ${regularFont};
  font-size: ${title};
`;
