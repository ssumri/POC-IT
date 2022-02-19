import{ PageItemWrapper as NavItemWrapper} from "./ItemWrapper"
import styled from 'styled-components';

export const Wrapper = styled(NavItemWrapper)`
    display: flex;
    flex-direction: ${(props)=>props.flexDirection ?  props.flexDirection  : "column"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
    padding: .1em;
    cursor:pointer;
    border:1px solid transparent;

    &:hover{
        border:1px solid #ffffff;
        border-radius: .2em;
    }
     @media(max-width:850px){
        display: none;
    }
`

export const Searchbox = styled.input`
    display:flex;
    flex-direction:row;
    border:1px solid lightgray;
    padding: 2px 2px;
    background-color: #ffffff;
    border-radius: 100px;
    flex-grow: 2;

    @media(max-width:850px){
       border-radius: .2em;
       margin: .3em 0;
    }
`
export const SearchIcon = styled.span`
    background-color: transparent;

    color: #131A22;
    margin-left: -10px;
    border-radius: 0em .2em .2em 0em ;
    padding: .32em .5em;
    cursor: pointer;
    transition: all 250ms ease;

    &:hover{
        background-color:#ff9900;
    }

     @media(max-width:850px){
        display: none;
    }
` 