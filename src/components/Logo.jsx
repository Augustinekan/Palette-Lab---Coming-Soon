import React from 'react'
import styled from 'styled-components';
import mainLogo from "../assets/logo_plain.png"


const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 575px) {
    display:flex;
    color: #0174C5;
  }
`;
const LogoImage = styled.img`
  /* Set the initial size for the logo. */
  width: 100px;
  height: 100px;
  margin-left: 15rem;

  /* Define responsive sizing using media queries. */
  @media (max-width: 768px) {
    /* Adjust the size for smaller screens. */
    width: 80px;
    height: 80px;
    margin-left: 3.5rem;

  }

  @media (max-width: 480px) {
    /* Adjust the size for even smaller screens. */
    width: 60px;
    height: 60px;
  }
`;

function Logo() {
  return (
      <LogoContainer>
          <LogoImage src={mainLogo} alt="Logo" />
          <div className="app-title">Palette Lab</div>
    </LogoContainer>
  )
}

export default Logo