import styled from "styled-components";
import theme from "../../theme"

export const CanvasContainer = styled.div`
    display: grid;
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: inherit;
    align-items: center;

    @media only screen and (max-width: 630px) {
        display: flex;
        flex-direction: column;
    }
`
export const CanvasContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: 1rem;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    height: 100%;

    @media only screen and (max-width: 630px) {
        max-width: 500px;
        justify-content: center;
    }

`

export const ButtonDarkMode = styled.button`
    width: 7rem;
    height: 4rem;
    margin-top: 1rem;
    margin-left: 2rem;
    background-color: ${props => props.switch ? theme.backgroudColorWhite : theme.backgroudColorDark};
    color: ${props => props.switch ? theme.backgroudColorDark : theme.backgroudColoLight};
    border: solid 8px gray;
    box-sizing: border-box;
    border-radius: 44% 38% 50% 38%;

    @media only screen and (max-width: 680px) {
        width: 6rem;
        height: 3rem;
    }

    @media only screen and (max-width: 620px) {
        width: 6rem;
        height: 3rem;
        border: none;
        background-color: gray;
        color: ${theme.backgroudColorDark};
        margin-top: 0;
    }

    @media only screen and (max-width: 420px) {
        width: 3rem;
        height: 1rem;
    }
`
