import React from 'react';
import '../App.css';
import { Container, BorderedContainer } from '../resources/Container';
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
                Check us out on socials!
                <ul> 
                    <FaInstagram size={30}/> 
                    <FaPinterest size={30}/>
                    <FaTwitter size={30}/>
                    <FaYoutube size={30}/>
                    <FaFacebook size={30}/>
                </ul>
            </ul>
            </Container>
            </Flex>
        </SFooter>
    )
}

export default Footer;