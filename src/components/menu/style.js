import styled from "styled-components";
import theme from "../../theme"

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
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
`
