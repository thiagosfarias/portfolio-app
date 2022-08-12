import styled from "styled-components";
import theme from '../../theme'

export const Main = styled.div`
    width: 100%;
    height: 40rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;

    h1{
        margin-left: 1rem;
    }

    @media only screen and (max-width: 630px) {
        margin-bottom: 0;
    }

    @media only screen and (max-width: 380px) {
        margin-left: 0;
    }

    
`

export const Project = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    border-left: 10px solid ${theme.projectsColor};
    :hover {
        border: 10px solid ${theme.projectsColor};
    }
    border-radius: 15%;

    @media only screen and (max-width: 630px) {
        margin-bottom: 0;
        margin-top:0;
    }

    @media only screen and (max-width: 380px) {
        margin-left: 0;
    }

`

export const ProjectHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 0.5rem;

    .dates{
        display: grid;
        grid-template-rows: 1fr 1fr;
        margin-right: 1rem;
        justify-content: center;
    }

    h1 {
        font-size: ${theme.textTitle};
        color: ${theme.textColorLight}
    }

    p {
        font-size: ${theme.sideText};
        margin: 0;
        color: ${theme.textColorLight}
    }

    @media only screen and (max-width:400px){
        margin-right: 0.7rem;
        p {
            font-size: 0.5rem;
        }
    }

    
`

export const ProjectBody = styled.div`
    p {
        font-size: ${theme.textBody};
        margin-left: 0.7rem;
        color: ${theme.textColorLight}
    }

    @media only screen and (max-width:400px){
        font-size: 0.8rem;
        max-width: 350px;
    }
`

