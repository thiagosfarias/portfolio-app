import styled from "styled-components";
import theme from "../../theme"

export const CanvasContainer = styled.div`
    display: grid;
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: inherit;
    align-items: center;
`
export const CanvasContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: 1rem;
    flex-direction: column;
    width: 100%;
    height: 100%;
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
`
