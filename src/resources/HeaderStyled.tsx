import styled from 'styled-components';
import{ PageText as NavText} from "./HelperComponents/PageText"
import{ PageItemWrapper as NavItemWrapper} from "./HelperComponents/ItemWrapper"

export const Logo = styled.img`
    width: 6px;
    border:1px solid #131A22;
    padding: 1px 1px;
    cursor:pointer;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
`

export const SHeader = styled("header")`
  background-color: #ffffff;
  padding: 0px 0px;

  h1 {
    color: #92413a;
    font-size: 20px;
  }
`

export const Nav = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2px;

  @media( max-width: 768px ){
    flex-direciton: column;
  }
`

export const StyledSocialIcons = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #60412b;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }

  &:hover{
    opacity: 0.8;
    transform: scale(0.95);
    color: #06170e;
  }

`