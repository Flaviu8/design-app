import styled from "@emotion/styled";


export const MainControlsContainer = styled.div`
    background-color: white;
    width: 350px;
    height: 220px;
    color: white;
    border-radius: 1em;
    margin-top: 2em;
    margin-left: 5em;

`;


export const ButtonTop = styled.div`
        display: flex;
        margin-left: 2em;
        padding-top: 2em; 
        

        & button {
            margin-right: 1em;
            border-radius: 0.7em;
            border: none;
            height: 4vh;
            width: 3em;
            cursor: pointer;
        }
        & button:hover {
            background-color: blue;
            color: white;
            
        }


`;

export const ButtonMiddle = styled.div`
        display: flex;
        margin-left: 2em;
        margin-top: 2em; 
        
        & button {
            margin-right: 1em;
            border-radius: 0.7em;
            border: none;
            height: 4vh;
            width: 4em;
            cursor: pointer;
            
        }
        & button:nth-of-type(1) {
            width: 9em;
            
        }
        & button:hover {
            background-color: blue;
            color: white;
            
        }
        
        
`;

export const ButtonBottom = styled.div`
        display: flex;
        margin-left: 2em;
        margin-top: 1.8em; 

        & button {
            margin-right: 1em;
            border-radius: 0.7em;
            border: none;
            height: 4vh;
            width: 6em;
            cursor: pointer;
            
        }

        & button:hover {
            background-color: blue;
            color: white;
            
        }
     

`;