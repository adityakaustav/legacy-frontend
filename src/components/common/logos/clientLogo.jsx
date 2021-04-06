import React from "react";
import styled from "styled-components";
import {clientLogoFont} from "../../../Assets/Style/globalFontFamily";
import {regularFont} from "../../../Assets/Style/globalFontWeights";
import {title} from "../../../Assets/Style/globalTypography";

function clientLogo() {
  const LogoStyle = styled.div`
    font-family: ${clientLogoFont};
    font-weight: ${regularFont};
    font-size: ${title};
  `;
  return (
    <>
      <LogoStyle>UNIVERSITY</LogoStyle>
    </>
  );
}

export default clientLogo;
