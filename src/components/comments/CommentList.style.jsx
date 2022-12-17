import styled from "@emotion/styled";

export const CommentsListMain = styled.div `
    border-radius: 1em;
    margin-top: 1em;
    margin-left: 2em;
    width: 800px;
    height: 220px;
    background-color: white;
         

`;
export const ButtonArrow = styled.div`
        margin-left: 2em;
        display: flex;
   & button {
            margin-right: 1em;
            border-radius: 0.7em;
            border: none;
            width: 4em;
            height: 60px;
            cursor: pointer;
            margin-top: 2em;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        } 
        & h4 {
            margin-top: 2em;
        }
        & button span {
            font-size: 1.3em;
            
        }
` ;



export const CommentsListTitle = styled.div `
    display: flex;
    margin-left: 4em;
    margin-bottom: 1em;

`;

export const CommentsListPar = styled.div `
    display: flex;
    margin-left: 4em;
    display: flex;
    justify-content: space-between;
    & p {
        width: 85%;
        margin-left: 2em;
    }
    & span {
        margin-right: 1.3em;
        display: flex;
    } & h4 {
        margin-left: 0.5em;
    }

`;


export const ButtonEnhancement =styled.div`
    margin-left: 6em;
    margin-top: 1em;


& button {
            margin-right: 1em;
            border-radius: 0.7em;
            border: none;
            height: 6vh;
            width: 8em;
            cursor: pointer;
            
        }

        & button:hover {
            background-color: blue;
            color: white;
            
        }
        

`;