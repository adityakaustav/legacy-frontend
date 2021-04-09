import React from "react";
import styled from "styled-components";
// eslint-disable-next-line comma-dangle
import {brandLogoFont} from "../../../Assets/Style/globalFontFamily";
// eslint-disable-next-line comma-dangle
import {regularFont} from "../../../Assets/Style/globalFontWeights";
// eslint-disable-next-line comma-dangle
import {title} from "../../../Assets/Style/globalTypography";

function brandLogo() {
  // eslint-disable-next-line no-unused-vars
  const LogoStyle = styled.div`
    font-family: ${brandLogoFont};
    font-weight: ${regularFont};
    font-size: ${title};
    letter-spacing: 1.4px;
  `;
  return (
    <>
      <LogoStyle>UNIVERGENCE</LogoStyle>
    </>
  );
}

export default brandLogo;
