import React from 'react';
import {Container, SloganContainer} from '../resources/Container';
import {Button, CircularButtons, SloanButtons} from '../resources/Button';
import { Flex } from '../resources/FlexBox';
import sloganPic from '../files/SloganPic.png';
// import {ListCard, SCard} from '../../resources/styled/CardsStyled';
// import { Image } from '../../resources/styled/Imagestyled';

function Info() {
    return (
        <>
            <SloganContainer>
                <Flex>
                <img src={sloganPic} alt="sloganPic" width={600}/>
                <h2>
                    Go beyond your pocket
                    <h1>
                        With POCit
                    </h1>
                    <SloanButtons>
                        Shop now
                    </SloanButtons>
                </h2>
                
                </Flex>
            </SloganContainer>
            <Flex>
                <CircularButtons>
                    Arts
                </CircularButtons>
                <CircularButtons>
                    Arts
                </CircularButtons>
                <CircularButtons>
                    Arts
                </CircularButtons>
                <CircularButtons>
                    Arts
                </CircularButtons>
            </Flex>
        </>
    );
}

export default Info;
