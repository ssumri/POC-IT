import styled from 'styled-components';


export const Button = styled("button")`
    border-radius: 30px;
    border: none;
    cursor: pointer;
    font-size: 10px;
    font-weight: 400;
    padding: 5px 5px;
    margin-top: 1px;
    line-height: 1;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;

    background: transparent;
    color: #8448AD;

    &:hover {
        opacity: 0.8;
        transform: scale(0.95);
    }
    

    @media( max-width: 768px ){
        margin-bottom: 10px;
      }
`
export const CircularButtons = styled("button")`
    border-radius: 100px;
    border: none;
    cursor: pointer;
    font-size: 10px;
    font-weight: 400;
    padding: 5px 5px;
    margin-top: 1px;
    line-height: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background: transparent;
    color: #CEA7EF;

    &:hover {
        opacity: 0.8;
        transform: scale(0.95);
    }
    @media( max-width: 768px ){
        margin-bottom: 10px;
      }
`

export const SloanButtons = styled("button")`
    border-radius: 70px;
    border: none;
    cursor: pointer;
    padding: 10px 24px;
    font-size: 25px;
    font-weight: 400;
    line-height: 1;
    flex-direction: column;
    justify-content: center;
    margin: 10px;

    background: #8448AD;
    color: #ffffff;

    &:hover {
        opacity: 0.8;
        transform: scale(0.95);
    }
    @media( max-width: 768px ){
        margin-bottom: 10px;
      }
`

