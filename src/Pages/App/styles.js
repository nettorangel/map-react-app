import styled from "styled-components";

export const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav "
    "GridLayoutContent";
  grid-template-rows: 0.5fr 1fr;
  grid-template-columns: 8fr;
`;
export const GridLayoutContent = styled.div`
  // width: 45vw;
  height: 100vh;
  justify-self: center;
  display: grid;
  grid-template-areas:
    "nav nav"
    "asideLeftSearch asideRightSearch"
    "asideLeft asideRight";
  grid-template-rows: 0.5fr 1fr 8fr;
  grid-template-columns: 5fr 5fr;
`;
export const Nav = styled.nav`
  grid-area: nav;
  background: #2874a6;

  h2 {
    font-weight: 500;
    margin-left: 60px;
    color: white;
    font-family: Lato;
  }
`;
export const AsideLeftSearch = styled.aside`
  grid-area: asideLeftSearch;
`;
export const AsideRightSearch = styled.aside`
  grid-area: asideRightSearch;

  h3 {
    font-weight: 500;
    color: #515a5a;
    font-family: Lato;
    position: absolute;
    margin-left: 16px;
  }
`;
export const AsideLeft = styled.aside`
  grid-area: asideLeft;
`;
export const AsideRight = styled.aside`
  grid-area: asideRight;
`;
export const CardWrapper = styled.div`
  overflow: hidden;
  margin: 68px auto 0;
  border: 1px solid #b2babb;
  width: 500px;
  font-family: "Lato";
  box-shadow: 1px 1px 1px 1px #b2babb;
  border-radius: 5px;

  &.revenues {
    width: 400px;
    margin: 68px 15px 0;
  }

  &.search {
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 8px;
    }
  }

  input {
    font-family: "Lato";
    width: 100%;
    border: none;
    height: 20px;
    font-size: 17px;
    padding: 5px;

    &.left-align {
      text-align: right;
      padding-left: 0px;
      width: 99%
    }

  }
  input:focus{
    outline: none;
  }
`;
