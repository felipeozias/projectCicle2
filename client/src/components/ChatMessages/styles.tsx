import styled from "styled-components";

export const StyledChatBoxMessages = styled.div`
    width: 100%;
    margin-bottom: 5px;
    overflow: auto;
    flex: 1;
`;

export const StyleMessage = styled.div`
    width: 100%;
    margin-bottom: 7px;
    display: inline-block;
    background-color: #dfdfdf;
    border-radius: 5px;

    & span{
        font-weight: bold;
        color: #203396;
    }
    & p{
        color:black;
    }
`;
