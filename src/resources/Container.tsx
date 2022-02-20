import styled from 'styled-components';


export const Container = styled("div")`
    width: 1000px;
    max-width: 100%;
    padding: 0 20px;
    margin: 0 auto;

    h4 {
        color: #364d32;
        justify-content: center;
        font-size: 20px;
        font-weight: 700;
    }
`;

export const SloganContainer = styled("div")`

    padding: 0 0;
    margin: 0 auto;
    background-color: #FDAE9C;
    width: 1000px;
    max-width: 100%;

    h1 {
        color: #000000;
        justify-content: center;
        font-size: 60px;
        font-weight: 700;
        text-align: center;
        margin: 5px;
    }
    h2 {
        color: #000000;
        justify-content: center;
        font-size: 40px;
        font-weight: 700;
        text-align: center;
        margin: 5px;
        padding: -5px -5px;
    }
`

export const BorderedContainer = styled("div")`
    width: 200px;
    max-width: 100%;
    padding: 2px 5px;

    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px #364d32;

`
export const ImageContainer = styled("div")`
    padding: 4px 4px;
    margin: 10px 2px;
    background-color: #ffffff;
    width: 1000px;
    max-width: 100%;
    justify-content: center;

    img {
        width: 98%;
        flex-direction: column;
        justify-content: center;

    }
`

export const FontContainer = styled("button")`
    padding: 1px 1px;
    margin: 3px 3px;
    flex: 1;


    background: transparent;
    color: #8448AD;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    text-decoration: none;
    border: none;

    &:hover {
        opacity: 0.8;
        transform: scale(0.95);
    }
    @media( max-width: 768px ){
        margin-bottom: 10px;
      }

`
