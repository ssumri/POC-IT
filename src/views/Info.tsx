import React from 'react';
import {Container, SloganContainer, ImageContainer} from '../resources/Container';
import {Button, CircularButtons, SloanButtons} from '../resources/Button';
import { Flex } from '../resources/FlexBox';
import sloganPic from '../files/SloganPic.png';
import categories from '../files/Categories.png';
import featured from '../files/Featured_Businesses.png';
import sloganText from '../files/Slogan_text.png';
import whyBlock from '../files/Why_Price.png';
import popular from '../files/Popular_Items.png';
import stories from '../files/Their_Stories.png';
// import {ListCard, SCard} from '../../resources/styled/CardsStyled';
// import { Image } from '../../resources/styled/Imagestyled';

function Info() {
    return (
        <>
            <SloganContainer>
                <Flex>
                <img src={sloganPic} alt="sloganPic" width={600}/>
                <h2>
                    <img src={sloganText} alt="sloganText" width={300}/>
                    <SloanButtons>
                        Shop now
                    </SloanButtons>
                </h2>
                
                </Flex>
            </SloganContainer>
            <ImageContainer>
                <img src={categories} alt="categories pic"/>
            </ImageContainer>
            <ImageContainer>
                <img src={featured} alt="featured pic" />
            </ImageContainer>
            <ImageContainer>
                <img src={popular} alt="Popular items pic" />
            </ImageContainer>
            <ImageContainer>
                <img src={stories} alt="Popular items pic" />
            </ImageContainer>
        </>
    );
}

export default Info;
