import React from 'react';
import '../App.css';
import { Container, BorderedContainer } from '../resources/Container';
import { Button } from '../resources/Button';
import { SFooter } from '../resources/FooterStyled';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';


function Footer() {
    return (
        <SFooter>
            <Container> 
                <ul>
                    <FaEnvelope /> &ensp; sumriddhi9118@gmail.com
                </ul>
                <ul>
                    <FaPhone />
                    &ensp; (720) 438-8645
                </ul>
                <ul>
                    <FaMapMarkerAlt />
                    &ensp; Westminster, Colorado
                </ul>
            </Container>
        </SFooter>
    )
}

export default Footer;