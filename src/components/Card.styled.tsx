import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 300px;
    height: 350px;
    padding: 10px;
    margin: 20% auto;

    border-radius: 15px;

    background-color: #FFFFFF;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);

    font-family: "Inter", sans-serif;
    line-height: 20px;

    img {
        border-radius: 10px;
    }

    h2 {
        margin-left: 10px;
        font-size: 16px;
        font-weight: 700;
    }

    p {
        margin-left: 10px;

        font-size: 12px;
        font-weight: 500;
        color: rgba(171, 179, 186, 1);
    }

    div {
        margin-left: 10px;
        display: flex;
        gap: 12px;
    }

`;