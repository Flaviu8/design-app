import styled from "@emotion/styled";


export const RoadMapContainer = styled.div`
    background-color: white;
    width: 350px;
    height: 220px;
    color: white;
    border-radius: 1em;
    margin-top: 2em;
    margin-left: 5em;

`;


export const TitleContainerRoadMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 1em;
    margin-right: 1em;
   
    & h3, a {
        color: black;
        margin-top: 1em;
    }

`;

export const TaskRoadMap = styled.div`
    display: block;

    & ul li {
        color: black;
        list-style: none;
        display: flex;
        align-items: center;
        margin-left: 1em;
        margin-top: 0.6em;
    }

    & p {
        margin-top: 1.5em;
        
    } 
    

`;


export const Planned = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1em;
    & p {
        color: black;
    }

    & li::before {content: "•"; color: orange; display: inline-block; margin-right: 0.3em; font-size: 2em;}
`;

export const InProgress = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1em;
    & p {
        color: black;
    }

    & li::before {content: "•"; color: darkred; display: inline-block; margin-right: 0.3em; font-size: 2em;}
`;

export const Live = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 1em;
    & p {
        color: black;
    }

    & li::before {content: "•"; color: lightgreen; display: inline-block; margin-right: 0.3em; font-size: 2em;}
`;
