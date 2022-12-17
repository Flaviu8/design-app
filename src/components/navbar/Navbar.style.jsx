import styled from "@emotion/styled";


export const NavbarContainer = styled.div `
    display: flex;
    width: 800px;
    background-color: black;
    height: 70px;
    margin-left: 2em;
    margin-top: 5em;
    border-radius: 1em;
    & button {
        width: 170px;
        height: 40px;
        margin-left: 10em;
        margin-top: 1em;
        border-radius: 1em;
        background-color: rgb(204, 63, 157);
        cursor: pointer;
        color: white;
    }

`;


export const TitleNavbar = styled.div `
   display: flex;
   margin-left: 2em;
   align-items: center;
   
   
   & h4 {
    display: flex;
    color: white;
    margin-left: 1em;
    font-size: 1.3em;
    align-content: center;
   }

`;

export const DropdownContainer = styled.div `
   display: flex;
   margin-left: 3em;
   align-items: center;


   & p {
    color: white;
   }

`;