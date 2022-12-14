import styled from "styled-components";
import theme from '../../theme'

export const Educations = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    border-left: 10px solid ${theme.educationColor};
    :hover {
        border: 10px solid ${theme.educationColor};
    }
    border-radius: 15%;

    @media only screen and (max-width: 630px) {
        margin-bottom: 0;
        margin-top:0;
    }

    @media only screen and (max-width: 380px) {
        margin-left: 0;
    }

    h1{
        margin-left: 1rem;
    }

`

export const EducationHeader = styled.div`
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

export const EducationBody = styled.div`
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