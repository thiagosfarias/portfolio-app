import styled from "styled-components";
import theme from "../../theme"

export const CanvasContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    background-color: ${theme.socialColor};
    height: inherit;
`
export const CanvasContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-left: 5rem;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const ButtonDarkMode = styled.button`
    width: 7rem;
    height: 4rem;
    background-color: ${theme.backgroudColor};
    border: solid 8px ${theme.educationColor};
    box-sizing: border-box;
    border-radius: 44% 38% 50% 38%;
`