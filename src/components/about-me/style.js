import styled from "styled-components";
import theme from "../../theme"

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-left: 2rem;
    width: 100%;
    max-width: 800px;
    height: 40rem;

    @media only screen and (max-width:580px){
        margin-left: 0;
    }

    @media only screen and (max-width:400px){
        margin-top: 0;
    }
`

export const AboutText = styled.div`
    h1 {
        color: ${props => props.textSwicth ? theme.textColorLight : theme.textColorDark};
        text-align: left;
        text-justify: inter-word;
        font-size: ${theme.textTitle};
    }

    p {
        color: ${props => props.textSwicth ? theme.textColorLight : theme.textColorDark};
        text-align: justify;
        margin-right: 1rem;
        font-size: ${theme.textBody};
    }

    @media only screen and (max-width:400px){
        p {
            font-size: 0.9rem;
        }
        max-width: 350px;
    }
`

export const AboutImage = styled.img`
    width: 22rem;
    height: 25rem;
    border: 12px solid ${theme.aboutMeColor};
    border-radius: 46% 49% 55% 51%;
    margin-top: 2.5rem;

    @media only screen and (max-width: 800px) {
        width: 18rem;
        height: 20rem;
    }

    @media only screen and (max-width: 680px) {
        width: 16rem;
        height: 18rem;
    }

    @media only screen and (max-width: 510px) {
        width: 14rem;
        height: 16rem;
    }

    @media only screen and (max-width: 360px) {
        width: 10rem;
        height: 10rem;
    }
`