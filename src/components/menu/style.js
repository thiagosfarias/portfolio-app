import styled from "styled-components";
import theme from "../../theme"

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 630px) {
        margin-left: 3rem;
    }

    @media only screen and (max-width: 420px) {
        margin-right: 1rem;
    }


`

export const MenuNav = styled.nav`
    button {
        margin-top: 2rem;
        width: 10rem; 
        height: 8rem;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        background-color: ${theme.backgroudColoLight};
        border-radius: 49% 44% 39% 37%;
        font-size: 1rem;
        font-weight: 500;

        @media only screen and (max-width: 630px) {
            margin-right: 10px;
            align-self: center;
            .socialBt, .projectsBt {
                margin-left: 0;
            }
        }

        a {
            text-decoration: none;
            color: ${theme.backgroudColorDark}
        }
    }

        .socialBt {
            border: 10px solid ${theme.socialColor};
            margin-left: 10rem;
        }
        
        .socialBt:hover{
           background-color: ${theme.socialColor};
        }

        .aboutMeBt {
            border: 10px solid ${theme.aboutMeColor}
        }
        
        .aboutMeBt:hover{
           background-color: ${theme.aboutMeColor};
        }

        .educationBt {
            border: 10px solid ${theme.educationColor};
            margin-left: 10rem;
        }
        
        .educationBt:hover{
           background-color: ${theme.educationColor};
        }

        .projectsBt {
            border: 10px solid ${theme.projectsColor}
        }
        
        .projectsBt:hover{
           background-color: ${theme.projectsColor};
        }

        @media only screen and (max-width: 800px) {
            .socialBt, .educationBt {
                margin-left: 0;
            }
        }

        @media only screen and (max-width: 680px) {
            .socialBt, .educationBt, .aboutMeBt, .projectsBt {
                width: 6rem;
                height: 5rem;
            }
        }

        @media only screen and (max-width: 630px) {
            .socialBt, .educationBt, .aboutMeBt, .projectsBt {
                width: 6rem;
                height: 5rem;
            }
        }

        @media only screen and (max-width: 630px) {
            .socialBt, .educationBt, .aboutMeBt, .projectsBt {
                width: 4rem;
                height: 2rem;
                border: none;
            }

            .socialBt{
                background-color: ${theme.socialColor};
            }

            .educationBt{
                background-color: ${theme.educationColor};
            }

            .aboutMeBt{
                background-color: ${theme.aboutMeColor};
            }

            .projectsBt{
                background-color: ${theme.projectsColor};
            }
        }

        @media only screen and (max-width: 630px) {
            display: flex;
            flex-direction: row;
        }
`
