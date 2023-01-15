import styled from "styled-components";

// header
export const HeaderContainer = styled.header`
header{
    position: relative;
    z-index:99;
    width:100%; height:100vh;
}

nav{
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:100%; height:100px;
    background:transparent;
    position: fixed;
    z-index:9;
}
`;