import styled from "styled-components";

export const StyledButton = styled.button`
    width: 86px;
    height: 30px;
    
    border: none;
    border-radius: 5px;
    background-color: rgba(78, 113, 254, 1);
    
    color: white;
    font-size: 10px;
    font-weight: 700;
    
    &:last-child {
        background-color: transparent;
        border: 2px solid rgba(78, 113, 254, 1);
        color: rgba(78, 113, 254, 1);
        
        &:hover {
            background-color: rgba(78, 113, 254, 1);
            border: none;
            color: white;
        }
    }
    
    &:hover {
        background-color: transparent;
        border: 2px solid rgba(78, 113, 254, 1);
        color: rgba(78, 113, 254, 1);
    }
`;