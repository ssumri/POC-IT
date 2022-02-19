import React from 'react';
import '../App.css';
import { SHeader, Nav, StyledSocialIcons } from '../resources/HeaderStyled';
import { Container, SloganContainer } from '../resources/Container';
import { Button } from '../resources/Button';
import { Flex } from '../resources/FlexBox';
import { Image } from '../resources/Stores';
import { PageItemWrapper } from '../resources/HelperComponents/ItemWrapper';
import { PageText } from '../resources/HelperComponents/PageText';
import { Wrapper, Searchbox} from '../resources/HelperComponents/styles';
import { FaShoppingCart } from 'react-icons/fa';
import logopic from '../files/Official_POCit_Logo.png';



function Header() {
  return (
      <SHeader>
      <Container>
        <Nav>
            <img src={logopic} alt="Logo" width={20}/>
            <Button>
                <p> Home </p>
            </Button>
            <Button>
                <p> Best Sellers </p>
            </Button>
            <Button>
                <p> Search By Goods</p>
            </Button>
            <Button>
                <p> Spotlights </p>
            </Button>
            <Button>
                <p> Sales </p>
            </Button>
            <Searchbox> 
            </Searchbox>

            <Button> <p> Sign in </p> </Button>
            
            <Button> <p> Returns  </p></Button>
            <Button> <p> Orders </p> </Button>
            <Button> 
                <FaShoppingCart size={20} />
            </Button>
        </Nav>
        </Container>
      </SHeader>
  )
}


export default Header;

