import React from 'react';
import '../App.css';
import { Container, BorderedContainer, FontContainer } from '../resources/Container';
import { Button } from '../resources/Button';
import { SFooter } from '../resources/FooterStyled';
import { FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Flex } from '../resources/FlexBox';


function Footer() {
    return (
        <SFooter>
            <Flex>            
            <Container> 
                <ul>
                    About
                </ul>
            </Container>
            <Container> 
                <ul>
                    Help
                </ul>
            </Container>
            <Container> 
                <ul>
                    Contact Us
                </ul>
            </Container>
            <Container>
            <ul>
                <Flex>
                <FontContainer>
                    <FaInstagram size={25} /> 
                </FontContainer>
                <FontContainer>
                    <FaPinterest size={25}/>
                </FontContainer>
                <FontContainer>
                    <FaTwitter size={25}/>
                </FontContainer>
                <FontContainer>
                    <FaYoutube size={25}/>
                </FontContainer>
                <FontContainer>
                    <FaFacebook size={25}/>
                </FontContainer>
                </Flex>
            </ul>
            </Container>
            </Flex>
        </SFooter>
    )
}

export default Footer;