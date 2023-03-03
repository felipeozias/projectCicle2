import styled from "styled-components";

export default function Main() {
    const StyledMain = styled.main`
    position:absolute;
    scroll-behavior: smooth;
    margin: 50px 0 0;
    padding: 20px 30px 60px;
    scroll-behavior: auto;
    left: 0;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    `
    return (
        <StyledMain>
            <h1>Social Torcedor</h1>
            <img src='./favicon.png' alt="Logo" />
        </StyledMain>
    )
}