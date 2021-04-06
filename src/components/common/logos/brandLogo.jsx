import React from "react";
import styled from "styled-components";
import {brandLogoFont} from "../../../Assets/Style/globalFontFamily";
import {regularFont} from "../../../Assets/Style/globalFontWeights";
import {title} from "../../../Assets/Style/globalTypography";

function brandLogo() {
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
