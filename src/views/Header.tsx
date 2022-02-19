import React from 'react';
import { SHeader, Nav, StyledSocialIcons } from '../resources/HeaderStyled';
import { Container, BorderedContainer } from '../resources/Container';
import { Button } from '../resources/Button';
import { Flex } from '../resources/FlexBox';
import { Image } from '../resources/Stores';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

function Header() {
  return (
    <div>
      <SHeader>
        <Container>
          <Nav>
            <h1>Samriddhi Lamichhane</h1>
            <BorderedContainer>
              <Flex>
                <StyledSocialIcons>
                  <a href="https://github.com/ssumri">
                    <FaGithub size={40} id="github" />
                  </a>
                </StyledSocialIcons>
                <StyledSocialIcons>
                  <a href="https://www.linkedin.com/in/samriddhi-lamichhane-b193431b5/">
                    <FaLinkedin size={40} id="linkedin" />
                  </a>
                  </StyledSocialIcons>
                <StyledSocialIcons>
                  <a href="https://drive.google.com/file/d/1qsFeEiIy-WG2Kcz_KZ5WZTpVEmPwT5Dj/view?usp=sharing" target="blank">
                    <FaFileAlt size={40} id="resume" />
                  </a>
                </StyledSocialIcons>
              </Flex>
            </BorderedContainer>
          </Nav>
        </Container>
      </SHeader>
    </div>
  );
}


export default Header;

