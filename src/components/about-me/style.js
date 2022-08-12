import styled from "styled-components";
import theme from "../../theme"

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    margin-left: 2rem;
    width: 100%;
    height: 40rem;
`

export const AboutText = styled.div`
    h1 {
        color: ${props => props.textSwicth ? theme.textColorLight : theme.textColorDark};
        text-align: left;
        text-justify: inter-word;
    }

    p {
        color: ${props => props.textSwicth ? theme.textColorLight : theme.textColorDark};
        text-align: justify;
        margin-right: 1rem;
    }
`

export const AboutImage = styled.img`
    width: 22rem;
    height: 25rem;
    border: 12px solid ${theme.aboutMeColor};
    border-radius: 46% 49% 55% 51%;
    margin-top: 2.5rem;
`